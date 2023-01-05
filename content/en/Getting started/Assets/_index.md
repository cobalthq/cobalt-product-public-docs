---
title: "Define Your Assets"
linkTitle: "Stage 1: Define Your Assets"
weight: 10
description: >
  Security professionals perform pentests on your assets. Collect the info they need.
---

{{% pageinfo %}}
You can launch multiple pentests for an [asset](/getting-started/glossary/#asset). Once you've set up an asset, you can reuse it in your next pentests.
{{% /pageinfo %}}

![Workflow for creating a pentest](/gsg/CreatePentestFlowStage1.png "Workflow for creating a pentest")
<br>

Once you've [signed in](/getting-started/sign-in/), you land on the **Assets** page.

- To add a single asset, select **New Asset**. Specify [asset details](#asset-details).
- To upload assets in bulk in CSV or XLSX format, select **Bulk Assets**. Once uploaded, you can select an asset to add an image, [technology stack](/platform-deep-dive/assets/risk-advisories/#add-a-technology-stack-for-your-asset), and [attachments](/getting-started/assets/asset-description/#attachments).
  - If the upload is successful, all your assets from the file are added. Otherwise, no assets are created. Our algorithm doesn't process the request partially.
  - We don't prevent you from creating duplicate assets.

## Asset Details

{{% asset-details %}}

![Specify asset details](/gsg/AssetScreen.png "Specify asset details")

The UI provides the information that you need to add an **Asset Title** and **Image**. Now take the next step and define your [Asset Type](/getting-started/assets/asset-type/).
