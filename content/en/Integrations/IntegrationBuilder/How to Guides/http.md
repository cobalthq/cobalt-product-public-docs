---
title: "HTTP Connector"
linkTitle: "HTTP Connector"
weight: 10
description: "Guide to integrate HTTP services with our platform."
---

{{% pageinfo %}}
The HTTP connector allows you to connect with any cloud application or service that has a HTTP-based application programming interface (API).

💡 The HTTP connector can be particularly useful for organizations looking to integrate with services without officially supported connectors.
{{% /pageinfo %}}

In this example, we will create an **Integration Builder** recipe that activates when the state of a pentest finding changes to "fixed". This recipe will interact with a service by mapping Cobalt-specific data to the format required by the API. Throughout this example, you will learn the following:

- [What an HTTP connector is](#http-connector).
- How to create an HTTP connection.
- How to configure the authentication type.
- How to set the base URL.
- How to use an HTTP action.
- How to configure the request body.
- How to set the request headers.
- How to map Cobalt data to the API's format.
- How to read the HTTP requests and responses from the job logs.

### HTTP connector

The generic HTTP connector lets you work with cloud applications using their APIs. This helps you create triggers and actions on the Workato platform for your integration recipes.

If you want to create or update an entry in your system, you can send a POST request with a JSON body. If you need to get some data from your application, you can use a GET request with your query parameters.

#### Crete a new folder for your HTTP connection and recipes

Before you begin, it's a good idea to create a new folder for all your future generic HTTP recipes.

Navigate to the Projects tab in the Integration Builder.

Click the "Create" button at the top right, then select "Folder".

{{% image src="/integrations/integration_builder/how_to_guides/http/01-create-http-folder.png" alt="Create a new folder" %}}

Name the new folder and choose its location. Then click "Create folder".

{{% image src="/integrations/integration_builder/how_to_guides/http/02-create-http-folder-modal.png" alt="Folder details" %}}

You should now see the new folder in the project.

### Create an HTTP connection

#### Configure the authentication type

##### Basic

##### Header authorization (Bearer token)

### Base URL

#### Security

#### Maintainability

### Create a recipe

#### Use an HTTP action

#### Configure the request body

#### Configure the request headers

#### Map Cobalt data

#### Recipe in-action

#### Read the HTTP requests and responses

----

```json
{
  "cobalt_finding_id": "vl_id01",
  "cobalt_pentest_id": "pt_id01",
  "title": "XSS vulnerability",
  "severity": "low",
  "type_category": "Cross-Site Scripting (XSS)"
}
```

```json
{
  "method": "POST",
  "protocol": "https",
  "host": "echo.free.beeceptor.com",
  "path": "/api/v2/finding/fixed",
  "ip": "89.247.164.80:11090",
  "headers": {
    "Host": "echo.free.beeceptor.com",
    "User-Agent": "curl/8.7.1",
    "Content-Length": "151",
    "Accept": "*/*",
    "Authorization": "Bearer my_api_token",
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip"
  },
  "parsedQueryParams": {},
  "parsedBody": {
    "cobalt_finding_id": "vl_id01",
    "cobalt_pentest_id": "pt_id01",
    "title": "XSS vulnerability",
    "severity": "low",
    "type_category": "Cross-Site Scripting (XSS)"
  }
}
```

----

```sh
curl --location "https://echo.free.beeceptor.com/api/v2/finding/fixed" \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer my_api_token" \
--data '{"cobalt_finding_id":"vl_id01","cobalt_pentest_id":"pt_id01","title":"XSS vulnerability","severity":"low","type_category":"Cross-Site Scripting (XSS)"}'
```

----

{{% image src="/integrations/integration_builder/how_to_guides/http/03-create-connection-folder.png" alt="Create connection folder" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/04-create-connection-folder-modal.png" alt="Connection folder details" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/05-create-connection.png" alt="Create connection" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/06-search-http-connector.png" alt="Search HTTP connector" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/07-http-connection-details.png" alt="HTTP connection details" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/08-http-connection-auth-basic.png" alt="HTTP connection basic auth" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/09-http-connection-auth-header.png" alt="HTTP connection header auth" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/10-http-connection-auth-header-show.png" alt="HTTP connection header auth show" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/11-http-connection-base-url.png" alt="HTTP connection base URL" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/12-http-connection-connected.png" alt="HTTP connection connected" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/13-create-recipe.png" alt="Create recipe" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/14-create-recipe-details.png" alt="Recipe details" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/15-trigger-recipe-select-app.png" alt="Select app for trigger" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/16-trigger-recipe-select-trigger.png" alt="Select trigger" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/17-trigger-recipe-select-connection.png" alt="Select connection for trigger" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/18-filter-trigger-by-pentest.png" alt="Filter trigger by pentest" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/19-filter-trigger-by-pentest-modal.png" alt="Filter trigger by pentest modal" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/20-filter-trigger-by-pentest-select-from-list.png" alt="Select from list" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/21-use-get-pentest-finding-action.png" alt="Use get pentest finding action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/22-get-pentest-finding-by-id.png" alt="Get pentest finding by ID" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/23-filter-pentest-finding-by-state.png" alt="Filter pentest finding by state" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/24-use-http-action.png" alt="Use HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/25-use-http-action-select-connection.png" alt="Select connection for HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/26-use-http-action-setup.png" alt="Setup HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/27-use-http-action-config-url.png" alt="Configure URL for HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/28-use-http-action-config-body.png" alt="Configure body for HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/29-use-http-action-config-header.png" alt="Configure header for HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/30-use-http-action-config-response.png" alt="Configure response for HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/31-use-http-action-config-review.png" alt="Review HTTP action configuration" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/32-use-http-action-set-body.png" alt="Set body for HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/33-use-http-action-set-body-map-cobalt-data.png" alt="Map Cobalt data to body" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/34-use-http-action-set-header.png" alt="Set header for HTTP action" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/35-save-recipe.png" alt="Save recipe" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/36-start-recipe.png" alt="Start recipe" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/37-recipe-did-start.png" alt="Recipe did start" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/38-finding-pending-fix.png" alt="Finding pending fix" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/39-recipe-run-pending-fix.png" alt="Recipe run pending fix" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/40-recipe-run-log-pending-fix.png" alt="Recipe run log pending fix" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/41-finding-valid-fix.png" alt="Finding valid fix" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/42-recipe-run-valid-fix.png" alt="Recipe run valid fix" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/43-recipe-run-log-valid-fix-input.png" alt="Recipe run log valid fix input" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/44-recipe-run-log-valid-fix-output.png" alt="Recipe run log valid fix output" %}}
