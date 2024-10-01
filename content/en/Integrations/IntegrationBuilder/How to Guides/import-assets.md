---
title: "Import assets from Google Sheets"
linkTitle: "Import assets from Google Sheets"
weight: 60
---

{{% pageinfo %}}
How to use Integration Builder to import assets from Google Sheets.
{{% /pageinfo %}}

## Import assets from Google Sheets

To import assets from Google Sheets, you need to follow two general steps:

1. Create a spreadsheet in Google Sheets.
2. Create a Google Sheets connection.
3. Select a recipe and customize it.
4. Copy and customize the recipe
5. Start the recipe

The following is a step-by-step guide to walk you through the configuration process.

### 1. Create a spreadsheet in Google Sheets

To import assets from Google Sheets into the Cobalt platform, we first have to create a spreadsheet with the following columns: `Title`, `Type`, `Description`.

Here's an example of what that could look like:
{{% image src="/integrations/integration_builder/how_to_guides/import-assets/google-sheets-spreadsheet-example.png" alt="Example spreadsheet" %}}

Once ready, give the file a name (optionally the specific sheet as well) and save it.

### 2. Create a Google Sheets connection

The following is a quick guide on how to create a Workato connection for Google Sheets.
In case you're looking for a more comprehensive and general guide on how to manage connections, check [here](/integrations/integrationbuilder/connect-your-applications/).

Go to the `Integration Builder` > `Projects`. Select or create a project on the left-side of the page. Then click on the "Create" button on the top-right and choose the "Connection" option.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets/google-sheets-00-create-connection.png" alt="Create a connection for your project" %}}

A "New Connection" page will show up. Look for "Google Sheets" and select the corresponding tile. You can optionally use the search field to quickly find the connection.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets/google-sheets-01-select-connection-type.png" alt="Select connection type" %}}

After selecting the connection type, a form will appear. Provide a name, select a location (we recommend `Cobalt` > `Connections`) and click on "Sign in with Google".

{{% image src="/integrations/integration_builder/how_to_guides/import-assets/google-sheets-02-create-connection-form.png" alt="Create connection form" %}}

Once signed in with Google, you should get a confirmation that the connection got successfully created.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets/google-sheets-03-connection-created.png" alt="Connection Created" %}}

### 3. Select a recipe and customize it

Go to the `Integration Builder` > `Library` and select Outlook.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets/google-sheets-1-find-recipes.png" alt="Google Sheets tile" %}}

Select the "[Cobalt > Google Sheets] Import assets from Google Sheets" recipe.

{{% image src="/integrations/integration_builder/how_to_guides/import-assets/google-sheets-2-select-import-recipe.png" alt="Google Sheets tile" %}}

### 4. Copy and customize the recipe

<!-- Click on "Use this recipe".

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step3.png" alt="Use Outlook recipe" %}}

You will be prompted to copy the recipe. Choose a preferred location and click "Copy and save".

{{% image src="/integrations/integration_builder/findings_outlook_notifications/configure_outlook_notification_step4.png" alt="Copy Outlook recipe" %}} -->

### 5. Start the recipe

<!-- After saving the recipe, select "Start recipe" at the top of the page. This may take a few seconds.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/start_recipe.png" alt="Start recipe" %}}

Once the recipe is running, you will see the jobs tab to monitor any events. This can be left open to verify whether a created finding triggers the desired notification.
The recipe will continue running even when the tab is closed. Click "Stop recipe" if you need to stop running it, or to edit it.

{{% image src="/integrations/integration_builder/findings_outlook_notifications/running_recipe.png" alt="Running recipe" %}}

Check [Create Test Finding](/integrations/development/create-test-finding/) to test the recipe. -->