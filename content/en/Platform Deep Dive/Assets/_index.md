---
title: "Assets"
linkTitle: "Assets"
weight: 10
description: >
  Assets are _what_ we pentest.
---

{{% pageinfo %}}
{{% asset-definition %}} Once you've created an asset, you can launch pentests for it.
{{% /pageinfo %}}

## View and Manage Assets

![Assets page overview](/deepdive/AssetsPageOverviewCallouts.png "Assets page overview")

Once you've created assets, you can view them on the **Assets** page. Here, you can:

- Sort assets in ascending or descending order.
- [Preview risk advisories](/platform-deep-dive/assets/risk-advisories/). To preview a summary of potential vulnerabilities based on the [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) standard, point to the number under **Risk Advisory**. To navigate to the detailed list, select the number.
- View the [Aggregated Risk](/getting-started/glossary/#aggregated-risk) for the last pentest. To navigate to the **Insights** page, select the number.
- Manage assets. Select the three-dot icon {{% three-dots %}} under **Action**, and then select the desired option:
  - **Create a Pentest** for this asset
  - **Edit Asset** to modify [asset details](/getting-started/assets/#asset-details)
  - **Delete Asset**, if it doesn't have associated pentests
  - Navigate to the **Latest Pentest Report**

### Asset Details Page

On the asset details page, you can:

- Create a pentest for this asset
- Edit [asset details](/getting-started/assets/#asset-details)
- Delete the asset, if it doesn't have associated pentests
- View associated pentests
- Preview [risk advisories](/platform-deep-dive/assets/risk-advisories/) for this asset

![Asset details page](/deepdive/AssetDetails.png "Asset details page")

## Create an Asset

Refer to the [Getting Started guide](/getting-started/assets/) to define an asset.

You can create assets in the following ways:
- On the [**Assets** page](#view-and-manage-assets):
  - To add a single asset, select **New Asset**.
  - To upload assets in bulk in CSV or XLSX format, select **Bulk Assets**. Once uploaded, you can select an asset to add an image, [technology stack](/platform-deep-dive/assets/risk-advisories/#add-a-technology-stack-for-your-asset), and [attachments](/getting-started/assets/asset-description/#attachments).
    - If the upload is successful, all your assets from the file are added. Otherwise, no assets are created. Our algorithm doesn't process the request partially. 
    - We don't prevent you from creating duplicate assets.
- When setting up a pentest, on the [Let's Get Started](/getting-started/assets/) screen, select **Create a new asset**.

You can also use the [Cobalt API](/apiusecases/create_asset/#create-an-asset) to create assets.
