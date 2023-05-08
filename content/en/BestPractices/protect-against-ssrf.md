---
title: Protect against Server-Side Request Forgery
linkTitle: Protect against SSRF
weight: 630
description: >
  Protect your app against SSRF attacks.
---

{{% pageinfo %}}
See examples of Server-Side Request Forgery (SSRF) exploitation, and learn how to minimize your risks.
{{% /pageinfo %}}

SSRF is ranked tenth in the [OWASP Top 10 Web Application Security Risks (2021)](https://owasp.org/www-project-top-ten/) based on its impact and likelihood.

## Description

[Server-Side Request Forgery (SSRF)](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/) is a server-side security vulnerability that allows an attacker to make arbitrary requests from the application server.

SSRF has a wide range of impacts. For example, it may allow a threat actor to perform a simple external interaction to steal sensitive metadata information, which may lead to account takeover. Read a real-life [case study](https://medium.com/swlh/capital-one-data-breach-a-cloud-security-case-study-7a06ec900460) describing this type of attack.

A malicious actor may achieve the following through a successful SSRF exploitation:

- Scan a local or remote port
- Read a local file
- Interact with internal apps, services, or network
- Read metadata from cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, Google Cloud, or DigitalOcean
- Perform attacks:
  - Remote Code Execution (RCE) by chaining services on the internal network
  - Reflected Cross-Site Scripting (XSS)
  - Cross-Site Request Forgery (CSRF)

## Attack Scenarios

Let's see some examples of SSRF attacks.

### Accessing a Localhost

In the following code example, the application accepts user-supplied input through the `url` parameter and passes it to the `urllib.request.urlopen(url).read()` function. The application processes URLs without filtration, which may lead to an SSRF attack.

An attacker may pass a URL such as `https://www.example.com/test/?url=http://127.0.0.1` to the vulnerable code and access the localhost `127.0.0.1`.

```python
from flask import request

import urllib



@app.route('/proxy')

def proxy():

    url = request.args["url"]

    return urllib.request.urlopen(url).read() 

```

The following code sample is a secure alternative to the vulnerable code. The application checks the user-supplied URL against `DOMAINS_WHITELIST` and processes the request only if the domains match.

The localhost URL `127.0.0.1` doesn't match `domain1.com` or `domain2.com`, so the malicious request fails.

```python
from flask import request

import urllib


DOMAINS_WHITELIST = ['domain1.com', 'domain2.com']


@app.route('/proxy')

def proxy():

    url = request.args["url"]

    if urllib.parse.urlparse(url).hostname in DOMAINS_WHITELIST:

        return urllib.request.urlopen(url).read()
```

### Using a Known Vulnerable Function

Developers often use popular frameworks and functions to implement specific features. However, some functions and methods are not secure and may unintentionally lead to vulnerabilities such as SSRF.

The following code sample contains the `URI.resolve` method. If the user provides an absolute URL, the method returns its parameter. An attacker can abuse this behavior to perform an SSRF attack.

```java
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

To minimize your risks, analyze methods that you use to handle user-supplied input for any known security concerns. Avoid insecure methods. If you can't find an alternative, write a wrapper around the method to filtrate and prevent attacks.

### Extracting Cloud Metadata

For applications hosted on cloud platforms such as AWS, Microsoft Azure, or Google Cloud, an attacker may leverage an SSRF issue to steal the cloud metadata credentials.

In the following code sample, we provide code that:

- Accepts user input from the `image_url` parameter and passes it to the `$url` function without any sanitization
- Checks `header("Content-Type: image/png");` for the `image/png` header type
- Passes malicious user-supplied input from `$file` to the `fpassthru()` function and returns data to the user

```php
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

A threat actor may attempt to extract metadata with the following malicious payload:
`http://127.0.0.1/ssrf.php?image_url=http://169.254.169.254/latest/meta-data/hostname`. This payload `http://169.254.169.254/latest/meta-data/hostname` returns information related to `hostname`.

Similarly, a black hat hacker may extract `AWS Secret` to gain privileged access and compromise your AWS account.

To mitigate attacks on the cloud metadata on the AWS Cloud, apply proper validation on the code level and use solutions such as [Instance Metadata Service Version 2 (IMDSv2)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html).

Now that you've explored several SSRF exploitation scenarios, learn how to mitigate and prevent them.

## Best Practices

- Disallow unnecessary protocols.
  - Restrict the use of unnecessary protocols such as `file://`, `gopher://`, or `schema://`. An attacker may use them to bypass the restrictions you've set.
- Restrict verbose responses from the server.
  - Always use non-verbose, generic error messages. A threat actor may use verbose messages to perform blind attacks.
- Never trust user-supplied input.
  - Properly validate and sanitize user-supplied input before passing it to sensitive methods such as URL parsers. When writing code, consider user-supplied input as unsafe.
- Implement a strong allowlist.
  - Use allowlist-based validation for the IP addresses and DNS names to which your application requires access. This prevents an attacker from trying to request unintended resources.
- Implement the [principle of least privilege](https://www.cisa.gov/uscert/bsi/articles/knowledge/principles/least-privilege/).
  - This principle states that a user should be granted only the minimum necessary rights to perform an operation, for the shortest time possible.
- Deploy a restrictive firewall.
  - Use a web application firewall (WAF) with strict blocking rules to detect, block, and log any malicious payload or unintended input.
- Use the cloud built-in protection mechanism.
  - Use security features that your cloud provider offers to mitigate against common security vulnerabilities. For example, the AWS Cloud provides the [Instance Metadata Service Version 2 (IMDSv2)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html) method that protects against SSRF attacks and blocks unauthorized access to metadata.

## References

- https://owasp.org/www-project-top-ten/
- https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/
- https://medium.com/swlh/capital-one-data-breach-a-cloud-security-case-study-7a06ec900460/
- https://learn.snyk.io/lessons/ssrf-server-side-request-forgery/javascript/
- https://rules.sonarsource.com/java/
- https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html
- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html
- https://www.cisa.gov/uscert/bsi/articles/knowledge/principles/least-privilege/
