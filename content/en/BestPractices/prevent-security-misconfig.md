---
title: Prevent Security Misconfiguration
linkTitle: Prevent Security Misconfiguration
weight: 630
description: >
  Configure your software properly to avoid security issues.
---

{{% pageinfo %}}
In this article, we describe common security misconfigurations.
{{% /pageinfo %}}

OWASP includes security misconfiguration in their [Top 10 Web Application Security Risks (2021)](https://owasp.org/www-project-top-ten/).

## Description

Security misconfigurations are failures to implement the required security controls in a software component. Misconfigurations may lead to:

- Disclosure of sensitive information
- Data or system compromise

## Examples

Let's explore some common examples of software misconfiguration.

### Debug Mode Enabled

A developer may leave the debug mode enabled in the production environment. Debug information may contain sensitive data such as:

- Application internal paths
- Secret keys
- Code snippets

To prevent this:

- Configure security settings for your language and framework
- Disable the debug mode in the production environment
     - For a .NET application, update the `Web.config` or `Machine.config` file:

          ```
          <compilation debug="false"/>
          ```

### Verbose Error Messages

Similar to the [previous example](#debug-mode-enabled), an attacker may retrieve sensitive data from verbose error messages or a stack trace.

To prevent this:

- Don't expose a stack trace to users
- Configure custom error messages for your software
     - For a .NET application, modify the `Web.config` file:

          ```
          <system.web>
          <customErrors mode="RemoteOnly" defaultRedirect="Error.aspx">
          <error statusCode="401" redirect="CustomPage.aspx" />
          <error statusCode="403" redirect="CustomPage.aspx" />
          <error statusCode="404" redirect="NotFound.aspx" />
          <error statusCode="500" redirect="Error.aspx" />
          </customErrors>
          </system.web>
          ```

### Directory Listing

Directory listing allows users to see all files and directories stored on a web server. A malicious actor may get unauthorized access to sensitive files. Search the web with `intitle: "index of /"` to see websites that have directory listing enabled.

In the following example, we show how to prevent this problem for a Tomcat web server:

1. Open the `conf/web.xml` file in the directory where Tomcat is installed.

1. In the file, set `<param-value>false</param-value>` to `false` for `<param-name>listings</param-name>`:

     ```
     <servlet>
          <servlet-name>default</servlet-name>
          <servlet-class>org.apache.catalina.servlets.DefaultServlet</servlet-class>
          <init-param>
               <param-name>debug</param-name>
               <param-value>0</param-value>
          </init-param>
          <init-param>
               <param-name>listings</param-name>
               <param-value>false</param-value>
          </init-param>
          <load-on-startup>1</load-on-startup>
     </servlet>
     ```

1. In the Apache web server, create a `.htaccess` file in the related directory.

1. Add the following lines to the Apache web server configuration file, or replace existing lines with:

     ```
     <Directory /{YOUR DIRECTORY}>
     Options FollowSymLinks
     </Directory>
     ```

To turn directory listing off, modify the configuration files of your web server.

### Default Accounts

A developer may forget to remove default accounts when releasing the application.

Examples of default accounts:

- Application accounts
- Web server logins
- Cloud instances
- Databases

To prevent this:

- Delete default accounts from the development environment once the development is complete
- Change default passwords that come with installation packages
- Restrict the exposure of administrator pages and web server logins in the production environment
- Establish a strong password policy for your accounts

### Files or Directories in a URL Path

Sensitive files that may appear in a URL path include:

- Backup files
- Log files
- Database files
- Configuration files

An attacker may discover sensitive files by brute-forcing the URL paths.

To prevent this:

- Remove any sensitive files or directories from the URL paths
- Check your code before releasing it
  - Avoid committing code that is meant only for the development environment
- Apply a web application firewall with rate limiting checks to prevent URL fuzzing or a brute-force attack
- Set up mandatory access control systems such as SELinux to protect key files

### Misconfigured Cloud Services

Misconfigurations in the cloud infrastructure or services may lead to data compromise. For example, an [Amazon S3 bucket](https://aws.amazon.com/s3/) with insufficient configuration may grant read and write access to an attacker.

To prevent this:

- Implement security automation to identify misconfigurations
  - Use a DAST tool such as [OWASP Zap](https://www.zaproxy.org/) to identify vulnerabilities
- Install updates and review your cloud security configurations on a regular basis

## Best Practices

- Create and follow a security checklist
- Use security design review and threat modeling in your development lifecycle
- Perform a security check for each software layer before releasing it to the production environment
- Scan the production environment with a security scanner

## References

- https://owasp.org/Top10/A05_2021-Security_Misconfiguration/
- https://docs.aws.amazon.com/AmazonS3/latest/UG/EditingBucketPermissions.html 
- https://aws.amazon.com/s3/
