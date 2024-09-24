---
title: "Configure GitLab Integration"
linkTitle: "Configure GitLab Integration"
weight: 40
---

## Configure GitLab Integration for New Findings

To configure GitLab to create issues for new findings, you need three general steps:

1. Create a Cobalt connection.
2. Obtain a GitLab project access token.
3. Create a GitLab connection on the Cobalt platform.
4. Create a new recipe on the Cobalt platform.

### 1. Create a Cobalt Connection.

Find out how to create a Cobalt Connector [here](/integrations/integrationbuilder/#connection).

### 2. Obtain a GitLab Project Access Token

To obtain a GitLab project access token, go to your GitLab project settings, create a new project access token, and copy it to use later.

Follow [GitLab Docs](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) to learn more about creating a project access token.

### 3. Create a GitLab Connection on the Cobalt Platform

From now on, we are working on the Cobalt platform side.

Go to your integration builder page, and select your project.

{{% image src="/integrations/integration_builder/gitlab/01-select-project.png" alt="Select project" %}}

Click on the "Create" button on the top right, and choose "Connection".

{{% image src="/integrations/integration_builder/gitlab/02-create-connection.png" alt="Create a new connection" %}}

You will be redirected to a page with all the possible connections.

{{% image src="/integrations/integration_builder/gitlab/03-all-connections.png" alt="All possible connections" %}}

Find the GitLab connection and click on it.

{{% image src="/integrations/integration_builder/gitlab/04-find-gitlab-connection.png" alt="Find GitLab connection" %}}

You will need to fill in some information about the connection. The most important part is the access token you obtained in the first step.

{{% image src="/integrations/integration_builder/gitlab/05-gitlab-connection-data.png" alt="Create GitLab connection" %}}

Alternatively, you can use password-based authentication. In this case, you need to provide your GitLab username and password.

{{% image src="/integrations/integration_builder/gitlab/06-gitlab-connection-auth-type.png" alt="GitLab auth types" %}}

Once done, click "Connect".

{{% image src="/integrations/integration_builder/gitlab/08-connection-connected.png" alt="GitLab connection successful" %}}

### 4. Create a New Folder to Better Organize Your Recipes

Before creating a new recipe, it is better to create a new folder for all future GitLab recipes.

Go to the project page again, and click on the "Create" button on the top right. This time, choose "Folder".

{{% image src="/integrations/integration_builder/gitlab/09-new-folder.png" alt="Create a new folder" %}}

Give the new folder a name, and choose its location. Then click "Create Folder".

{{% image src="/integrations/integration_builder/gitlab/10-new-folder-data.png" alt="New folder data" %}}

Now you can see the new folder in the project.

{{% image src="/integrations/integration_builder/gitlab/11-folder-created.png" alt="New folder created" %}}

Now we have the option in the folder to create a new recipe. But it is better to reuse an existing recipe.

### 5. Find an Existing Recipe

Go to the "Library" tab and search for the GitLab recipe.

{{% image src="/integrations/integration_builder/gitlab/12-find-community-recipe.png" alt="Find GitLab recipe" %}}

There is no GitLab recipe found for a new pentest finding, but a recipe for a DAST finding exists. We can use it as a base and customize it. Click on the recipe to see its details and click "Use this recipe".

{{% image src="/integrations/integration_builder/gitlab/13-use-recipe.png" alt="DAST recipe" %}}

Choose to save the recipe in the folder you created earlier.

{{% image src="/integrations/integration_builder/gitlab/14-use-recipe-folder.png" alt="Save recipe in folder" %}}

Once copied and saved, an initial customization is needed.

{{% image src="/integrations/integration_builder/gitlab/15-recipe-needs-customization.png" alt="Customize recipe" %}}

You can see in the recipe's graph that there is an error. The highlighted step is the one causing the error.

{{% image src="/integrations/integration_builder/gitlab/16-error.png" alt="Recipe error" %}}

The existing error is due to a missing field for the GitLab project.

{{% image src="/integrations/integration_builder/gitlab/17-click-step-with-error.png" alt="Recipe error" %}}

Select your GitLab project in the step's settings.

{{% image src="/integrations/integration_builder/gitlab/18-select-gitlab-project.png" alt="Select GitLab project" %}}

### 6. Customize the Recipe

Notice the first step in the recipe (the trigger) is about a DAST finding. We need to change it to a pentest finding.
If you click on it, you can see the trigger's settings. Change the trigger name to "pentest finding" at the top, and change the trigger on use at the right to "Pentest finding published".

{{% image src="/integrations/integration_builder/gitlab/19-customize-trigger.png" alt="Change trigger" %}}

Once done, click "Save" then "Exit". Now you can see the recipe is saved and the error is gone. Let's start the recipe from the top right button.

{{% image src="/integrations/integration_builder/gitlab/20-start-recipe.png" alt="Start recipe" %}}

You will see a new error message, and the steps with errors are highlighted. That's because some steps depend on info from the original DAST-related trigger. So we need to change that.

{{% image src="/integrations/integration_builder/gitlab/21-start-recipe-error.png" alt="Start recipe" %}}

If you click on the step with the error, the settings on the right will show an invalid ID. You need to change it to the correct pentest finding ID.

{{% image src="/integrations/integration_builder/gitlab/22-error-step-wrong-id.png" alt="Wrong ID" %}}

Delete the wrong ID and choose "Finding ID" from the dropdown. This will automatically fill in the correct ID.

{{% image src="/integrations/integration_builder/gitlab/23-error-step-select-correct-id.png" alt="Correct ID" %}}

Now save and exit, and you will see that the error is gone. Start the recipe again. This may take a few seconds to run.

{{% image src="/integrations/integration_builder/gitlab/24-start-recipe.png" alt="Start recipe" %}}

Once the recipe is running, you will see the jobs tab to monitor any events. This can be left open to verify whether a created finding triggers the desired action.
The recipe will continue running even when closing the tab, until "Stop recipe" gets clicked.

{{% image src="/integrations/integration_builder/gitlab/25-recipe-running.png" alt="Start recipe" %}}

You can [create a test Finding](/integrations/development/create-test-finding/) to test the recipe.
