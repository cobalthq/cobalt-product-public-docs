---
title: "Import assets from Google Sheets"
linkTitle: "Import assets from Google Sheets"
weight: 60
---

{{% pageinfo %}}
How to use Integration Builder to import assets from Google Sheets.
{{% /pageinfo %}}

## Import assets from Google Sheets

To import assets from Google Sheets, you need to follow five general steps:

1. Create a spreadsheet in Google Sheets.
2. Create a Google Sheets connection.
3. Find and select the recipe.
4. Copy and customize the recipe.
5. Start the recipe.

The following is a step-by-step guide to walk you through the configuration process.

### 1. Create a spreadsheet in Google Sheets

To import assets from Google Sheets into the Cobalt platform, we first have to create a spreadsheet with the following columns: `Title`, `Type`, `Description`.
`Title` and `Description` can be anything, but `Type` needs to be one of: 
- `unknown`
- `web`
- `mobile`
- `external_network`
- `api`
- `cloud_config`
- `desktop_obsolete`
- `internal_network`
- `web_plus_api`
- `web_plus_external_network`
- `web_plus_mobile`
- `wireless_network`
- `iot`
- `desktop`
- `physical`
- `other`
- `web_plus_api_plus_external_network`
- `internal_network_plus_external_network`
- `mobile_plus_api`
- `web_plus_mobile_plus_api`

Here's an example of what that could look like:
{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/spreadsheet-example.png" alt="Example spreadsheet" %}}

Once ready, give the file a name (optionally, the specific sheet as well) and save it.

### 2. Create a Google Sheets connection

The following is a quick guide on how to create a Workato connection for Google Sheets.
In case you're looking for a more comprehensive and general guide on how to manage connections, check [here](/integrations/integrationbuilder/connect-your-applications/).

Go to the `Integration Builder` > `Projects`. Select or create a project on the left-side of the page. Then click on the "Create" button on the top-right and choose the "Connection" option.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/00-create-connection.png" alt="Create a connection for your project" %}}

A "New Connection" page will show up. Look for "Google Sheets" and select the corresponding tile. You can optionally use the search field to quickly find the connection.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/01-select-connection-type.png" alt="Select connection type" %}}

After selecting the connection type, a form will appear. Provide a name, select a location (we recommend `Cobalt` > `Connections`) and click on "Sign in with Google".

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/02-create-connection-form.png" alt="Create connection form" %}}

Once signed in with Google, you should get a confirmation that the connection was successfully created.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/03-connection-created.png" alt="Connection Created" %}}

### 3. Find and select the recipe

Go to the `Integration Builder` > `Library` and search for Google Sheets.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/1-find-recipes.png" alt="Google Sheets tile" %}}

Select the "[Cobalt > Google Sheets] Import assets from Google Sheets" recipe.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/2-select-import-recipe.png" alt="Google Sheets tile" %}}

### 4. Copy and customize the recipe

Click on "Use this recipe".

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/3-click-use-recipe.png" alt="Use Recipe" %}}

You will be prompted to copy the recipe. Choose a preferred location and click "Copy and save".

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/4-select-project.png" alt="Copy Google Sheets recipe" %}}

There will be a prompt with a "Test recipe" button. Instead of testing, you will want to edit the recipe in order to set the Google Sheets connection. Click on "or edit your recipe before testing" below the button.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/5-edit-recipe.png" alt="Edit recipe" %}}

Select the first action from the flow chart (the one that gets the rows from Google Sheets). In the emerging sidebar on the right, select "Connection" at the top and then choose the connection created in [step 2 of this guide](#2-create-a-google-sheets-connection).

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/6-edit-connection-on-recipe.png" alt="Choose connection" %}}

You will get a setup form in which you have to select the Google Drive where the spreadsheet created in [step 1](#1-create-a-spreadsheet-in-google-sheets) is stored. After that you can select the specific Spreadsheet and the Sheet (in case you renamed it). 

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/7-configure-sheet-in-recipe.png" alt="Setup connection" %}}

At this point, the configuration is ready. In the top-right corner, click on "Save" followed by "Exit".

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/8-save-and-exit.png" alt="Save and Exit" %}}

### 5. Start the recipe

This recipe is a function call, which means it can be integrated and called within another recipe. However, since we want to trigger it directly, we have to use a test environment.
Click on the caret on the right of the "Start recipe" button, then on the "Test recipe" button. 

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/9-test-recipe.png" alt="Test recipe" %}}

Within the prompt, click "Test recipe" in the bottom right.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/10-trigger-recipe.png" alt="Trigger the recipe" %}}

You will see the "Jobs" tab confirming the successful execution of the test.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/11-finished-run.png" alt="Jobs tab" %}}

Finally, you can head over to the Cobalt platform and check the Assets page of your org. It should show the newly created assets.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets-from-google-sheets/asset-list.png" alt="Check result" %}}