---
title: "HTTP Connector"
linkTitle: "HTTP Connector"
weight: 60
description: "Guide to integrate HTTP services with Cobalt"
---

{{% pageinfo %}}
The HTTP connector allows you to connect with any cloud application or service that has a HTTP-based application programming interface (API).

💡 The HTTP connector can be particularly useful for organizations looking to integrate with services without officially supported connectors.
{{% /pageinfo %}}

In this example, we will create an **Integration Builder** recipe that activates when the state of a pentest finding changes to "fixed". This recipe will interact with a service by mapping Cobalt-specific data to the format required by the API. Throughout this example, you will learn the following:

- [What an HTTP connector is](#http-connector).
- [How to create an HTTP connection](#create-an-http-connection).
- [How to configure the authentication type](#configure-the-authentication-type).
- [How to set the base URL](#base-url).
- [How to use the HTTP action](#use-the-http-action).
- [How to configure the HTTP method and the request URL](#configure-the-http-method-and-the-request-url).
- [How to configure and send a sample request](#configure-and-send-a-sample-request).
- [How to map Cobalt data to the API's format](#map-cobalt-data).
- [How to read the HTTP requests and responses from the job logs](#read-the-http-requests-and-responses).

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

Create a dedicated folder folder for the connection by repeating the above steps.

{{% image src="/integrations/integration_builder/how_to_guides/http/03-create-connection-folder.png" alt="Create connection folder" %}}

{{% image src="/integrations/integration_builder/how_to_guides/http/04-create-connection-folder-modal.png" alt="Connection folder details" %}}

You should see now the new folder for the connection.

### Create an HTTP connection

Click the "Create" button at the top right, then select "Connection".

{{% image src="/integrations/integration_builder/how_to_guides/http/05-create-connection.png" alt="Create a new connection" %}}

Search for the HTTP connection and click on it.

{{% image src="/integrations/integration_builder/how_to_guides/http/06-search-http-connection.png" alt="Search HTTP connection" %}}

Fill in the connection name and the recipe location.

{{% image src="/integrations/integration_builder/how_to_guides/http/07-http-connection-details.png" alt="HTTP connection details" %}}

#### Configure the authentication type

The HTTP connection supports several authentication types. This section outlines a few of them and the required configuration steps. It includes:

- [Basic](#basic)
- [Header authorization (Bearer token)](#header-authorization-bearer-token)

Select the appropriate authentication type from the dropdown menu.

##### Basic

The **Basic** authentication type requires the username and password. It can be an API token as an alternative to using the username and password. This information is encoded in Base64 during transit using SSL.

{{% image src="/integrations/integration_builder/how_to_guides/http/08-http-connection-auth-basic.png" alt="HTTP connection basic auth" %}}

##### Header authorization (Bearer token)

Use this authentication method if you have a generated token for authorization. For example, if you possess a bearer token, set the header key to `Authorization` and the value to `Bearer my_api_token`. This header with the token will be included in each HTTP request.

{{% image src="/integrations/integration_builder/how_to_guides/http/09-http-connection-auth-header.png" alt="HTTP connection header auth" %}}

> **ⓘ** Ensure you write `Bearer my_api_token` in the header value field, not just `my_api_token`.

{{% image src="/integrations/integration_builder/how_to_guides/http/10-http-connection-auth-header-show.png" alt="HTTP connection header auth show" %}}

### Base URL

To limit outbound requests to a designated URL, you can set a base URL for your HTTP connection. This ensures that all users of the connection can only access the specified server or application.

There are several benefits to setting a base URL:

1. **Ensuring Security Over the HTTP Connector**  
   Data governance is essential, particularly when data is shared between multiple applications. By establishing a base URL, you ensure that your sensitive information will only travel through a specified endpoint, domain, or host.

2. **Use the Correct API Version**  
   Verify that all requests target the appropriate API version of the intended application. Once the base URL is defined, all requests are directed to the same endpoint, including the API version.

3. **Maintainability**  
   Setting the base URL makes it easier to adapt as API versions evolve. By defining a base URL, you can swiftly modify request URLs without the necessity to individually update each action. For instance, you can set the base URL to a particular version of your REST API. When it is time to change the API version, you need only to adjust the base URL of the HTTP connection.

#### How It Works

When an HTTP action runs, the Base URL along with the action's Request URL is combined to create the final request URL. Consider it this way: **Base URL** + **Action Request URL** = **Final request URL**.

For example:

- Base URL: `https://echo.free.beeceptor.com/api/v2/`
- Action Request URL: `/thing/data`
- Final request URL: `https://echo.free.beeceptor.com/api/v2/thing/data`

Set your API endpoint as the base URL.

{{% image src="/integrations/integration_builder/how_to_guides/http/11-http-connection-base-url.png" alt="HTTP connection base URL" %}}

> **ⓘ** This example utilizes a free HTTP echo server that provides a JSON response mirroring the content of the data sent in an HTTP request. More details about the example server can be found at https://beeceptor.com/resources/http-echo/.

When you have finished the HTTP connection configuration, click on **Connect**.

{{% image src="/integrations/integration_builder/how_to_guides/http/12-http-connection-connected.png" alt="HTTP connection connected" %}}

> **ⓘ** The credentials and the accuracy of the authentication type configuration are not verified when you click **Connect**. The **Connected** status simply means that all required fields for the HTTP connection have been filled out. Subsequent steps will demonstrate how the credentials will be tested.

### Create a recipe

#### Use case

To illustrate, we want to create a recipe that updates a system via an HTTP API once a pentest finding has been fixed. For instance, if a Cross-Site Scripting (XSS) vulnerability has been addressed, we want to store relevant details such as the finding category, its severity, the finding's ID, and the ID of the pentest itself. We will achieve this by sending an HTTP POST request with the necessary information included in the request body.

Assuming the request body that the HTTP service requires is as follows:

```json
{
  "cobalt_finding_id": "vl_id01",
  "cobalt_pentest_id": "pt_id01",
  "title": "XSS vulnerability",
  "severity": "low",
  "type_category": "Cross-Site Scripting (XSS)"
}
```

You can update this information using the following HTTP request with `curl`:

```sh
curl --location "https://echo.free.beeceptor.com/api/v2/finding/fixed" \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer YOUR-PERSONAL-API-TOKEN" \
--data '{"cobalt_finding_id":"vl_id01","cobalt_pentest_id":"pt_id01","title":"XSS vulnerability","severity":"low","type_category":"Cross-Site Scripting (XSS)"}'
```

> **ⓘ** Replace `https://echo.free.beeceptor.com/api/v2/finding/fixed` with the appropriate URL and `YOUR-PERSONAL-API-TOKEN` with your actual API token.

Let's create a recipe that utilizes our HTTP connection to make the same update. Start by navigating to the Projects tab, selecting the previously created folder, clicking on the "Create" button in the top right corner, and then choosing "Recipe."

{{% image src="/integrations/integration_builder/how_to_guides/http/13-create-recipe.png" alt="Create recipe" %}}

Next, specify the recipe's name and location. Make sure to select **Trigger from an app** as the starting point, and then click on **Start building**.

{{% image src="/integrations/integration_builder/how_to_guides/http/14-create-recipe-details.png" alt="Recipe details" %}}

#### Use a Trigger

Select the trigger that will initiate the recipe. We want the recipe to activate when the status of a pentest finding is updated in the Cobalt Platform. Search for the Cobalt Connector and select it.

{{% image src="/integrations/integration_builder/how_to_guides/http/15-trigger-recipe-select-app.png" alt="Select app for trigger" %}}

Search for the 'Pentest finding status updated' trigger and select it.

{{% image src="/integrations/integration_builder/how_to_guides/http/16-trigger-recipe-select-trigger.png" alt="Select trigger" %}}

Choose the configured Cobalt connection for the trigger.

{{% image src="/integrations/integration_builder/how_to_guides/http/17-trigger-recipe-select-connection.png" alt="Select connection for trigger" %}}

By default, this trigger runs when any pentest finding status is updated to "Fixed." To ensure the recipe runs only when the status of the associated pentest we have configured is updated, we need to filter the events. Click on "2 optional fields are available."

> **ⓘ** The number of optional fields may vary depending on the type and version of the selected recipe trigger.

{{% image src="/integrations/integration_builder/how_to_guides/http/18-filter-trigger-by-pentest.png" alt="Filter trigger by pentest" %}}

Select the "Pentest" checkbox and then click on "Apply changes" in the modal.

{{% image src="/integrations/integration_builder/how_to_guides/http/19-filter-trigger-by-pentest-modal.png" alt="Filter trigger by pentest modal" %}}

A new "Pentest" dropdown will appear in the UI; select the appropriate pentest from this list.

> **ⓘ** Filtering by pentest or asset is optional, so this step is provided for educational purposes only.

{{% image src="/integrations/integration_builder/how_to_guides/http/20-filter-trigger-by-pentest-select-from-list.png" alt="Select from list" %}}

#### Get pentest finding

In this hypothetical use case, the recipe must update only the findings that are in the 'Fixed' state, while ignoring all other finding statuses. To accomplish this, the recipe will use an action to retrieve the pentest finding by its unique ID and will include an "IF condition" to filter out irrelevant status updates.

To add an action, click the plus sign (+), select "Action in app" from the popup menu, choose the Cobalt Connector, and search for the "Get pentest finding" action on the right-hand side.

{{% image src="/integrations/integration_builder/how_to_guides/http/21-use-get-pentest-finding-action.png" alt="Use get pentest finding action" %}}

Click on the "Finding ID" field and drag the "Finding ID" datapill from the "Pentest finding state updated" trigger event into it.

{{% image src="/integrations/integration_builder/how_to_guides/http/22-get-pentest-finding-by-id.png" alt="Get pentest finding by ID" %}}

#### Filter with **IF condition**

To add an "IF condition", click the plus sign (+) and select the "IF condition" from the popup. Using the drag and drop technique, set the "Data field" of the "IF branch" to the "state" of the pentest finding, select the "equals" from the "Condition" dropdown, and set the expected value to be `valid_fix`.

{{% image src="/integrations/integration_builder/how_to_guides/http/23-filter-pentest-finding-by-state.png" alt="Filter pentest finding by state" %}}

> **ⓘ** When filtering pentest findings by status, please use the technical API value instead of the UI name. The correct value is `valid_fix`, not `Fixed`. For detailed information on pentest finding statuses and the mappings between API values and UI names, please refer to the API documentation at https://cobalt-public-api.netlify.app/v2/#states.

> **ⓘ** Additionally, you can utilize the "Previous Finding State" and "Current Finding State" trigger filters to achieve the same outcome. When using an If branch within the recipe to filter pentest finding statuses, the recipe can execute independently of the current and previous statuses of the pentest. In contrast, if filters are applied to the trigger, the recipe will only activate when the filter conditions are satisfied, making the If branch filtering unnecessary.

#### Use the HTTP action

To add an HTTP action, click the plus sign (+) for the "Yes" branch of the "IF condition", select "Action in app" from the popup menu, choose HTTP.

{{% image src="/integrations/integration_builder/how_to_guides/http/24-use-http-action.png" alt="Use HTTP action" %}}

Select the previously configured HTTP connection from the list.

{{% image src="/integrations/integration_builder/how_to_guides/http/25-use-http-action-select-connection.png" alt="Select connection for HTTP action" %}}

Give a descriptive "Request name" for the HTTP action and then click on "Start guided setup." A three-step HTTP wizard will guide you through making a test request to the API endpoint. This wizard aims to suggest an optimal HTTP configuration for your endpoint whenever feasible. You can leave this setup wizard at any time if you prefer to configure the action manually.

{{% image src="/integrations/integration_builder/how_to_guides/http/26-use-http-action-setup.png" alt="Setup HTTP action" %}}

##### Configure the HTTP method and the request URL

To begin, please provide the relative API endpoint path you wish to call, along with the HTTP method associated with that endpoint. This information should be available in the app's API documentation.

> **ⓘ** Note that we have configured the HTTP connector with a base URL, so this example will use the relative path. If you have chosen not to use a base URL for the HTTP connection, you will need to specify the absolute API endpoint.

In this example, we want to update our hypothetical system with the finding ID, type category, severity, and pentest IDs using a POST "method call". The endpoint is located at `https://echo.free.beeceptor.com/api/v2/finding/fixed`, but because we have previously configured the base URL as `https://echo.free.beeceptor.com/api/v2`, we will use the relative path as the "Request URL", which is `/finding/fixed`. Proceed to the next wizard page with the "Next" button.

{{% image src="/integrations/integration_builder/how_to_guides/http/27-use-http-action-config-url.png" alt="Configure URL for HTTP action" %}}

##### Configure and send a sample request

This example is designed to work with a JSON "Request content type." You may want to modify this based on your preferences.

To proceed, copy the example HTTP body for the POST request into the "Request body" text area.

{{% image src="/integrations/integration_builder/how_to_guides/http/28-use-http-action-config-body.png" alt="Configure body for HTTP action" %}}

If you want to add additional headers to the HTTP request, you can configure them here. If the "Request headers" section is collapsed, click on "Show." For demonstration purposes, we will set the "my-custom-header" for each HTTP request.

{{% image src="/integrations/integration_builder/how_to_guides/http/29-use-http-action-config-header.png" alt="Configure header for HTTP action" %}}

> **ⓘ** When specifying the request body with a sample JSON and any optional request headers, please note that all values are static. After you complete the wizard, we will customize both the request body and the headers, mapping the Cobalt data to your API format to include dynamic values for each HTTP request.

> **ⓘ** If you are using header authorization (for example, a Bearer token) and have already configured the authentication type for your HTTP connection, you do not need to add the authentication headers here. The HTTP connection will automatically handle setting the auth headers for each HTTP request.

You can also adjust the "Response content type" and the "Encoding" of the response as needed. You may have to click on "Show" if the section is collapsed. This example uses the default JSON response content type and UTF-8 encoding.

{{% image src="/integrations/integration_builder/how_to_guides/http/30-use-http-action-config-response.png" alt="Configure response for HTTP action" %}}

##### Review the HTTP configuration

> **❗** Exercise extra caution when working with production systems and using independent HTTP methods. You may want to cancel the wizard at this point and proceed with the configuration manually.

When you click the "Send request" button, the HTTP action will send a request to the API with the specified body and any optional headers. Your authentication type and credentials will be used and verified when sending a sample request. Sending a sample request might made an undesired update in your system.

You can review the HTTP request made by the action, and also investigate the response body.

{{% image src="/integrations/integration_builder/how_to_guides/http/31-use-http-action-config-review.png" alt="Review HTTP action configuration" %}}

> **ⓘ** Please note that this example service is a basic echo server, which will return all details about the request body and headers.

#### Map Cobalt data

When you click into the "Request body" field, a datapill popup will appear. This allows you to create a dynamic request body, mapping Cobalt data to your API format.

{{% image src="/integrations/integration_builder/how_to_guides/http/32-use-http-action-set-body.png" alt="Set body for HTTP action" %}}

You can drag and drop Cobalt-specific datapills into the request body.

{{% image src="/integrations/integration_builder/how_to_guides/http/33-use-http-action-set-body-map-cobalt-data.png" alt="Map Cobalt data to body" %}}

> **ⓘ** If you have chosen not to use the guided setup or have canceled the wizard, you can manually use a mixture of text and data pills to build the request body.

Customize the request headers if you wish.

{{% image src="/integrations/integration_builder/how_to_guides/http/34-use-http-action-set-header.png" alt="Set header for HTTP action" %}}

After finishing the HTTP action setup, "Save" the recipe and click on "Exit".

{{% image src="/integrations/integration_builder/how_to_guides/http/35-save-recipe.png" alt="Save recipe" %}}

#### Recipe in-action

To view the recipe in action, you need to start it first. This may take a few seconds to initiate.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/18-start-recipe.png" alt="Start recipe" %}}

Once the recipe is running, you can monitor events by checking the Jobs tab. This tab can remain open to verify if a created finding triggers the desired action. The recipe will continue to run even if you close the tab. If you need to stop the recipe, simply click "Stop recipe." To make any edits to the recipe, you must stop it first.

{{% image src="/integrations/integration_builder/how_to_guides/http/37-recipe-did-start.png" alt="Recipe did start" %}}

> **ⓘ** To test the recipe with pentest findings, follow the guide for
> [creating a test finding](/integrations/development/create-test-finding/).

#### Read the HTTP requests and responses

When a pentest finding is submitted by a tester, it will have the status "Pending Fix."

{{% image src="/integrations/integration_builder/how_to_guides/http/38-finding-pending-fix.png" alt="Finding pending fix" %}}

Let's verify that our recipe has run. Go to the recipe you created, and select the "Jobs" tab if it's not already selected. Then, choose the most recent job.

{{% image src="/integrations/integration_builder/how_to_guides/http/39-recipe-run-pending-fix.png" alt="Recipe run pending fix" %}}

When you select the trigger, the actions, or the IF condition, you can see additional debug information. For example, the recipe has run, it looked up the pentest finding, but the pentest finding status was `need_fix` (which corresponds to "Pending Fix" in the UI). Therefore, the condition evaluated to false, and the HTTP action did not run. This is the expected behavior.

{{% image src="/integrations/integration_builder/how_to_guides/http/40-recipe-run-log-pending-fix.png" alt="Recipe run log pending fix" %}}

After the pentest finding status changes to "Fixed" in Cobalt, another job runs for the activated recipe.

{{% image src="/integrations/integration_builder/how_to_guides/http/41-finding-valid-fix.png" alt="Finding valid fix" %}}

Let's investigate the most recent job result from the "Jobs" tab of the recipe.

{{% image src="/integrations/integration_builder/how_to_guides/http/42-recipe-run-valid-fix.png" alt="Recipe run valid fix" %}}

Select the "Cobalt finding fixed via HTTP" action and check the "Input" tab. Verify that the request body is as expected. Ensure that any custom headers you have configured are present in the output request. However, note that the authentication header **is not** visible in the action. Setting the auth header is the responsibility of the connector.

{{% image src="/integrations/integration_builder/how_to_guides/http/43-recipe-run-log-valid-fix-input.png" alt="Recipe run log valid fix input" %}}

Click on the "Output" tab to view the HTTP response from the service in response to our POST request. Since this example utilizes an echo server, we should observe the authentication headers set by the HTTP connector in the response body. These headers are indeed present.

{{% image src="/integrations/integration_builder/how_to_guides/http/44-recipe-run-log-valid-fix-output.png" alt="Recipe run log valid fix output" %}}
