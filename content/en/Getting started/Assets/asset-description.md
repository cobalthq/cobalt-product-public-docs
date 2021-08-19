---
title: "Describe Your Assets"
linkTitle: "Describe Your Assets"
weight: 10
description: >
  Better descriptions help our pentesters test your assets properly.
---

{{% pageinfo %}}
Help our pentesters test your assets more quickly.
{{% /pageinfo %}}

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

For web assets, define the application type, such as a page-driven website
or a [single-page application](https://developer.mozilla.org/en-US/docs/Glossary/SPA).

### Web Asset Description

Help our pentesters. Include a high-level overview of the application.
Add details such as:

- Language, such as JavaScript or Ruby on Rails
- Functions or features central to the functionality of your asset
  - Business risks associated with specific functions or features
- Special endpoints associated with your dynamic pages
  - While our pentesters can find the API endpoints used by your web app with
    browser "Developer Tools", let us know if you have special concerns with
    one or more endpoints.

### Network Assets (External and Internal)

Our pentesters need network diagrams to know what to test on a network.
If you've set up a [jump box](../glossary#jump-box) for our pentesters on your
network, include the location in the diagram.

Add network information, including the IP address / hostname of the
jump box.

### Cloud Configuration Assets

Our pentesters need to know how you've set up and use your cloud assets.
Even when your cloud assets stand alone, they may share features with 
other types of assets.

For example, if you have dedicated roles to maintain cloud assets, describe
them as you would describe a web app asset.

Make sure to include the:

- Cloud provider
- Service
- Unique users / roles
- Applicable network / architecture diagrams

## Asset Documentation

You can upload files in the following categories and formats:

- Archives (.gz, .rar, .tar, .zip)
- Documents (.doc, .docx, .pdf, .txt)
- Images (.gif, .jpg, .jpeg, .png)
- Spreadsheets (.csv, .xls, .xlsx)
- Videos (.mov, .mp4) 

Our app limits uploads to a maximum of 100MB.

![Asset Documentation Screen](/AssetDocumentation.png "Uploads related to your asset")

If you'd like to upload files in a different format, you can try to:

- Compress or archive the file(s) into one of the noted formats.
  - For example, you can use a "Zip" tool built for your operating system to
    save your file with a **.zip** file extension.
- Contact your CSM or support@cobalt.io for guidance.

For complex assets, we encourage spreadsheets. The UI includes links to the following
templates:

- Workflow/Priority Target
- User role matrix

We've included suggested data in the downloadable Excel (.xlsx) files.
You're welcome to replace this information with other data, and upload it
with any other documentation for your asset.
