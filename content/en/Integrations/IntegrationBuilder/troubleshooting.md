---
title: "Troubleshooting"
linkTitle: "Troubleshooting"
weight: 40
description: Troubleshooting.
---

{{% pageinfo %}}
Lorem
{{% /pageinfo %}}

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
You may need to re-read your recipe to make sure the logic still makes sense and there are no obvious logic errors.
If you think the failure is being caused by an issue with the Integration Builder or the Cobalt public API, please reach out to your CSM.

## How to rerun a failed recipe

If you need to re-run a failed recipe, you can navigate to the failed job then click the "Repeat this job" button.

![Rerun recipe](/integrations/integration_builder/troubleshooting/rerun_recipe.png "Rerun recipe")

## How to revert a change to a recipe

ipsum
