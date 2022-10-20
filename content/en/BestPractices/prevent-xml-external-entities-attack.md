XML External Entities (XXE) vulnerability was ranked 4th in the OWASP Top 10 Web Application Security Risks (2017) based on its impact and likelihood, which was later merged with the Security Misconfiguration category, ranked 5th in the OWASP Top 10 2021. 

## Description

XML External Entities (XXE) is a server-side security vulnerability that allows attackers to utilize the misconfigured XML parser to reference an external entity. This could lead to sensitive data exposure, server-side request forgery, remote code execution and denial of service attack scenarios. 


XXE has a wide range of impacts. For example, it may allow a threat actor to load external entities and attempt to perform remote code execution or extract sensitive information such as local files. 

A malicious actor may achieve the following through a successful XXE exploitation:

- Read Internal Local Files 
- Sensitive Data Exposure 
- Server-Side Request Forgery 
- Denial of Service 
- Remote Code Execution 


## Attack Scenarios

Let’s see some examples of XXE attacks.


### XXE on Zend Framework via PHP FPM

This code example is based on  CVE-2015-5161, which exploits a vulnerability in the Zend Framework leading to XXE attack. The following code is an illustration of a PHP application using Zend Framework to implement XML-RPC call:

```
<?php
// Simple XML-RPC SERVER

    function helloworld() {
        $text = "Hello world! This request was executed via ".php_sapi_name().".";
        return $text;
    }
    set_include_path("./ZendFramework-1.12.13/library/");
    require_once("./ZendFramework-1.12.13/library/Zend/Loader/Autoloader.php");
    Zend_Loader_Autoloader::getInstance();

    $server = new Zend_XmlRpc_Server();
    $server->addFunction('helloworld');

    echo $server->handle();
?>
```

To exploit XXE, an attacker can forge a payload like the following, which will result in an error due to the heuristicScan ENTITY detection and allow an attacker to read the content of the `/etc/passwd` file.


```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE methodCall [
  <!ENTITY pocdata SYSTEM "file:///etc/passwd">
]>
<methodCall>
  <methodName>retrieved: &pocdata;</methodName>
</methodCall>
```


### XXE in Java Applications:

Developers often use popular frameworks and functions to implement specific features. However, some functions and methods are not secure and may unintentionally lead to vulnerabilities like XXE. For example, the below code snippet is non-compliant code for Dom4j and Jdom2 libraries: 

#### For Dom4j library:

`SAXReader xmlReader = new SAXReader(); // Noncompliant`

#### For Jdom2 library:

`SAXBuilder builder = new SAXBuilder(); // Noncompliant`

In both of the above libraries, the application evaluates input through the `SAXReader` and `SAXBuilder` functions, resulting in an XXE attack. To minimize your risks, analyze the methods you use to handle user-supplied input for any known security concerns. Avoid insecure methods. If you can’t find an alternative, write a wrapper around the method to filtrate and prevent attacks. Below are examples of compliant code solutions: 

#### For Dom4j library:

```
SAXReader xmlReader = new SAXReader();
xmlReader.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
```

#### For Jdom2 library:

```
SAXBuilder builder = new SAXBuilder();
builder.setProperty(XMLConstants.ACCESS_EXTERNAL_DTD, "");
builder.setProperty(XMLConstants.ACCESS_EXTERNAL_SCHEMA, "");
```

#### Denial of Service - XML Billion Laugh Attack 

XML parsers are prone to denial of service attacks when a malicious XML document containing the same large entity is repeated repeatedly, causing an infinite processing loop. In addition, due to the lack of restrictions in place, such as a limit on the number of entity expansions, the XML processor can consume a heavy amount of memory and time during the parsing resulting in a Denial of Service attack. 

#### For Dom4j library:

```
SAXReader xmlReader = new SAXReader();
xmlReader.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, false); // Noncompliant
```

#### Payload: 


To avoid this situation, a further validation can be added via introduction `xmlReader.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);` code elements which will result into a secure code. For example: 

#### For Dom4j library:

```
SAXReader xmlReader = new SAXReader();
xmlReader.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);
```


### File Inclusion via XXE

The XInclude element can be used to include XML files. However, the XML processors replace the XInclude element with the file's content, which may lead to a local file inclusion attack if the reasonable restrictions are not implemented. Below is an example of non-compliant code in the Java Dom4j library: 

#### For Dom4j library:

```
SAXReader xmlReader = new SAXReader();
xmlReader.setFeature("http://apache.org/xml/features/xinclude", true); // Noncompliant
```

#### Payload: 

```
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///etc/shadow" >]>
<foo>&xxe;</foo>
```

Please note that XIncludes is disabled by default. However, to secure the above code, the XInclude needs to be disabled by setting the property to false as follows: 

#### For Dom4j library:

```
SAXReader xmlReader = new SAXReader();
xmlReader.setFeature("http://apache.org/xml/features/xinclude", false);
```


## Best Practices

- Disable External Entity Referencing
    - Restrict the DTD and External Entity parsing from the XML parser.

- Use of Secure Libraries
    - Implement the latest patches to the XML libraries and always use secure alternatives.

- Disallow unnecessary protocols
    - Restrict the use of unnecessary protocols such as file://, gopher://, or schema://. An attacker may use them to bypass the restrictions you’ve set.

- Restrict verbose responses from the server
    - Always use non-verbose, generic error messages. A threat actor may use verbose messages to perform blind attacks.

- Never trust user-supplied input
    - Properly validate and sanitize user-supplied input before passing it to sensitive methods such as URL parsers. When writing code, consider user-supplied input as unsafe.
- Deploy a restrictive firewall
    - Use a web application firewall (WAF) with strict blocking rules to detect, block, and log any malicious payload or unintended input.

## References

- https://legalhackers.com/advisories/zend-framework-XXE-vuln.html
- https://rules.sonarsource.com/
- https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing
- https://brightsec.com/blog/xxe-attack
- https://www.cobalt.io/blog/how-to-execute-an-xml-external-entity-injection-xxe
