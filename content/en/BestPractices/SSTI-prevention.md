---
title: Protect against Server-Side Template Injection
linkTitle: Protect against SSTI
weight: 620
description: >
  Keep your app safe from SSTI attacks.
---

{{% pageinfo %}}
Learn about Server-Side Template Injection (SSTI) exploitation and discover how to prevent them.
{{% /pageinfo %}}



SSTI is categorised under injection in the [OWASP Top 10 Web Application Security Risks (2021)](https://owasp.org/www-project-top-ten/) and is ranked 3rd according to its impact and likelihood.


## Description

The server-side template injection vulnerability allows an attacker to execute server-side commands by injecting malicious data into a template. A vulnerability occurs when invalid user input is embedded in a template engine. This can result in [remote code execution (RCE)](https://www.imperva.com/learn/application-security/remote-code-execution/).

For example, depending on the IP that accesses a site, the site may look like this:

```ts
<h1>Welcome to the cobalt!</h1>
<u>This page is being accessed from the remote address: {{ip}}</u>
```

It will render the remote address into the {{ip}} variable while reusing the rest of the HTML for every request it receives.

Typically, server-side template injection has a devastating effect. It generally results in remote code execution by completely controlling the back-end server when a server-side template injection vulnerability is exploited. Despite not executing any code, the attacker may still be able to access sensitive server data.

## Attack Scenarios


### Twig template


This code example illustrates SSTI vulnerability in the `getFilter()` function that uses `call_user_func($callback, $name)`. From the HTTP GET request, the server retrieves and executes the `name` parameter:


```ts
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

In the above example, the user controls the template's content via the `name` GET parameter rather than a value passed into it.

#### Impact

An arbitrary shell command can be executed easily by registering `exec` as a filter callback and then calling `getFilter()`.

An attacker can execute system commands using the "env" attribute of the "Twig_Environment" object.



```ts
Attacker’s input via name parameter,

{{_self.env.registerUndefinedFilterCallback("exec")}}{{_self.env.getFilter("id")}}
```

#### Prevention

Everything works fine if the name is passed into the template, as in the following example.

```ts
$output = $twig->render("Dear {name},", array("first_name" => $user.first_name) ); 
```



### Jinja2

A vulnerability exists in the following Jinja2 code because the user-supplied variable `name` is concatenated to the template string. When an HTTP GET request is made, the page function accepts a `name` parameter and renders an HTML response with the contents of the name variable.



```ts
@app.route("/page")
def page():
    name = request.values.get('name')
    output = Jinja2.from_string('Hello ' + name + '!').render()
    return output
```


#### Analysis

When an HTTP GET request is made, the page function accepts a 'name' parameter and renders an HTML response with the contents of the name variable.

#### Impact

As a result of this usage of templates, both XSS vulnerabilities and SSTI vulnerabilities are created. The following code block is an example of an attacker’s input via the `name` parameter.

```ts
{{config.__class__.__init__.__globals__['os'].popen('ls').read()}}
```


### Bypassing the blacklisting

The problem with blacklists is that they can often be circumvented, which is terrible.
 
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

It is possible to retrieve the value of a new `cobalt` GET parameter using the `request.args.param`. An attacker can bypass `__class__` using this. Since we have also blacklisted `request.args.param`, we will use jinja2 native function called `| attr().` 


#### Impact

An attacker can pass the following input to the server using the `name` parameter.

```ts
name={{request|attr('application')|attr('\x5f\x5fglobals\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fbuiltins\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fimport\x5f\x5f')('os')|attr('popen')('id')|attr('read')()}}
```

#### Prevention

The variable `name` should be passed to the template context.


```ts
@app.route("/page")
def page():
    name = request.values.get('name')
    output = Jinja2.from_string('Hello {{name}}!').render(name = name)
    return output
```


## Best practices

A template engine has advantages and facilitates modifications. For example, a design change can be made without touching the code flow and autonomously by the designers/integrators. The changes are independent of the code and logical processing. In the same way, developers can change logical elements and code without affecting data display or breaking the interface. It makes maintaining the project easier.
For SSTI prevention, never allow users to modify or create templates. However, when business needs arise, there are solutions:

#### Sanitization
Before using a template, detecting and removing potentially malicious content is necessary. Data transmitted by users must therefore be efficiently analyzed. Various methods can be used to accomplish this (e.g., regex, whitelists of authorised expressions).
There is, however, a drawback to this solution. In addition, configuration errors can put your environment at risk.

#### Sandboxing
The aim is to provide a closed environment where risky modules and features are disabled. For example, if user-supplied data is interpreted, it cannot provide access to other components or data.
It may be challenging to create a sandbox environment, and misconfigurations may result in bypassing the environment.

#### Logic less template
A logic-less engine template exists, which separates visual rendering from code interpretation. Mustache is one of the most popular.
In Mustache templates, none of the control flow is explicit, as data drive all control. As a result, application logic cannot be integrated into Mustache templates. It is best to keep the logic and presentation as separate as possible to reduce the risk of template-based attacks.
Therefore the risk of RCE attacks has therefore been significantly reduced.

## References
- https://portswigger.net/web-security/server-side-template-injection
- https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection
- https://www.cobalt.io/blog/a-pentesters-guide-to-server-side-template-injection-ssti
- https://www.invicti.com/blog/web-security/server-side-template-injection/
