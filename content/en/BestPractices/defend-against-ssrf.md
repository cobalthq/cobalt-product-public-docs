# Defend Against Server-Side Request Forgery
## Description 

[Server-Side Request Forgery (SSRF)](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/) is a server-side security vulnerability that allows a malicious actor (attacker) to make arbitrary requests from the application's server. 


SSRF has a wide range of impacts. For example, it could allow an attacker to perform a simple external interaction to steal sensitive AWS metadata information that could eventually lead to an account takeover. SSRF, given its impact and likelihood, has been rated at 10th position in the OWASP Top 10 (2021) vulnerabilities. 



[Optional] On July 29th, 2019, a widely known organization, CapitolOne, suffered a data breach that exposed 140,000 Social Security Numbers, 80,000 bank account numbers, and 1 million social insurance numbers. The initial attack vector was an SSRF exploit that exposed AWS credential keys. Read more about the attack here. 



An attacker may achieve the following through a successful SSRF exploitation: 



- Local/Remote Port Scan

- Local File Read

- Interact with internal apps/service/network

- Remote Code Execution (RCE) by chaining services on the internal network

- Read Metadata Cloud (AWS, Azure, Google Cloud, Digital Ocean, etc.)

- Reflected Cross-Site Scripting (XSS)

- Cross-Site Request Forgery (CSRF)



## Examples



### Scenario - 1: Simple SSRF Attack allows access to localhost



```Vulnerable Code Snippet

from flask import request

import urllib



@app.route('/proxy')

def proxy():

    url = request.args["url"]

    return urllib.request.urlopen(url).read() 

```



In the above code, the application accepts the user-supplied input through the *url* parameter and passes it to the *urllib.request.urlopen(url).read()* function. SSRF attacks are possible since the malicious URLs supplied by the users are accepted and processed without filtration. 



Example: https://www.target.com/test/?url=http://127.0.0.1 will allow an attacker to access the `127.0.0.1 (localhost)` by passing it to the vulnerable code. 



Below is the secure alternative of this code where we use a `Whitelist` that will be matched against the user-supplied URL. The application will only process the request if the domains in the allowlist match the user-supplied URL. 



However, in this case, the `127.0.0.1` from the above example does not match `domain1.com` and `domain2.com`. Hence it would not execute the request. 





```

from flask import request

import urllib



DOMAINS_WHITELIST = ['domain1.com', 'domain2.com']



@app.route('/proxy')

def proxy():

    url = request.args["url"]

    if urllib.parse.urlparse(url).hostname in DOMAINS_WHITELIST:

        return urllib.request.urlopen(url).read()

```

---

### Scenario - 2: SSRF through Use of a Known Vulnerable Function



Often developers use known frameworks and functions to implement specific functionalities. However, many functions and methods are not secure by default and could unintentionally inhibit potentially sensitive vulnerabilities like SSRF. 



In the below code, the `URI.resolve` method is used. If an absolute URL is supplied, it will return its parameter. An attacker can abuse this behaviour to perform a successful SSRF attack. 



```

URI BASE URI = URI.create("https://repo.maven.apache.org/maven2/") ;

@GetMapping("/pkg/{group}/fartifact}/{version}")

public ResponseEntity Resource> getPackagel

        @Pathvariable String group,

        @PathVariable String artifact,

        @PathVariable String version) {

    Path pkgPath = Paths.get (String.join("/", group.split("\\.")))

            .resolve(artifact)

            . resolve (version)

            . resolve (String. format ("%S-s.jar", artifact, version))

            . normalize() ;

    URI pkgUrl = BASE _URI.resolve (pkgPath.toString());

    return sendResponseStream(this.okHttpWrapper.get(pkgUrl.toString()));

}

```

It is recommended to analyze the methods used to handle user-supplied input for any known security concerns and avoid using them. In case there is no alternative, writing a wrapper around it is recommended for further filtration and preventing an attack from execution. 

---

### Scenario - 3: Extracting Cloud Metadata 



Suppose the application is powered by Cloud services such as AWS, Digital Ocean, Google Cloud, etc... In that case, An attacker may attempt to leverage an SSRF issue to steal the cloud metadata credentials. 



Let's understand this with a practical code example: 



```

<?php



# Check if the 'url' GET variable is set

if (isset($_GET['image_url'])){

$url = $_GET['image_url'];



# Fetch the image from the user-supplied URL

$file = fopen($url, 'rb');



# Send proper header for png images

header("Content-Type: image/png");



# Dump image file

fpassthru($file);

}



echo 'Please enter image url'



?>

```



In the above code, the application accepts user input from the `image_url` parameter, which is passed to the `$url` function without any sanitization. The `header("Content-Type: image/png");` is being checked for `image/png` header type. Lastly, the `$file` passes malicious user-supplied input to the `fpassthru()` function and returns the data to the user. 



Now, an attacker could attempt to extract metadata by crafting the following malicious payload: 



- http://127.0.0.1/ssrf.php?image_url=http://169.254.169.254/latest/meta-data/hostname



This payload `http://169.254.169.254/latest/meta-data/hostname` will return the `hostname` related information. Similarly, an attacker could extract `AWS Secret`, which could be used to gain privileged access to the AWS account and compromise it. 



In the case of AWS Cloud, attacks on cloud metadata could be mitigated by applying the proper validation on the code level and using a solution like IMDSv2. 

---

Since we have now looked at various exploitation scenarios to gain a thorough understanding of SSRF vulnerabilities, it is crucial to learn how we can mitigate and prevent SSRF attacks. 


## Prevention Measures 


**1. Disallow unnecessary protocols:** It is recommended to restrict the use of unnecessary protocols such as `file://, gopher://, schema://` and others as they could be used to bypass the restrictions. 

**2. Restrict Verbose Responses from Server:** Always use a non-verbose and generic error message. A verbose error could allow an attacker to perform blind attacks.  

**3. Never Trust User Supplied Input:** Properly validate and sanitize the user-supplied input before passing it to sensitive methods such as `URL Parsers`. While writing the code, user-supplied input should always be considered as 'Unsafe'. 

**4. Implement a strong allowlist:** An allowlist-based validation should be used for the IP addresses and DNS names to which your application requires access. This would prevent an attacker from trying to request unintended resources. 

**5. Implement the principle of least privilege:** The principle of least privilege mentions that only the minimum necessary rights should be assigned to a user that requests access to a resource. The principle also states that those rights should be in effect for the shortest time possible.

**6. Deploy a Restrictive Firewall:** It is recommended to use a web application firewall (WAF) with strict blocking rules to ensure any malicious payload or unintended input is detected, blocked and logged to avoid abuse against the application.

**7. Use Cloud's Built-In Protection Mechanism:** Always use the security features offered by your cloud provider to mitigate against the common security vulnerability. For example, in the case of AWS Cloud, it provides IMDSv2, which protects against SSRF attacks and blocks the unauthorized access of meta-data. 



## References 

- https://learn.snyk.io/lessons/ssrf-server-side-request-forgery/javascript/
- https://rules.sonarsource.com/java
- https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html
