---
title: "Create an Asset"
linkTitle: "Create an Asset"
weight: 10
no_list: true
description: >
  Security professionals perform pentests on your assets. Collect the info they need.
---

{{% pageinfo %}}
You can launch multiple pentests for an [asset](/getting-started/glossary/#asset). Once you've set up an asset, you can reuse it in your next pentests.
{{% /pageinfo %}}

## Creating Assets

To create an asset, go to the **Assets** page, then select **New Asset**. 

In the form, specify your [asset details](/assets/create-asset/#asset-details).

{{% asset-best-practices %}}

## Asset Details

The **Asset** screen prompts you for the following information:

- **Asset Title**: Set up a descriptive name to attract attention from the best pentesters.
- **Asset Image**: Use it to help identify what you need from a list of assets.
- **[Asset Type](/getting-started/assets/asset-type/)**: Select one of the options described in the linked page.
- **[Technology Stack](/platform-deep-dive/assets/risk-advisories/#add-a-technology-stack-for-your-asset)** (for Web, Mobile, API, and combined asset types): Add a technology stack for your asset. You can preview [potential vulnerabilities](/platform-deep-dive/assets/risk-advisories/) based on the [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) standard for this stack.
- **[Asset Description](/getting-started/assets/asset-description/)**: Add information that can help your pentesters fully analyze your asset.
- **[Attachments](/getting-started/assets/asset-description/#attachments)**: Upload documentation, architecture diagrams, images, spreadsheets, or videos related to your asset.
- **[Assigned Group](/platform-deep-dive/collaboration/groups)**: The group that is assigned to the asset will have exclusive access to it and its associated pentests and findings. [Learn how to create a group](/platform-deep-dive/collaboration/groups).
- **[Tags](#asset-tags)**: {{% asset-tag-definition %}} Learn [how to use asset tags](#asset-tags).

{{% image src="/gsg/asset-details.png" alt="Specify asset details" %}}

## Describe Your Assets

Our pentesters need all relevant information about your asset. To help you understand what to share, we include a description template.

For all assets, we'd appreciate a:

- High-level overview
- Description of important functions or features
- Business risks associated with each function and feature

Include links to published documentation related to the asset. You can upload documentation, diagrams, and more in various file formats under [Attachments](#attachments).

The following sections detail additional needs for different kinds of assets:

### Web, API, Mobile

Web, API, and Mobile assets frequently include user roles in different
categories such as:

- Administrator
- Service user
- Regular user

Each of these roles typically have different sets of rights, privileges, or permissions. We can verify whether such roles are appropriately limited.

For web assets, define the application type. For example, some web assets may be a:

- Page-driven website
- [Single-page application](https://developer.mozilla.org/en-US/docs/Glossary/SPA)

Web and API assets frequently include dedicated reference documentation. For example, RESTful API assets frequently include OpenAPI-based documents that describe the properties associated with each endpoint.

### Web Asset Description

Help us find the right pentesters for your asset. Include a high-level overview of the application. Add details such as:

- Coding Language.
- Functions or features central to the capability of your asset.
  - Business risks associated with specific functions or features.
- Special endpoints associated with your dynamic pages.
  - While our pentesters can find the API endpoints used by your web app with
    browser "Developer Tools," let us know if you have special concerns with
    one or more endpoints.

### Network Assets (External and Internal)

Our pentesters need network diagrams to know what to test on a network. If you've set up a [jump box](/getting-started/glossary/#jump-box) for our pentesters on your network, include the location in the diagram.

Add network information, including the IP address / hostname of the jump box.

### Cloud Configuration Assets

Our pentesters need to know how you've set up and use your cloud assets.

Make sure to include the:

- Cloud provider
- Services
- Applicable network / architecture diagrams

## Attachments

To share more about your assets, you can upload the documentation of your choice under **Attachment(s)**. Our app limits uploads to 100 MB.

{{%expand "Accepted file categories and formats:" %}}

- Archives (.gz, .rar, .tar, .zip)
- Documents (.doc, .docx, .pdf, .txt)
- Images (.gif, .jpg, .jpeg, .png)
- Spreadsheets (.csv, .xls, .xlsx)
- Videos (.mov, .mp4)
  {{% /expand%}}

{{< alert title="Tip" color="primary" >}}
You can add a video walk-through of your asset as an attachment. This will give pentesters more context about the asset they need to test.<br><br>Screen recording instructions vary depending on your device and operating system. As an example, read [how to record the screen on your Mac](https://support.apple.com/en-gb/HT208721).
{{< /alert >}}

![Asset Attachments Screen](/gsg/AssetAttachments.png "Uploads related to your asset")

If you'd like to upload files in a different format, you can try to:

- Compress or archive the files into one of the noted formats.
  - For example, you can use a "Zip" tool built for your operating system to
    save your file with a **.zip** file extension.
- Contact {{% csm-support %}} for guidance.

For complex assets, we encourage spreadsheets. The UI includes links to the following
templates:

- Workflow/Priority Target
- User role matrix

We've included suggested data in the downloadable Excel (.xlsx) files. We encourage you to replace this information with other data, and upload it with any other documentation for your asset.

Now you can start [setting up a pentest](/getting-started/select-pentest-type/).

### Asset Tags

{{% asset-tag-definition %}} You can add multiple tags to an asset. Use tags to:

- Map your assets to external systems, such as your vulnerability management application or task tracking software. Add the asset identifier in your third-party system as a tag.
- Associate other metadata such as vulnerabilities in external systems with Cobalt assets.
- Assign internal teams or business units to manage specific assets in Cobalt.
- Assign a compliance audit type the asset is subject to, such as `SOC 2`, `PCI-DSS`, or `CREST`.

You can also add asset tags using the Cobalt API. Learn more in our [API documentation](/cobalt-api/documentation/v2/#assets).

![Add custom tags to Cobalt assets](/gsg/asset-tags.png "Add custom tags to Cobalt assets")
