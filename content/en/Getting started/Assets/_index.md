---
title: "Define Your Assets"
linkTitle: "Define Your Assets"
weight: 10
description: >
  Security professionals perform pentests on your "assets". Collect the info they need.
---

{{% pageinfo %}}
Help our pentesters test your assets more quickly.
{{% /pageinfo %}}

This page corresponds to the Assets that you can set up in the Cobalt app.
You can access the UI screen to define your assets in the following ways:

- Select Assets in the left-hand pane, and select New Asset.
- Select Assets or Pentests in the left-hand pane, and select Create a Pentest.
  When you create a pentest, the wizard allows you to define an asset. 

![Asset Screen](/AssetScreen.png "Define your asset here")

The asset screen prompts you for the following information:

- Asset Image: Use it to help identify what you need from a list of many assets.
- Asset Title: Set up a descriptive name to attract attention from the best pentesters.
- [Asset Type](./asset-type/): Select one of the options described in the linked page.
- Asset Scoping: Review the guidance on:
  - [Asset Size](./asset-size)
  - [Coverage and Scope](./coverage-scope)
- Asset Description: Add information that can help your pentester fully
  analyze your asset.
- Asset Documentation: Upload documentation, architecture diagrams,
  images, spreadsheets, videos related to your asset.

The UI provides the information that you need to add an Asset Image and Title.
Now take the next step and define your [Asset Type](./asset-type).

<!-- Should be able to remove content below -->

The links in the list include details for everything on the list except
Asset Image and Asset Title.

For each asset, we provide guidance for each of the following asset types:  
<!-- Pulls info from the layouts/shortcodes/<name>.html file --> 
{{% asset-categories %}}

We also support tests that span multiple categories, including:

- Web + API
- Web + External Network
- Web + Mobile

However, complex tests are beyond the scope of this Getting Started guide.

For details, see our guidance to [Size Your Assets](./asset-size/).

## Asset Description

<!-- What I've set up is different from the "Asset Description" popup.
In my judgment, the descriptions in our UI are not consistent. -->

Our pentesters need all relevant information about your asset. To help
you understand what to share, we include a description template.

For all assets, we'd appreciate a:

- High-level overview
- Description of important functions or features.
- Business risks associated with each function and feature.

Do include links to any published documentation related to the
asset. You can upload documentation, diagrams, and more in various
file formats under [Asset Documentation](#asset-documentation).

The following sections detail additional needs for different kinds of assets:

### Web, API, Mobile

Web, API, and Mobile assets frequently include user roles in different
categories such as:

- Administrator
- Service user
- Regular user

Each of these roles typically have different sets of rights, privileges,
or permissions. It helps us to know such details about each role.

For web assets, do define the application type, such as a page-driven website
or a [single-page application](https://developer.mozilla.org/en-US/docs/Glossary/SPA).

### Web Asset Description

In addition, our pentesters need to know more about your Web asset. In the Asset Description, it's helpful
to include a high-level overview of the application. Pentesters can use also details such as:

- Language, such as JavaScript or Ruby on Rails
- A list of user roles, including associated permissions/rights
- Functions or features central to the functionality of your asset
  - Business risks associated with specific functions or features
- Special endpoints associated with your dynamic pages

### Network Assets (External and Internal)

Our pentesters need network diagrams to know what to test on a network.
If you've set up a [Jump Box](../glossary#jump-box) on a network, do
include the location in the diagram.

### Cloud Configuration Assets

Our pentesters need to know how you've set up and use your cloud assets.
Even when your cloud assets stand alone, they may share features with 
other types of assets.

For example, if you have dedicated roles to maintain cloud assets, describe
them as you would describe a web app asset.

## Asset Documentation

You can upload files in the following categories and formats:

- Archives (.gz, .rar, .tar, .zip)
- Documents (.doc, .docx, .pdf, .txt)
- Images (.gif, .jpg, .jpeg, .png)
- Spreadsheets (.csv, .xls, .xlsx)
- Videos (.mov, .mp4) 

Our app limits uploads to a maximum of 100MB.

If you'd like to upload files in a different format, you can try to:

- Compress or archive the file(s) into one of the noted formats.
  - For example, you can use a "Zip" tool built for your operating system to
    save your file with a **.zip** file extension.
- Contact your CSM or support@cobalt.io for guidance.
