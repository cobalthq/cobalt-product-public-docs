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

You can create an asset in the following ways:

- In the UI:
  - Independently, without creating a pentest:
    - Navigate to the **Assets** page, and select **New Asset**.
  - When setting up a pentest:
    - On the **Let's Get Started** screen, select **Create a new pentest for a new asset**.
- With the [Cobalt API](/apiusecases/create_asset/#create-an-asset)

### Asset Details

{{% asset-details %}}

## View and Modify Assets

Once you've [created](#create-an-asset) assets, you can view and manage them on the **Assets** page.

Select the three-dot icon under **Action**, and then select the desired option:

- **Create a Pentest** for this asset
- **Edit Asset** to modify [asset details](#asset-details)
- **Delete Asset**, if it doesn't have associated pentests

To preview a summary of [potential vulnerabilities](/platform-deep-dive/assets/risk-advisories/) from the [National Vulnerability Database (NVD)](https://nvd.nist.gov/), hold the pointer over the number under **Risk Advisory**. To navigate to the detailed list, select the number.

![Page listing your assets](/deepdive/AssetsPageNVD.png "Page listing your assets")

To view asset details, select an asset. From here, you can:

- Create a pentest for this asset
- Edit asset details
- Delete the asset, if it doesn't have associated pentests
- View associated pentests
- Preview [NVD risk advisories](/platform-deep-dive/assets/risk-advisories/) for this asset

<img src="/deepdive/AssetDetailsPageNVD.png" alt="Asset details page" title="Asset details page" width="800">
