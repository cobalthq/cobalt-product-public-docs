---
title: "Define Your Assets"
linkTitle: "Define Your Assets"
weight: 10
description: >
  Security professionals perform pentests on your assets. Collect the info they need.
---

{{% pageinfo %}}
You can launch multiple pentests for an [asset](/getting-started/glossary/#asset). Once you've set up an asset, you can reuse it in your next pentests.
{{% /pageinfo %}}

![Workflow for creating a pentest](/gsg/CreatePentestFlowStage1.png "Workflow for creating a pentest")

## Create an Asset

Once you've [signed in](/getting-started/sign-in/), you land on the **Assets** page.

- To add a single asset, select **New Asset**. Specify [asset details](#asset-details).
- To upload assets in bulk in CSV or XLSX format, select **Bulk Assets**. Once uploaded, you can select an asset to add an image, [technology stack](/platform-deep-dive/assets/risk-advisories/#add-a-technology-stack-for-your-asset), and [attachments](/getting-started/assets/asset-description/#attachments).
  - If the upload is successful, all your assets from the file are added. Otherwise, no assets are created. Our algorithm doesn't process the request partially.
  - We don't prevent you from creating duplicate assets.

{{% asset-best-practices %}}

## Asset Details

The **Asset** screen prompts you for the following information:

- **Asset Title**: Set up a descriptive name to attract attention from the best pentesters.
- **Asset Image**: Use it to help identify what you need from a list of assets.
- [Asset Type](/getting-started/assets/asset-type/): Select one of the options described in the linked page.
- [Technology Stack](/platform-deep-dive/assets/risk-advisories/#add-a-technology-stack-for-your-asset) (for Web, Mobile, API, and combined asset types): Add a technology stack for your asset. You can preview [potential vulnerabilities](/platform-deep-dive/assets/risk-advisories/) based on the [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) standard for this stack.
- [Asset Description](/getting-started/assets/asset-description/): Add information that can help your pentesters fully analyze your asset.
- [Attachments](/getting-started/assets/asset-description/#attachments): Upload documentation, architecture diagrams, images, spreadsheets, or videos related to your asset.
- **Tags**: A tag is a custom asset identifier in a third-party system. Add tags to map your assets to external systems, such as your vulnerability management application or task tracking system.

![Specify asset details](/gsg/AssetScreen.png "Specify asset details")

The UI provides the information that you need to add an **Asset Title** and **Image**. Now take the next step and define your [Asset Type](/getting-started/assets/asset-type/).
