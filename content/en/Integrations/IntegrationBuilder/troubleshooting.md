---
title: "Troubleshooting"
linkTitle: "Troubleshooting"
weight: 40
---

## How to troubleshoot errors

To tell at a glance if your integration is failing, you can check your dashboard. Failures will be listed there.

![Dashboard with errors](/integrations/integration_builder/troubleshooting/how_to_troubleshoot/dashboard_with_error.png "Dashboard with error")

To tell which recipe is failing, you can scroll down on the dashboard page.

![Recipe run list](/integrations/integration_builder/troubleshooting/how_to_troubleshoot/recipe_run_list.png "Recipe run list")

Once you have identified the failing recipe, navigate to the jobs page for the recipe. You can then click on the job that has failed to see why it failed.

![Failing recipe](/integrations/integration_builder/troubleshooting/how_to_troubleshoot/failing_recipe.png "Failing recipe")

Within the view for the failed job, you can click on the action that failed. This will show you the error message that describes why the failure occurred.

![Recipe action error](/integrations/integration_builder/troubleshooting/how_to_troubleshoot/action_error.png "Recipe action error")

If you are unsure about how to fix the issue, you can view the input and debug tabs for the failing action to aquire more information that may be helpful for troubleshooting the issue.
You may need to re-read your recipe to make sure the logic still makes sense.
If you think the failure is being caused by an issue with the Integration Builder or the Cobalt public API, please reach out to your CSM.

## How to rerun a failed recipe

If you need to re-run a failed recipe, you can navigate to the failed job then click the "Repeat this job" button.

![Rerun recipe](/integrations/integration_builder/troubleshooting/rerun_recipe.png "Rerun recipe")

## How to revert a change to a recipe

If you make a change to your recipe that causes failures, you can easily revert to a previous version of the recipe.

To see the available versions of your recipe, navigate to the "versions" tab for your recipe.

![Recipe versions list](/integrations/integration_builder/troubleshooting/revert_recipe_change/recipe_versions.png "Recipe versions list")

Next, click on the last-known working version of the recipe and click "Restore this version"

![Restore recipe version](/integrations/integration_builder/troubleshooting/revert_recipe_change/restore_recipe_version.png "Restore recipe version")

You can now click "Start recipe" to start the restored version of your recipe.

## Configuration forms do not appear

If forms do not appear while you are attempting to create a connection or configure a recipe, the most likely cause is that your browser is blocking third party cookies.

If your browser is set to block all third-party cookies, you must allow cookies for `cobalt.io` by following [these instructions](https://support.google.com/chrome/answer/95647?sjid=8733712878597538106-NA#zippy=%2Callow-or-block-third-party-cookies%2Callow-third-party-cookies-for-a-specific-site).
