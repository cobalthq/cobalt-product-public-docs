---
title: "Create Azure DevOps Work Item for Findings"
linkTitle: "Create Azure DevOps Work Item for Findings"
weight: 40
---

## Configure Azure DevOps Integration for New Findings

To set up Azure DevOps to create Work Items for new findings, follow these two main steps:

1. Create an Azure DevOps connection.
2. Create a new Azure DevOps recipe.

### Create a New Folder for Your Azure DevOps Recipes

Before you begin, it's a good idea to create a new folder for all your future Azure DevOps recipes.

Navigate to the Projects tab in the Integration Builder.

Click the "Create" button at the top right, then select "Folder".

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/01-create-folder.png" alt="Create a new folder" %}}

Name the new folder and choose its location. Then click "Create Folder".

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/02-create-folder-modal.png" alt="Folder details" %}}

You should now see the new folder in the project.

### Create an Azure DevOps Connection

Click the "Create" button at the top right, then select "Connection".

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/03-create-connection.png" alt="Create a new connection" %}}

Search for the Azure DevOps connection and click on it.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/04-select-azure-devops-connection.png" alt="Select Azure DevOps connection" %}}

Fill in the connection details: name, recipe location, and select **Personal Access Token** as the OAuth 2.0 grant type. Set the API version to **7.0** and specify the Azure DevOps organization name, the email address of the user to impersonate, and the personal access token.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/05-connection-details.png" alt="Connection details" %}}

> **ⓘ** Refer to the Azure DevOps [documentation](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat) to create a personal access token.

> **ⓘ** Use `Read, write, & manage` scopes for this example. Learn more about OAuth [scopes](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#scopes) for Azure DevOps.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/06-azure-devops-pat-scopes.png" alt="Azure DevOps PAT scopes" %}}

You should now see the new connection in the project, and it is connected.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/07-connection-connected.png" alt="Connection connected" %}}

### Create a New Azure DevOps Recipe

Go to the "Library" tab and search for the "create work item" recipe.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/08-search-create-work-item.png" alt="Search create work item" %}}

Choose the recipe based on whether you want to create Work Items for a pentest finding or a DAST Scanner finding. We'll use the pentest finding recipe as a base and customize it. Click on the recipe to see its details and click "Use this recipe".

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/09-use-recipe.png" alt="Use recipe" %}}

Save the recipe in the folder you created earlier.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/10-recipe-location.png" alt="Recipe location" %}}

### Customize the Recipe

Once copied and saved, initial customization is needed.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/11-customize-recipe.png" alt="Customize recipe" %}}

You will see errors in the recipe's graph. The highlighted steps are causing the errors.

> **ⓘ** Click on the number to jump directly to the step with the error, e.g., step `17` and `36`.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/12-create-work-item-error.png" alt="Create work item error" %}}

Choose the correct Azure DevOps **project** and set the **Work item type**. Specify all required fields marked with an asterisk (`*`). For the **Bug** Work Item type, the **title**, **state**, and **value area** are mandatory.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/13-create-work-item-fix.png" alt="Create work item fix" %}}

> **ⓘ** Customize the optional **description** field to create a Work Item with a meaningful description extracted from the pentest finding data. For example, include the **URL** to open the pentest finding in the Cobalt application, or add the **description** or **severity** of the pentest finding.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/14-work-item-description.png" alt="Work item description" %}}

The recipe will automatically upload any attachments of the pentest finding to the Work Item. Go to the upload attachments to work item action, and set the required Azure DevOps **project** field.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/15-upload-attachment-error.png" alt="Upload attachment error" %}}

Use the same project as for the Work Item creation to fix the error.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/16-upload-attachment-fix.png" alt="Upload attachment fix" %}}

> **ⓘ** Optionally, set a filter on the recipe trigger. This example uses a pentest filter, so the recipe will run only when there is a new finding for the configured pentest.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/17-trigger-filters-by-pentest.png" alt="Trigger filters by pentest" %}}

Now there are no more errors. You can start the recipe. This may take a few seconds to run.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/18-start-recipe.png" alt="Start recipe" %}}

Once the recipe is running, you will see the jobs tab to monitor any events. This can be left open to verify whether a created finding triggers the desired action. The recipe will continue running even when the tab is closed. Click "Stop recipe" if you need to stop it. To edit the recipe, you must stop it first.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/19-recipe-running.png" alt="Recipe running" %}}

You can [create a test Finding](/integrations/development/create-test-finding/) to test the recipe.

The Azure DevOps Work Item can be opened from the pentest finding.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/20-pentest-finding-with-work-item.png" alt="Pentest finding with Azure DevOps Work Item" %}}

The Work Item in the configured Azure DevOps project.

{{% image src="/integrations/integration_builder/how_to_guides/azure-devops/21-work-item.png" alt="Azure DevOps Work Item" %}}
