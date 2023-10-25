---
title: "Troubleshooting"
linkTitle: "Troubleshooting"
weight: 50
description: >
  Troubleshoot common issues with the Azure DevOps integration.
---

## Configuration Forms Do Not Appear

_I am attempting to set up a connection or configure Azure DevOps for a pentest, but the forms do not show up._

Possible reasons:
- Blocked cookies: If your browser is set to block all third-party cookies, you must allow cookies for `cobalt.io` by following [these instructions](https://support.google.com/chrome/answer/95647?sjid=8733712878597538106-NA#zippy=%2Callow-or-block-third-party-cookies%2Callow-third-party-cookies-for-a-specific-site). 
- Outdated cookies: If this is your first time using the Azure DevOps integration in the Cobalt platform, you must first [clear Cobalt session cookies](/integrations/azure-devops/how-tos/#clear-cobalt-session-cookies).

## Work Items Are Not Being Created

_Azure Devops integration is enabled for the pentest but work items are not being created when findings are moved to **Pending Fix**_.

Possible reasons:  
- **Personal Access Token (PAT) expired**: Your Azure DevOps PAT may need to be refreshed.  
- **Azure DevOps permissions**: Ensure the account used to authenticate to your Azure DevOps environment has the necessary permissions to create the selected work item type within the Project specified for the pentest.  
- **Cobalt user access**: Check that the Azure DevOps connection owner (Cobalt user who initially set up the Azure DevOps integration) has access to the pentest. If the connection owner is not a Team Member for the pentest, the integration will not have permission to view pentest details. 
- **Work item required fields**: Check that all required fields have a value (see: [Which fields are required to create Azure DevOps work item?](TBD)).
- **Work item workflow rules**: Verify that work item workflow rules do not disable fields that are passed by the integration. 

You can also [check if there is an error with an integration](/integrations/azure-devops/how-tos/#check-if-there-is-an-error) from the integration configuration screen. If you experience an error not covered by the solutions above, please reach out to your CSM or the Integrations team at integrations@cobalt.io.  

## Revert a Change

_Integration stopped working after making a change in the configuration._

If you modified a configuration and the integration is not working, you can revert to a previous version by:
1. Go to **Integrations** > **Azure DevOps Boards** > **Configuration**, and for the desired pentest, select the gear icon. 
2. For the “Create tickets for findings” sync, click **Edit**.
3. In the workflow window, select **Versions** from the tab bar.
4. Select a version of the recipe prior to the change you suspect caused the problem.
5. Click “Restore this version” to revert to the selected version.
6. Restart the recipe.

