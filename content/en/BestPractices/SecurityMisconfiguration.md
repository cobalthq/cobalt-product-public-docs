# Common Security Misconfigurations - For Developers #


Security misconfigurations are failures to implement necessary security controls in any software component. Usually, these are the mistakes done while moving the code from development to the production environment.  OWASP has categorized security misconfiguration as a separate category A05:2021. These misconfigurations could lead to sensitive information disclosures and in some cases can also lead to data or system compromise. 


A very common scenario of security misconfiguration is a verbose error message thrown by the application when it encounters unexpected inputs. These errors may convey a lot about the backend such as the framework or technology in use, the internal path of the application, code snippets, or sometimes even secret keys. The exposed information is valuable for attackers. 

Another example is directory listing enabled in the webserver setting, which allows users to access the full directory structure and access files in the directories. This allows easy access to files and directories to any visitor. This could lead loss of sensitive information.  

These misconfigurations can be taken care of early in the development lifecycle by software security design review and Threat modeling. Attending these misconfigurations and fixing them is simple as compared to other complex vulnerabilities in applications. There are precautions that developers can take before moving the code to production to avoid these mistakes. 

Let us look into these common misconfigurations and understand how developers can prevent these issues.

## Debug Enabled and verbose errors ##

One of the common misconfigurations is developers leaving the debug enabled in the prod environment. The debug allows exposure of more information than expected. Debug info may contain sensitive data such as application internal paths, keys or secrets, or backend code.  

Depending on the framework or development language in use, it is required to configure secure settings and disable debug settings. For example, in .NET applications by configuring Web.config file properly debug can be disabled. 

In .NET applications modify the Web.config file

```
<compilation debug="false"/>
```
Or modify the Machine.config file

````
<compilation debug="false"/>
````

Similarly, applications if not configured with custom errors may leak verbose errors or stack trace which exposes sensitive information. The application should be configured with custom errors and any stack trace should be prevented to be exposed to users. 

A simple example to configure custom errors in .NET application in Web.config file:

````
<system.web>  
<customErrors mode="RemoteOnly" defaultRedirect="Error.aspx">  
<error statusCode="401" redirect="CustomPage.aspx" /> 
<error statusCode="403" redirect="CustomPage.aspx" /> 
<error statusCode="404" redirect="NotFound.aspx" /> 
<error statusCode="500" redirect="Error.aspx" />  
</customErrors>  
</system.web>  

 ````

## Directory listing ##

Directory listing a very common misconfiguration at the webserver exposes all the directories and files to the users.  A simple google search with ` intitle: "index of /"` list many misconfigured websites which have directory listing enabled. This misconfiguration may leak protected files and grant unauthorized access to the application directories and files. 

As an example in the apache Tomcat web server, open the conf/web.xml file in the directory where Tomcat is installed. For example in Windows 10, the default installation directory was “C:\Program Files (x86)\Apache Software Foundation\Tomcat 9.0”

In the file, `<param-name>listings</param-name>` the `<param-value>false</param-value>` should be set as false, as shown in the code below

````
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

````

In the Apache web server, create a .htaccess file in the related application directory and add the following lines to the httpd.conf file or replace the existing lines with the following:

````
<Directory /{YOUR DIRECTORY}>
   Options FollowSymLinks
 </Directory>

````

In general directory listing should be disabled by doing configuration changes in the webserver configuration files.  The configuration will be different for different webservers. 


## Default Accounts ##

Default accounts could be application accounts, webserver logins, cloud instances, or databases. At each level, there could be accounts that are in use by developers in the testing or staging environment but were not omitted when the software moves to production. Sometimes these accounts also come with default installations which need to be removed by settings. 

To prevent this, keep a track of the accounts created for the development environment and follow a strict process to remove those accounts later. Change default passwords that come with installations. Restrict the exposure of admin pages or webserver logins while the application is in prod. Follow a strong password policy for the account and prevent the usage of easily guessable credentials.


## Files/Directories in URL path ##

Sensitive files such as backup files, log files, or DB files may be present in the URL path, and the Dev team may forget to remove these files or directories from the Webroot. While the application is in the development environment, additional directories can be present in the code, which are not required in the production. If these files or directories get committed to the production, attackers could discover this by brute-forcing the URL paths. Depending on the exposed file/directories, sensitive data can be easily recovered by the attacker. 

To prevent this, ensure a check of the URL paths and remove any sensitive file or directory which is strictly for internal usage. Ensure to have a final check before committing the code to the production environment. 
Additionally, URL fuzzing or brute forcing can be prevented by applying a Web Application firewall and rate limiting checks. 



## Misconfigured Cloud Services ##

Cloud infrastructure and services could be misconfigured which could lead to application data compromise. Cloud service may also be overly permissive which allows unauthorized access.For example, a common cloud misconfiguration is s3 bucket with insufficient configuration, which may allow read and write access to any user. There were multiple incidents in the past where a large enterprise data is stolen due to s3 bucket misconfiguration.  

To prevent these issues security automation can be implemented to check for misconfigurations and review the permissions of the cloud service. Installing timely updates and reviewing all security configurations periodically can ensure secure configuration. 



To conclude, each software layer needs a careful security check before migrating to the production environment. Creating and following a security checklist could prevent common misconfigurations.  Scanning the production environment using a security scanner could also help to identify any open misconfiguration. 


## References ##

https://owasp.org/Top10/A05_2021-Security_Misconfiguration/
https://docs.aws.amazon.com/AmazonS3/latest/UG/EditingBucketPermissions.html 
