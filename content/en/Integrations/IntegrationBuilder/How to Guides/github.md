---
title: "Push Findings to GitHub"
linkTitle: "Push Findings to GitHub"
weight: 40
---

{{% pageinfo %}}
How to use Integration Builder to push findings to GitHub Issues.
{{% /pageinfo %}}

## Push Findings to GitHub Issues

You can use Integration Builder to push pentest and/or DAST findings to GitHub Issues.

### Prerequisites

To use GitHub recipes, you must have a GitHub account and a repository where you
want to push findings as issues.

{{% expand "GitHub Documentation" %}}
- [Create a GitHub account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github)
- [Create a repository](https://docs.github.com/en/get-started/start-your-journey/hello-world#step-1-create-a-repository)
{{% /expand %}}

## Create the GitHub connection

If you haven't already, you need to create a connection to GitHub. If you
already have a GitHub connection, you can skip this section.

1. Navigate to the Projects tab of the Integration Builder.

2. Click the "Create" button to open the menu, then click "Connection."

{{% image src="/integrations/integration_builder/how_to_guides/github/01_create-connection-start.png" alt="Create connection" %}}

3. Click on the GitHub connector.

{{% image src="/integrations/integration_builder/how_to_guides/github/02_new-connection.png" alt="Select GitHub connector" %}}

4. Input a name for the connection and click the "Connect" button.

{{% image src="/integrations/integration_builder/how_to_guides/github/03_connect-to-github.png" alt="Enter connection name" %}}

5. Authorize the connection.

{{% image src="/integrations/integration_builder/how_to_guides/github/04_oauth-authorize.png" alt="Authorize connection" %}}

6. Once the connection is authorized, you will see the "Connected" status.

{{% image src="/integrations/integration_builder/how_to_guides/github/05_connected.png" alt="Connected" %}}

## Create a folder for your GitHub recipes

1. Navigate to the Projects tab of the Integration Builder.

2. Click the "Create" button to open the menu, then click "Folder."

{{% image src="/integrations/integration_builder/how_to_guides/github/06_create-folder.png" alt="Create folder" %}}

3. Input the folder name and click "Create folder."
**NOTE**: We recommend naming the folder "GitHub" for keeping recipes organized
by integrated system.

{{% image src="/integrations/integration_builder/how_to_guides/github/07_name-folder.png" alt="Name folder" %}}

4. The new folder will be empty by default.

{{% image src="/integrations/integration_builder/how_to_guides/github/08_folder-created.png" alt="Folder created" %}}

## Set up the GitHub recipe

**Note:** This guide uses the pentest findings recipe, but there is also a recipe for DAST findings.
You should be able to use the same steps for either recipe.

1. Navigate to the Library tab and click on GitHub.

{{% image src="/integrations/integration_builder/how_to_guides/github/09_recipe-library.png" alt="Recipe library" %}}

2. Click on the recipe you want to use, then click "Use recipe."

{{% image src="/integrations/integration_builder/how_to_guides/github/10_select-recipe.png" alt="Select GitHub recipe" %}}

{{% image src="/integrations/integration_builder/how_to_guides/github/11_use-recipe.png" alt="Use GitHub recipe" %}}

3. Select the folder you created and click "Copy and save."

{{% image src="/integrations/integration_builder/how_to_guides/github/12_copy-recipe.png" alt="Copy GitHub recipe" %}}

{{% image src="/integrations/integration_builder/how_to_guides/github/13_copy-and-save.png" alt="Copy and save" %}}

### Customize the recipe

You will need to customize the recipe to use your GitHub organization and
repository. You can optionally customize the content of the GitHub issues that
the recipe creates.

1. Click the "Customize recipe" button to open the recipe editor.

{{% image src="/integrations/integration_builder/how_to_guides/github/14_customize-recipe-start.png" alt="Start customizing" %}}

2. Click the link for step 17 in the error message at the top of the editor.

{{% image src="/integrations/integration_builder/how_to_guides/github/15_customize-error.png" alt="Link for step 17" %}}

3. Select or input your GitHub Organization and Repository name required fields.

{{% image src="/integrations/integration_builder/how_to_guides/github/16_customize-recipe.png" alt="Input required fields" %}}

  - **Optional**: You can update the recipe trigger to run it for a specific
  asset or pentest. By default, the recipe will be triggered for all pentests
  within your org. (*Note*: If you are using the DAST recipe, you can select a
  Target instead of an Asset or Pentest.)

    - Click on the trigger to open the trigger editor, then click the button to
      view optional fields.

    {{% image src="/integrations/integration_builder/how_to_guides/github/27_update-trigger.png" alt="Edit trigger" %}}

    - To specify an asset, select the checkbox for "Asset" then select an asset
      from the list.

    {{% image src="/integrations/integration_builder/how_to_guides/github/28_trigger-asset-field.png" alt="Asset field toggle" %}}

    {{% image src="/integrations/integration_builder/how_to_guides/github/29_trigger-asset-selected.png" alt="Selected asset" %}}

    - To specify a pentest, select the checkbox for "Pentest" then select a
    pentest from the list.

    {{% image src="/integrations/integration_builder/how_to_guides/github/30_trigger-pentest-field.png" alt="Pentest field toggle" %}}

    {{% image src="/integrations/integration_builder/how_to_guides/github/31_trigger-pentest-selected.png" alt="Selected pentest" %}}

    - To undo your changes, click the "Reset" button to return to the default
    state.

    {{% image src="/integrations/integration_builder/how_to_guides/github/32_trigger-reset.png" alt="Reset trigger" %}}

  - **Optional**: Customize the content of the GitHub issues that the recipe creates.
    - You can use datapills to populate the fields with dynamic values.
    - You can type into the input fields to set static values.

    {{% image src="/integrations/integration_builder/how_to_guides/github/24_customizable-fields.png" alt="Customizable fields" %}}

    - Available fields:
      - Issue title
      - Body
      - Assignees
      - Labels (optional field, see below)
      - Milestone ID (optional field, see below)

      {{% image src="/integrations/integration_builder/how_to_guides/github/25_optional-fields.png" alt="Optional fields" %}}

      {{% image src="/integrations/integration_builder/how_to_guides/github/26_select-optional-fields.png" alt="Select optional fields" %}}

4. Click the "Save" button to save your changes.

{{% image src="/integrations/integration_builder/how_to_guides/github/17_save-recipe.png" alt="Save recipe" %}}

5. Click the "Exit" button to close the recipe editor.

{{% image src="/integrations/integration_builder/how_to_guides/github/18_exit-recipe-editor.png" alt="Exit recipe editor" %}}

6. By default, the recipe will be in an inactive state. To start pushing your
findings to GitHub issues, click the "Start recipe" button.

{{% image src="/integrations/integration_builder/how_to_guides/github/19_start-recipe.png" alt="Start GitHub recipe" %}}

{{% image src="/integrations/integration_builder/how_to_guides/github/20_recipe-running.png" alt="Recipe running" %}}

## Test the recipe

To test the recipe with pentest findings, follow the guide for
[creating a test finding](/integrations/development/create-test-finding/).

To test the recipe with [DAST scan](/platform-deep-dive/scans/)
findings, run a scan against the target `https://brokencrystals.com` and wait
for the scan to complete.

## Edit the recipe

1. To edit the recipe, you need to stop it first. Click the "Stop recipe" button at
the top of the recipe page.

{{% image src="/integrations/integration_builder/how_to_guides/github/21_stop-recipe.png" alt="Stop recipe" %}}

2. Click the "Edit" button to open the recipe editor.

{{% image src="/integrations/integration_builder/how_to_guides/github/22_edit-recipe.png" alt="Edit recipe" %}}

3. Make your changes in the recipe editor. Once you're finished, make sure to
click the save button and re-start the recipe as shown in the steps above.

{{% image src="/integrations/integration_builder/how_to_guides/github/23_recipe-editor.png" alt="Recipe editor" %}}
