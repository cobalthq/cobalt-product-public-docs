---
title: "Assets"
linkTitle: "Assets"
weight: 10
description: >
  Assets are _what_ we pentest.
---

{{% pageinfo %}}
Our security professionals perform pentests on different types of assets. Learn how to set up your assets for our pentests.
{{% /pageinfo %}}

{{% asset-definition %}} Once you've created an asset, you can launch pentests for it.

## Asset Types

We can perform pentests on assets in the following categories:

{{% asset-types-table %}}

For assets of multiple types, you may want to set up one or more pentests, depending on the characteristics of your software.

{{%expand "Learn more." %}}

For example, if your asset combines a web and mobile application, you may want us to test them together, in one pentest, if:

- The two applications share some of the same code and functionalities.
- One pentest report is sufficient for your purposes.
- One team is responsible for both applications.

Otherwise, you may need to set up two pentests to get more granular results.
{{% /expand%}}

## Create an Asset

You can create assets in the following ways:
- On the **Assets** page:
  - To add a single asset, select **New Asset**.
  - To upload assets in bulk in CSV or XLSX format, select **Bulk Assets**. Once uploaded, you can select an asset to add an image, [technology stack](/platform-deep-dive/assets/risk-advisories/#add-a-technology-stack-for-your-asset), and [attachments](/getting-started/assets/asset-description/#attachments).
    - If the upload is successful, all your assets from the file are added. Otherwise, no assets are created. Our algorithm doesn't process the request partially. 
    - We don't prevent you from creating duplicate assets.
- When setting up a pentest, on the [Let's Get Started](/getting-started/assets/) screen, select **Create a new asset**.

You can also use the [Cobalt API](/apiusecases/create_asset/#create-an-asset) to create assets.

### Asset Details

{{% asset-details %}}

## View and Modify Assets

Once you've [created](#create-an-asset) assets, you can view and manage them on the **Assets** page.

Select the three-dot icon {{% three-dots %}} under **Action**, and then select the desired option:

- **Create a Pentest** for this asset
- **Edit Asset** to modify [asset details](#asset-details)
- **Delete Asset**, if it doesn't have associated pentests

To preview a summary of [potential vulnerabilities](/platform-deep-dive/assets/risk-advisories/) based on the [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) standard, hold the pointer over the number under **Risk Advisory**. To navigate to the detailed list, select the number.

![Page listing your assets](/deepdive/AssetsPage.png "Page listing your assets")

To view asset details, select an asset. From here, you can:

- Create a pentest for this asset
- Edit asset details
- Delete the asset, if it doesn't have associated pentests
- View associated pentests
- Preview [risk advisories](/platform-deep-dive/assets/risk-advisories/) for this asset

<img src="/deepdive/AssetDetailsPageAdvisory.png" alt="Asset details page" title="Asset details page" width="800">
