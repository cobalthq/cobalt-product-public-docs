---
title: "GitHub"
linkTitle: "GitHub"
weight: 40
---

{{% pageinfo %}}
How to use Integration Builder to push findings to GitHub Issues.
{{% /pageinfo %}}

## Push findings to GitHub Issues

You can use Integration Builder to push pentest and/or DAST findings to GitHub Issues.

### Prerequisites

To use GitHub recipes, you must have a GitHub account and a repository where you
want to push findings as issues.

{{% expand "GitHub Documentation" %}}
- [Create a GitHub account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github)
- [Create a repository](https://docs.github.com/en/get-started/start-your-journey/hello-world#step-1-create-a-repository)
{{% /expand %}}

## Set up the GitHub connection

1. Click the create connection button

![Create connection folder view](/integrations/integration_builder/how_to_guides/github/01_create-connection-start.png "Create connection folder view")

2. Select the GitHub connector

![Select GitHub connector](/integrations/integration_builder/how_to_guides/github/02_new-connection.png "Select GitHub connector")

3. Input a name for the connection

![Enter connection name](/integrations/integration_builder/how_to_guides/github/03_connect-to-github.png "Enter connection name")

4. Authorize the connection

![Authorize connection](/integrations/integration_builder/how_to_guides/github/04_oauth-authorize.png "Authorize connection")

![Connected](/integrations/integration_builder/how_to_guides/github/05_connected.png "Connected")

5. Create a folder for your GitHub recipes inside the Cobalt project.
**NOTE**: We recommend naming the folder "GitHub" for keeping recipes organized
by integrated system.

![Create folder](/integrations/integration_builder/how_to_guides/github/06_create-folder.png "Create folder")

![Name folder](/integrations/integration_builder/how_to_guides/github/07_name-folder.png "Name folder")

![Folder created](/integrations/integration_builder/how_to_guides/github/08_folder-created.png "Folder created")

## Set up the GitHub recipe

1. Navigate to the recipe library and click on GitHub

![Recipe library](/integrations/integration_builder/how_to_guides/github/09_recipe-library.png "Recipe library")

2. Click on the recipe you want to use and copy it into the folder created in step 5 above.
**Note:** This guide uses pentest findings, but there is also a recipe for DAST findings.

![Select recipe](/integrations/integration_builder/how_to_guides/github/10_select-recipe.png "Select recipe")

![Use recipe](/integrations/integration_builder/how_to_guides/github/11_use-recipe.png "Use recipe")

![Copy recipe](/integrations/integration_builder/how_to_guides/github/12_copy-recipe.png "Copy recipe")

3. You will need to customize the recipe to use your GitHub organization and
repository. Click the button to customize the recipe, then enter or select your
organization and repository name in the required fields. Make sure you save the
recipe after customizing it.

![Start customizing](/integrations/integration_builder/how_to_guides/github/13_customize-recipe-start.png "Start customizing")

![Customize recipe](/integrations/integration_builder/how_to_guides/github/14_customize-recipe.png "Customize recipe")

![Save recipe](/integrations/integration_builder/how_to_guides/github/15_save-recipe.png "Save recipe")

4. By default, the recipe will be in an inactive state. To start pushing your
findings to GitHub issues, click the "Start recipe" button.

![Start recipe](/integrations/integration_builder/how_to_guides/github/16_start-recipe.png "Start recipe")

![Recipe running](/integrations/integration_builder/how_to_guides/github/17_recipe-running.png "Recipe running")

## Testing the recipe

To test the recipe with pentest findings, follow the guide for
[creating a test finding](/integrations/development/create-test-finding/).

To test the recipe with [DAST scan](/platform-deep-dive/scans/)
findings, run a scan against the target `https://brokencrystals.com` and wait
for the scan to complete.
