---
title: "Assets"
linkTitle: "Assets"
weight: 20
no_list: true
description: >
  Assets are _what_ we pentest.
---

{{% pageinfo %}}
{{% asset-definition %}} Once you've created an asset, you can launch pentests for it.
{{% /pageinfo %}}

## Create an Asset

{{% asset-best-practices %}}

<a class="btn btn-outline-primary rounded" href="/getting-started/assets/">Read the Guide »</a>

## View and Manage Assets

![Assets page overview](/deepdive/AssetsPageOverviewCallouts.png "Assets page overview")

On the **Assets** page, you can:

- [Preview risk advisories](/platform-deep-dive/assets/risk-advisories/). To preview a summary of potential vulnerabilities based on the [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) standard, point to the number under **Risk Advisory**. To navigate to the detailed list, select the number.
- View the [Aggregated Risk](/getting-started/glossary/#aggregated-risk) for the last pentest. To navigate to the **[Insights](/platform-deep-dive/assets/insights/)** page, select the number.
- Sort assets in ascending or descending order.
- Manage assets. Select the three-dot icon {{% three-dots %}} under **Action**, and then select the desired option:
  - **Create a Pentest** for this asset
  - **Edit Asset** to modify [asset details](/getting-started/assets/#asset-details)
  - **Delete Asset**, if it doesn't have associated pentests
  - Navigate to the **Latest Pentest Report**

{{< alert title="Note" color="primary" >}}
To analyze the security posture of your assets over time and observe trends, navigate to <a href="/platform-deep-dive/assets/insights/">Cobalt Insights</a>.
{{< /alert >}}

### Asset Details Page

On the asset details page, you can:

- Create a pentest for this asset
- Edit [asset details](/getting-started/assets/#asset-details)
- Delete the asset, if it doesn't have associated pentests
- View associated pentests
- Preview [risk advisories](/platform-deep-dive/assets/risk-advisories/) for this asset

{{% alert title="Note" color="primary" %}}
Once you've defined an asset, you can launch pentests for it. You don't need to create this asset again for each new pentest. When needed, update the asset description, and attach new documents.
{{% /alert %}}

![Asset details page](/deepdive/AssetDetails.png "Asset details page")

## Access and Permissions

Only Organization Owners and Members can create an asset.

Pentest Team Members don't have access to the **Assets** page.

- They can view and edit assets that are linked to pentests they collaborate on.
- They may not be allowed to [add attachments](/getting-started/assets/asset-description/#attachments) to an asset. An Organization Owner or Member of their company or a Cobalt Customer Success Manager can assist in this case.

For more information about user permissions, see [User Roles and Permissions](/platform-deep-dive/collaboration/user-roles/).

## Frequently Asked Questions

#### Can I attach two or more assets to a pentest?

No, you can only launch a pentest for a **single asset**.

If your asset has multiple [methodologies](/methodologies/), such as Web + API, you can choose a combined methodology. If the combination is not available, such as for Mobile + External Network, do the following:

1. Select one of the available asset types.
1. Let your CSM know so that we can select pentesters with the appropriate expertise.

#### I want to test two scopes. How many assets should I set up?

You can only launch a pentest for a **single asset**. Let's rephrase this question: how many pentests should you launch for two scopes?

For assets of multiple types, you may want to **launch one or more pentests**, depending on the characteristics of your software.

For example, if your asset combines a web and mobile application, you may want us to test them together, in **one pentest**, if:

- The two applications share some of the same code and functionalities.
- One [pentest report](/platform-deep-dive/pentests/reports/) is sufficient for your purposes.
- One team is responsible for both applications.

Otherwise, you may need to set up **two pentests** to get more granular results. You can run multiple pentests for the same asset.
