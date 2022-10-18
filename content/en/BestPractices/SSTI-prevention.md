---
title: Prevent Server-Side Template Injections
linkTitle: Prevent SSTI
weight: 670
description: >
  Keep your app safe from SSTI attacks.
---

{{% pageinfo %}}
Learn about the Server-Side Template Injection (SSTI) vulnerability, and discover how to prevent it.
{{% /pageinfo %}}

OWASP includes SSTI in the [Top 10 Web Application Security Risks (2021)](https://owasp.org/www-project-top-ten/) and lists it under [Injection](https://owasp.org/Top10/A03_2021-Injection/).

## Description

A server-side template injection allows an attacker to execute server-side commands by injecting malicious data into a template. A vulnerability occurs when a threat actor embeds invalid user input in a template engine. This can result in [remote code execution (RCE)](https://www.imperva.com/learn/application-security/remote-code-execution/).

For example, depending on the IP address from which a user accesses a site, an injection may look like this:

```html
<h1>Welcome to Example Project!</h1>
<u>You're accessing this page from a remote address: {{ip}}</u>

The injection passes a remote address into the `{{ip}}` variable while reusing the rest of the HTML code for every request it receives.

SSTI may have a devastating effect. It generally results in remote code execution by controlling the backend server. Even if the attacker doesn't execute any code, they may still access sensitive server data.

## Attack Scenarios

Let's see some example attack scenarios.

### Twig Template

This code example illustrates an SSTI vulnerability in the `getFilter()` function that uses `call_user_func($callback, $name)`. From the HTTP GET request, the server retrieves and executes the `name` parameter:

```php
public function getFilter($name)
{
        [snip]
        foreach ($this->filterCallbacks as $callback) {
        if (false !== $filter = call_user_func($callback, $name)) {
            return $filter;
        }
    }
    return false;
}

$output = $twig->render($_GET['name'],  array("first_name" => $user.first_name) );
```

#### Analysis

In this example, the user controls the template content using the `name` GET parameter rather than a value passed into it.

#### Impact

An attacker can execute an arbitrary shell command by registering `exec` as a filter callback and then calling `getFilter()`.

They can use the `env` attribute of the `Twig_Environment` object to run system commands.

```ts
{{_self.env.registerUndefinedFilterCallback("exec")}}{{_self.env.getFilter("id")}}

#### Prevention

To prevent this, pass a name into the template, as in the following example:

```ts
$output = $twig->render("Dear {name},", array("first_name" => $user.first_name) ); 
```
### Jinja2

This Jinja2 code contains a vulnerability. The variable `name` that a user passes is concatenated to the template string.

```ts
@app.route("/page")
def page():
    name = request.values.get('name')
    output = Jinja2.from_string('Hello ' + name + '!').render()
    return output
```

#### Analysis

When you send an HTTP GET request, the page function accepts the `name` parameter and renders an HTML response with the content of the variable.

#### Impact

Improper use of templates may lead to both [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) and SSTI vulnerabilities. The following code block is an example of a malicious input through the `name` parameter.

```ts
{{config.__class__.__init__.__globals__['os'].popen('ls').read()}}
```

### Bypassing Blacklists

Attackers may circumvent the blacklists that you configured.
 
```ts
@app.route("/page")
blacklist = ["__class__",”request[request.”]
def page():
    name = request.values.get('name')
    for bad_string in blacklist:
        if  bad_string in name:
            return "HACKING ATTEMPT {}".format(bad_string), 400
        else:
            output = Jinja2.from_string('Hello ' + name + '!').render()
            return output    
```

#### Analysis

A threat actor can bypass `__class__` and retrieve the value of a new GET parameter using `request.args.param`. Because we included `request.args.param` in the blacklist, we can use a native Jinja2 function `| attr().`

#### Impact

An attacker can pass the following input to the server using the `name` parameter.

```ts
name={{request|attr('application')|attr('\x5f\x5fglobals\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fbuiltins\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fimport\x5f\x5f')('os')|attr('popen')('id')|attr('read')()}}
```

#### Prevention

Pass the `name` variable to the template context.

```ts
@app.route("/page")
def page():
    name = request.values.get('name')
    output = Jinja2.from_string('Hello {{name}}!').render(name = name)
    return output
```

## Best Practices

A template engine allows you to streamline the process of updating and maintaining your application.

For example, designers or integrators can autonomously make a design change without touching the code flow. Their changes are independent of the code and logical processing. Similarly, developers can change logical elements and code without affecting data display or breaking the interface.

To prevent an SSTI attack, never allow users to modify or create templates. If you have no other choice, follow our recommendations.

### Sanitize Data

Before using a template, identify and remove potentially malicious content.

Make sure to efficiently analyze data that users pass. You can use various methods to do this, such as regular expression tools or whitelists of authorized expressions.

However, there is a drawback to this solution. Configuration errors can put your environment at risk.

### Set Up a Sandbox Environment

You can turn off risky modules and features in a closed sandbox environment. This allows you to limit access to other application components.

It may be challenging to create a sandbox environment. Misconfigurations may result in bypassing the environment.

#### Logic less template
A logic-less engine template exists, which separates visual rendering from code interpretation. Mustache is one of the most popular.
In Mustache templates, none of the control flow is explicit, as data drive all control. As a result, application logic cannot be integrated into Mustache templates. It is best to keep the logic and presentation as separate as possible to reduce the risk of template-based attacks.
Therefore the risk of RCE attacks has therefore been significantly reduced.

## References
- https://portswigger.net/web-security/server-side-template-injection
- https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection
- https://www.cobalt.io/blog/a-pentesters-guide-to-server-side-template-injection-ssti
- https://www.invicti.com/blog/web-security/server-side-template-injection/
