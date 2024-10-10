---
title: "Retrieve Findings and Import Them to Google Sheets"
linkTitle: "Import Findings to Google Sheets"
weight: 150
aliases: /apiusecases/get-findings/
description: >
  Learn how to retrieve all findings using the Cobalt API and import them to Google Sheets.
---

{{% pageinfo %}}
Use this document with our [Cobalt API documentation](/cobalt-api/documentation/v2) to retrieve Cobalt findings for all pentests.
{{% /pageinfo %}}

Complete the following steps:

- [Step 1: Get all findings](#step-1-get-all-findings)
- [Step 2: Import findings to Google Sheets](#step-2-import-findings-to-google-sheets)
- [Step 3: Visualize findings data](#step-3-visualize-findings-data)

To use our API, you need a Cobalt account with membership in your organization.
Your organization owner can create an account and [assign you as a member](/platform-deep-dive/organization/manage-users/#invite-users). Your organization owner is typically the user who interacts with the Cobalt
Customer Success Manager (CSM).

## What You Need

{{% api-what-you-need %}}

## Step 1: Get All Findings

Retrieve all [findings](/platform-deep-dive/pentests/findings/) of an organization with the following REST call:

```bash
curl -X GET "https://api.cobalt.io/findings" \
  -H "Accept: application/vnd.cobalt.v2+json" \
  -H "Authorization: Bearer {{% api-token %}}" \
  -H "X-Org-Token: {{% org-token %}}" \
  | jq .
```

{{%expand "Click to view a sample response." %}}
You should see output similar to:

```json
{
  "data": [
    {
      "resource": {
        "id": "vl_3sP2RCWWUajc3oRXmbQ4j9",
        "tag": "#PT3334_37",
        "title": "XSS vulnerability",
        "description": "Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts...",
        "type_category": "Cross-Site Scripting (XSS)",
        "labels": [
          {
            "name": "Your label"
          }
        ],
        "impact": 5,
        "likelihood": 4,
        "severity": "high",
        "affected_targets": [
          "https://example.com",
          "192.168.1.1"
        ],
        "proof_of_concept": "Here you can see...",
        "severity_justification": "The vulnerability can cause a lot of damage",
        "suggested_fix": "Ensure this...",
        "prerequisites": "Credentials are needed",
        "pentest_id": "pt_PEtv4dqnwGV2efZhLw3BM5",
        "http_request": "HTTP GET / ...",
        "asset_id": "as_HcChCMueiPQQgvckmZtRSd",
        "log": [
          {
            "action": "created",
            "timestamp": "2021-04-01T15:13:24.322Z"
          },
          {
            "action": "likelihood_changed",
            "value": 4,
            "timestamp": "2021-04-01T15:14:05.856Z"
          },
          {
            "action": "impact_changed",
            "value": 5,
            "timestamp": "2021-04-01T15:14:05.856Z"
          },
          {
            "action": "state_changed",
            "value": "need_fix",
            "timestamp": "2021-04-01T15:14:06.757Z"
          },
          {
            "action": "state_changed",
            "value": "check_fix",
            "timestamp": "2021-04-01T15:14:57.845Z"
          }
        ],
        "state": "check_fix",
        "created_at": "2022-09-26T18:35:18.759Z",
        "updated_at": "2022-09-26T18:36:57.462Z",
        "attachments": [
          {
            "id": "at_LA5GcEL4HRitFGCHREqmzL",
            "file_name": "rainbow.jpeg",
            "download_url": "https://s3.amazonaws.com/acmecorp/uploads/attachment/file/12345/rainbow.jpeg?something=1"
          }
        ]
      },
      "links": {
        "ui": {
          "url": "https://api.cobalt.io/links/eyJ0eXBlIjoic29tZXRoaW5nIiwib3JnU2x1ZyI6ImNvYmFsdCIsInBlbnRlc3RUYWciOiJz="
        }
      }
    }
  ],
  "pagination": {
    "next_page": "/findings?cursor=a1b2c3d4",
    "prev_page": "/findings?cursor=4d3c2b1a"
  }
}
```
{{% /expand %}}
</br>

For more information on each parameter, see our API reference documentation on
how to [get all findings](/cobalt-api/documentation/v2/#get-all-findings).

If the command is successful, you'll see the following HTTP code:

| Message    | Meaning          |
|------------|------------------|
| 200 OK | Findings for all pentests of an organization are returned. |

For a list of error codes, see the [Errors](/cobalt-api/documentation/v2/#errors)
section of our API reference.

## Step 2: Import Findings to Google Sheets

Now that you have findings data in JSON format, you can import it to the spreadsheet software of your choice.

As an example, let's import findings to Google Sheets.

1. In Google Sheets, select **Extensions** > **Apps Script**.
1. Use the [Class UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app) service to import raw findings data. Refer to the [Class SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app) reference for details.<br>
1. Run the following script to download and import Cobalt findings. Replace `{{% api-token %}}` and `{{% org-token %}}` with your values.<br>

    ```js
    function FETCH_DATA() {
      var url = 'https://api.cobalt.io/findings';
      var params = { headers: {
        'Accept': 'application/vnd.cobalt.v2+json',
        'Content-Type': 'application/vnd.cobalt.v2+json',
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

## Step 3: Visualize Findings Data

After importing raw findings data, you can create charts to visualize data. Here are some examples for Google Sheets.

- **Sum of impact points per target**: Use a QUERY inside a spreadsheet. The request sums up Impact Points (column G) and groups them by Affected Targets (Column J):<br>
    `=TRANSPOSE(QUERY('Raw Data'!B:J, "SELECT J, SUM(G) group by J " , 1))`
- **Chart representing severity**: In Google Sheets, select **Insert** > **Chart**, and select **Column I** as the data source.
- **Chart representing likelihood**: In Google Sheets, select **Insert** > **Chart**, and select **Column H** as the data source.
- **Chart showing the highest severity**: Use the following command:<br>
    `=INDIRECT("'Raw Data'!B"&MATCH(MAX('Raw Data'!G:G),'Raw Data'!G:G,0))`

The result may appear as shown in the image.

![Findings data imported to Google Sheets](/cobalt-api/findings-imported-to-Google-Sheets.png "Findings data imported to Google Sheets")

You can control who can access your Macros and Google Sheets. Fine-tune to which parts of your data specific users have access. This allows you to generate live reports without inviting users to the Cobalt platform.
