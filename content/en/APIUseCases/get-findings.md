---
title: "Retrieve Cobalt Findings and Export Them to a Spreadsheet"
linkTitle: "Export Findings"
weight: 120
description: >
  Learn how to retrieve all findings using the Cobalt API and export them to a spreadsheet.
---

{{% pageinfo %}}
Use this document with our [Cobalt API documentation](https://docs.cobalt.io) to retrieve Cobalt findings for all pentests.
{{% /pageinfo %}}

In this article:

- [Step 1: Create an API Token in the Cobalt UI](#step-1-create-an-api-token-in-the-cobalt-ui)
- [Step 2: Get Your Organization Token](#step-2-get-your-organization-token)
- [Step 3: Get All Findings](#step-3-get-all-findings)
- [Step 4: Export Findings to a Spreadsheet](#step-4-export-findings-to-a-spreadsheet)
- [Step 5: Visualize Findings Data](#step-5-visualize-findings-data)

To use our API, you need a Cobalt account with membership in your organization.
Your organization owner can create an account and [assign you as a member](/platform-deep-dive/organization/manage-users/#invite-users). Your organization owner is typically the user who interacts with the Cobalt
Customer Success Manager (CSM).

## Step 1: Create an API Token in the Cobalt UI

To use the Cobalt API, you need a personal API token.

1. Navigate to https://app.cobalt.io/settings/api-tokens.
1. If needed, sign in to the app.
1. Enter an API Token Name.
1. Select **Generate New Token**.
1. In the modal that appears, you should see your API Token, in the **Secret Token** field.

Save the API Token. After you close the overlay, you won't see the full token again.
If you lose it, you may have to revoke the token and start over.

Substitute the API token for `{{% api-token %}}` in the REST calls
described on this page.

## Step 2: Get Your Organization Token

Next, you can use the API token to authorize access to the Cobalt API. Take
the API token that you [generated](#step-1-create-an-api-token-in-the-cobalt-ui). Substitute that value for `{{% api-token %}}`:

```bash
curl -X GET "https://api.cobalt.io/orgs" \
     -H "Accept: application/vnd.cobalt.v2+json" \
     -H "Authorization: Bearer {{% api-token %}}" \
```

{{%expand "Click to view a sample response." %}}
You should see output similar to:

```json
{
  "data": [
    {
      "resource": {
        "id": "some_id",
        "name": "Name of your organization",
        "token": "{{% org-token %}}"
      },
      "links": {
        "ui": {
          "url": "https://api.cobalt.io/links/link-to-web-app"
        }
      }
    }
  ],
  "pagination": {
    "next_page": "/orgs?cursor=a1b2c3d4",
    "prev_page": "/orgs?cursor=4d3c2b1a"
  }
}
```
{{% /expand %}}
</br>
  
From the output, save the value for `token` as your organization token.
In our API documentation, you'll see this as `{{% org-token %}}`.

For more information, see our API reference documentation on the
[organizations](https://docs.cobalt.io/v2/#organizations) `orgs` endpoint.

## Step 3: Get All Findings

Now that you have the following information:

- `{{% api-token %}}`
- `{{% org-token %}}`

You can retrieve all [findings](/platform-deep-dive/pentests/findings/) with the following REST call:

```bash
curl -X GET "https://api.cobalt.io/findings" \
  -H "Accept: application/vnd.cobalt.v2+json" \
  -H "Authorization: Bearer {{% api-token %}}" \
  -H "X-Org-Token: {{% org-token %}}" \
  -v
```

For more information on each parameter, see our API reference documentation on
how to [get all findings](https://docs.cobalt.io/v2/#get-all-findings).

The command we use includes a `-v`, which sets up output in verbose mode. The
command works without it. However, you would see no response from this REST call.

When you review the output of the REST call with the `-v`, look for the line
with `HTTP/2`. If the command is successful, you'll see

| Message    | Meaning          |
|------------|------------------|
| 200 OK | Findings retrieved    |

For a list of error codes, see the [Errors](https://docs.cobalt.io/v2/#errors)
section of our API reference.

## Step 4: Export Findings to a Spreadsheet

Now that you have findings data in JSON format, you can export it to the spreadsheet software of your choice.

As an example, let's export findings to Google Sheets.

1. In Google Sheets, select **Extensions** > **Apps Script**.
1. Use the [Class UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app) service to import raw findings data. Refer to the [Class SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app) reference for details.<br>
1. Run the following script to download and import Cobalt findings. Replace `{{% api-token %}}` and `{{% org-token %}}` with your values.<br>

    ```js
    function FETCH_DATA(pentest) {
      var url = 'https://api.cobalt.io/findings?pentest='+pentest; 
      var params = { headers: {
        'Accept': 'application/vnd.cobalt.v1+json',
        'Content-Type': 'application/vnd.cobalt.v1+json',
        'Authorization': 'Bearer {{% api-token %}}',
        'X-Org-Token': '{{% org-token %}}'
      }}
      var sheet = SpreadsheetApp.getActiveSheet();

      var response = JSON.parse(UrlFetchApp.fetch(url, params)).data;
      sheet.appendRow(Object.keys(response[0].resource));
      response.forEach((i) => 
        sheet.appendRow(
          Object.entries(i.resource)
          .map(([key, content]) => { 
            if(key == 'labels') {
              return content.map(c => c.name).join(',');
            }
            if(key == 'affected_targets') {
              return content.join(',');
            }
            if(key == 'log') {
              return JSON.stringify(content);
            }
            return content;
          })
        )
      );
    }
    ```

## Step 5: Visualize Findings Data

After importing raw findings data, you can create charts to visualize data. Here are some examples for Google Sheets.

- **Sum of impact points per target**: Use a QUERY inside a spreadsheet. The request sums up Impact Points (column G) and groups them by Affected Targets (Column J):<br>
    `=TRANSPOSE(QUERY('Raw Data'!B:J, "SELECT J, SUM(G) group by J " , 1))`
- **Chart representing severity**:  In Google Sheets, select **Insert** > **Chart**, and select **Column I** as the data source.
- **Chart representing likelihood**: In Google Sheets, select **Insert** > **Chart**, and select **Column H** as the data source.
- **Chart showing the highest severity**: Use the following command:<br>
    `=INDIRECT("'Raw Data'!B"&MATCH(MAX('Raw Data'!G:G),'Raw Data'!G:G,0))`

The result may appear as shown in the image.

![Findings data imported to Google Sheets](/apiusecases/findings-imported-to-Google-Sheets.png "Findings data imported to Google Sheets")

You can control who can access your Macros and Google Sheets. Fine-tune to which parts of your data specific users have access. This allows you to generate live reports without inviting users to the Cobalt platform.
