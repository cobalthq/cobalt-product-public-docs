---
title: "Send MS Teams notifications for Findings"
linkTitle: "Send MS Teams notifications for Findings"
weight: 40
---

## Configure Microsoft Teams Integration for New Findings

To configure Microsoft Teams to post messages for new findings, you need to follow two general steps:

1. Create a Microsoft Teams connection.
2. Create a new Microsoft Teams recipe.

### Create a New Folder for Your Microsoft Teams Recipes

Before starting, it is better to create a new folder for all future Microsoft Teams recipes.

Navigate to the Projects tab of the Integration Builder.

Click the "Create" button on the top right, then click "Folder".

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/01-create-folder.png" alt="Create a new folder" %}}

Give the new folder a name, and choose its location. Then click "Create Folder".

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/02-create-folder-modal.png" alt="Folder details" %}}

Now you can see the new folder in the project.

### Create a Microsoft Teams Connection

Click the "Create" button on the top right, then click "Connection".
  
{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/03-create-connection.png" alt="Create a new connection" %}}

Search for the suitable connection for Microsoft Teams and click on it.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/04-select-microsoft-teams-connection.png" alt="Select Microsoft Teams connection" %}}

Choose the connection name, location, API scope, and click "Sign in with Microsoft".

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/05-connection-details.png" alt="Connection details" %}}

Now you can see the new connection in the project, and it is connected.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/06-connection-connected.png" alt="Connection connected" %}}

### Create a New Microsoft Teams Recipe

Go to the "Library" tab and search for the "Microsoft Teams" recipe.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/07-search-microsoft-teams-recipe.png" alt="Search Microsoft Teams recipe" %}}

There are two recipes to choose from, depending on whether you're interested in posting messages for a pentest finding or a DAST Scanner finding. We'll use the pentest finding recipe as a base and customize it. Click on the recipe to see its details and click "Use this recipe".

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/08-use-recipe.png" alt="Use recipe" %}}

Choose to save the recipe in the folder you created earlier.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/09-recipe-location.png" alt="Save recipe" %}}

### Customize the Recipe

Once copied and saved, an initial customization is needed.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/10-customize-recipe.png" alt="Customize recipe" %}}

You can see in the recipe's graph that there is an error. The highlighted step is the one causing the error.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/11-recipe-error.png" alt="Recipe error" %}}

The existing error is due to a missing field for the Microsoft Teams settings.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/12-click-step-with-error.png" alt="Recipe step error" %}}

Choose the correct Microsoft Teams channel to which you want to post messages, and compose the message with the data you find important to you, then save and exit the recipe.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/13-message-settings.png" alt="Select channel and save and exit" %}}

Now there are no more errors. You can start the recipe. This may take a few seconds to run.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/14-start-recipe.png" alt="Start recipe" %}}

Once the recipe is running, you will see the jobs tab to monitor any events. This can be left open to verify whether a created finding triggers the desired action. The recipe will continue running even when the tab is closed. Click "Stop recipe" if you need to stop running it. To edit the recipe, you must stop running it first.

{{% image src="/integrations/integration_builder/how_to_guides/microsoft-teams/15-recipe-running.png" alt="Recipe running" %}}

You can [create a test Finding](/integrations/development/create-test-finding/) to test the recipe.
