---
title: "How To's"
linkTitle: "How To's"
weight: 50
---

## Clear Cobalt Session Cookies

To clear Cobalt session cookies:  

1. Launch Chrome and navigate to the Cobalt application (https://app.us.cobalt.io).
2. On the left side of the address bar, click the Site Information icon, then select **Cookies and site data**.
3. Click **Manage cookies and site data**.
4. From the “Cookies in use popup”, click the trash icon beside `api.us.cobalt.io` to delete the cookie.
5. Finally, click the **Done** button under the "Cookies in use" window.

## Set Work Item Field Values

You can set values for any fields in your work item type template. In the “Create Work Item in Azure DevOps” action, once you’ve selected the **Project** and **Work Item Type**, all fields in the work item type template will be presented in the form. Values can be entered as:
- _Static_ text values will be passed for every work item created for the pentest.
- _Dynamic_ values can be entered using Datapills, and will populate the input with parameters for the specific finding for which the work item is created.  
- _Combination_ of static text and data pills to combine and format multiple parameters.

To set dynamic values:
1. Click into the desired field.
2. In the Recipe data window, open **Parameters** > **Finding**, and click the desired parameter to populate the datapill into the field.

## Check if There is an Error

If the integration is not functioning as expected, you can check the health and get detailed performance information via the following steps:  

1. Go to **Integrations** > **Azure DevOps Boards** > **Configuration**, and for the desired pentest, select the gear icon.
2. For the “Create tickets for findings” sync, click **Edit**.
3. In the workflow window, select **Jobs** from the tab bar.



