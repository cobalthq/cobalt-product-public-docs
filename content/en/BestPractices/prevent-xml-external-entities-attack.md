---
title: Protect against XXE Attacks
linkTitle: Protect against XXE Attacks
weight: 680
description: >
  Securely configure your XML processor to prevent XXE attacks.
---

{{% pageinfo %}}
Learn how to protect your application from malicious Extensible Markup Language (XML) inputs.
{{% /pageinfo %}}

[OWASP](/getting-started/glossary/#open-web-application-security-project-owasp) ranked XML External Entities (XXE) vulnerability fourth in the [OWASP Top 10 Application Security Risks 2017](https://owasp.org/www-project-top-ten/2017/Top_10) based on its impact and likelihood. Later, they merged this category with Security Misconfiguration ranked fifth in the [OWASP Top 10 2021](https://owasp.org/www-project-top-ten/).

## Description

An XML External Entities (XXE) attack is a server-side vulnerability that allows an attacker to exploit a misconfigured XML parser to reference an external entity. This may lead to sensitive data exposure, Server-Side Request Forgery (SSRF), Remote Code Execution (RCE), or Denial of Service (DoS) attacks.

XML documents may contain a definition for XML entities, often known as Document Type Definition (DTD). Depending on their use in the application, DTDs can be either internal or external.

In an XXE attack scenario, a threat actor attempts to submit an XML file that calls an external entity, for example, with a `file://` URI. An attacker may use this URI to make the application process an external DTD and read the contents of an internal system file. Here are some examples:

- `file:///c:/winnt/win.ini` may read the contents of `C:\Winnt\win.ini`.
- `file:///etc/passwd` may access the contents of `/etc/passwd`.

Similarly, an attacker can use other URI schemes such as `HTTP://`, `HTTPS://`, `FTP://`, or `GOPHER://` to exploit a vulnerable application using an XXE attack.

XXE has a wide range of impacts. For example, it may allow a threat actor to load external entities and attempt to perform remote code execution or extract sensitive information such as local files.

A malicious actor may achieve the following through a successful XXE exploitation:

- Read internal local files
- Get access to sensitive data
- Perform attacks:
  - Server-Side Request Forgery (SSRF)
  - Denial of Service (DoS)
  - Remote Code Execution (RCE)

## Attack Scenarios

Let's see some vulnerable code examples to understand how XXE attacks work.

### PHP Framework

The following code example uses a PHP endpoint to parse the XML input and the `php-xml` module to perform XML parsing. However, due to the support of external DTD parsing, an attacker can launch an XXE attack.

```php
<?php

require_once('../_helpers/strip.php');


libxml_disable_entity_loader (false);

$xml = strlen($_GET['xml']) > 0 ? $_GET['xml'] : '<root><content>No XML found</content></root>';

$document = new DOMDocument();
$document->loadXML($xml, LIBXML_NOENT | LIBXML_DTDLOAD);
$parsedDocument = simplexml_import_dom($document);

echo $parsedDocument->content;

```

A malicious actor can use the `expect://` function of PHP to perform a Remote Code Execution attack using XXE. Here is an example payload:

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [ <!ELEMENT foo ANY >
<!ENTITY xxe SYSTEM "expect://id" >]>
<creds>
    <user>&xxe;</user>
    <pass>mypass</pass>
</creds>
```

The command `expect://id` returns the output of the `id` command of UNIX, which typically produces an output such as `uid=0(root) gid=0(root) groups=0(root)`.

To prevent such scenarios:

- Disable unnecessary protocols and functions such as `expect://` in the example.
- Disable external DTD parsing.

### JavaScript

JavaScript frameworks such as [Node.js](https://nodejs.org/en/) don't provide native XML parsing capabilities. To allow XML parsing, you can use the `libxml` library, as shown in the following code example:

```js
const app = require("express")(),
const libxml = require("libxmljs");
app.post("/profile/add", (req, res) => {
  favorite = libxml.parseXml(req.body, { noent: true }); //noent is set to true
  addToFavorites(favorite)
});
```

In this code example, the `noent` property is set to `true`. This enables parsing external entities and may lead to an XXE attack. A threat actor may craft a malicious payload to make the server parse an external DTD, which may result in a successful XXE attack.

As a developer, avoid setting the `noent` property to `true`, which is by default disabled in `libxmljs`. This example code is a secure alternative that does not allow external DTD parsing:

```js
const app = require("express")(),
const libxml = require("libxmljs");
app.post("/profile/add", (req, res) => {
  favorite = libxml.parseXml(req.body); //noent is not set to true
  addToFavorites(favorite)
});
```

### Zend Framework through PHP FPM

This code example is based on the Zend Framework vulnerability [CVE-2015-5161](https://nvd.nist.gov/vuln/detail/CVE-2015-5161). It illustrates how a PHP application uses the Zend Framework to implement an XML-RPC call:

```php
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

To exploit XXE, an attacker can forge a payload like the following. This results in an error due to the `ENTITY` detection, allowing an attacker to read the contents of the `/etc/passwd` file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE methodCall [
  <!ENTITY pocdata SYSTEM "file:///etc/passwd">
]>
<methodCall>
  <methodName>retrieved: &pocdata;</methodName>
</methodCall>
```

### Java Framework

Java supports different XML parsers such as DOM Parser, SAX Parser, StAX Parser, JAXB, and more. When the application uses a SAX Parser for XML parsing, an XXE attack may occur—if `disallow-doctype-decl` is not set to `true`. See the following code example:

```java
package com.mkyong.xml.sax;

import com.mkyong.xml.sax.handler.PrintAllHandlerSax;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.IOException;

public class ReadXmlSaxParserXXE {

  private static final String FILENAME = "src/main/resources/staff.xml";

  public static void main(String[] args) {

      SAXParserFactory factory = SAXParserFactory.newInstance();

      try {

          // XXE attack
          SAXParser saxParser = factory.newSAXParser();

          PrintAllHandlerSax handler = new PrintAllHandlerSax();

          saxParser.parse(FILENAME, handler);

      } catch (ParserConfigurationException | SAXException | IOException e) {
          e.printStackTrace();
      }

  }

}

An attacker can craft the following payload to execute XXE in the vulnerable code shown above. This allows getting the contents of the `/etc/passwd` file.

```xml
 <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
  <company>
      <staffId>&xxe;</staffId>
  </company>
```

To prevent this, use `setFeature` to disable the DOCTYPE declaration, as shown in the following example:

```java
  SAXParserFactory factory = SAXParserFactory.newInstance();

  try {

      // https://rules.sonarsource.com/java/RSPEC-2755
      // prevent XXE, completely disable DOCTYPE declaration:
      factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);

      SAXParser saxParser = factory.newSAXParser();

      PrintAllHandlerSax handler = new PrintAllHandlerSax();

      saxParser.parse(FILENAME, handler);

  } catch (ParserConfigurationException | SAXException | IOException e) {
      e.printStackTrace();
  }
```

To learn more about remediating XXE attacks for popular XML parsers, refer to resources such as [Sonar Source Rules](https://rules.sonarsource.com/java/RSPEC-2755).

### Denial of Service: XML Billion Laughs Attack

XML parsers are prone to Denial of Service attacks when a malicious XML document containing a large entity is repeated, causing an infinite processing loop. If there are no restrictions such as a limited number of entities, an XML processor can consume a large amount of memory and time during parsing. This may result in a DoS attack.

In the following example, when the `XMLConstants.FEATURE_SECURE_PROCESSING` feature is set to `false`, an attacker may perform an XML [billion laughs attack](https://en.wikipedia.org/wiki/Billion_laughs_attack):

```xml
SAXReader xmlReader = new SAXReader();
xmlReader.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, false);
```

An attacker can craft a billion laughs attack payload like the following to cause a denial of service in the application system:

```xml
<?xml version=”1.0" encoding=”UTF-8"?>
    
    <!DOCTYPE example [
    
    <!ELEMENT example ANY >
    
    <!ENTITY lol “lol”>
    
    <!ENTITY lol1 “&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;”>
    
    <!ENTITY lol2 “&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;”>
    
    <!ENTITY lol3 “&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;”>
    
    <!ENTITY lol4 “&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;”>
    
    <!ENTITY lol5 “&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;”>
    
    <!ENTITY lol6 “&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;”>
    
    <!ENTITY lol7 “&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;”>
    
    <!ENTITY lol8 “&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;”>
    
    <!ENTITY lol9 “&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;”>
    
    ]>
    
    <example>&lol9;</example>
```

To prevent this situation, add further validation by setting `XMLConstants.FEATURE_SECURE_PROCESSING` to `true`, as shown in the following example:

```xml
SAXReader xmlReader = new SAXReader();
xmlReader.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);
```

To explore more XXE attack scenarios, refer to the OWASP [XML External Entity Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html).

## Best Practices

- Disable external entity referencing.
  - Restrict DTD and external entity parsing from the XML parser.
- Use less complex data formats.
  - Use data formats such as JavaScript Object Notation (JSON) to prevent the serialization process that could prevent XXE attacks.
- Use secure libraries.
  - Implement the latest patches in your XML libraries, and always use secure alternatives. Make sure to update the Simple Object Access Protocol (SOAP) to version 1.2 or later.
- Implement whitelisting.
  - Sanitize and filter sensitive data within XML bodies to ensure that your application doesn't accept malicious payloads.
- Use an XML Schema Definition (XSD) validator.
  - To validate the upload of XML and XSL files, use an XSD validator.
- Disallow unnecessary protocols.
  - Restrict the use of unnecessary protocols such as `file://`, `gopher://`, or `schema://`. An attacker may use them to bypass the restrictions you've set.
- As an additional preventative measure, implement [Source Code Analysis Tools (SAST)](https://owasp.org/www-community/Source_Code_Analysis_Tools) to scan the source code for XXE vulnerability patterns and harden the code.

## References

- https://legalhackers.com/advisories/zend-framework-XXE-vuln.html
- https://rules.sonarsource.com/
- https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing
- https://brightsec.com/blog/xxe-attack
- https://www.cobalt.io/blog/how-to-execute-an-xml-external-entity-injection-xxe
- https://learn.snyk.io/lessons/xxe/javascript/
