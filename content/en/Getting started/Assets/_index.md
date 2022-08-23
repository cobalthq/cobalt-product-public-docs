---
title: "Define Your Assets"
linkTitle: "Define Your Assets"
weight: 10
description: >
  Security professionals perform pentests on your assets. Collect the info they need.
---

{{% pageinfo %}}
Help our pentesters test your [assets](../glossary#asset) faster.
{{% /pageinfo %}}

Once you select **Create a Pentest**, you land on the **Let's Get Started** screen.

Before you start defining your assets, select the [pentest type](/platform-deep-dive/pentests/pentest-types/) that you want to perform.

- {{% agile-pentest %}}
- A Comprehensive Pentest is performed for [security audit](/getting-started/glossary/#security-audit), [compliance audit](/getting-started/glossary/#compliance-audit), or customer attestation and includes comprehensive [reports](/platform-deep-dive/pentests/reports/) intended for external stakeholders

Select how you want to proceed with your asset:

- **Create a new asset**
- **Use an existing asset**
  - From the list of your assets that appears, choose an asset. Once you select **Continue**, you can see the Asset screen with available information.

<!-- For content, see https://github.com/cobalthq/cobalt-product-public-docs/blob/main/layouts/shortcodes/big-pic-UI-steps.md -->
{{% big-pic-UI-steps %}}

This section can help you define your asset. In the Cobalt UI, you can
define pentest objectives in the following screen:

![Asset Screen](/gsg/AssetScreen.png "Define your asset here")

This page corresponds to the Assets that you can set up in the Cobalt app.
You can access the UI to define your assets in the following ways:

- Select Assets in the left-hand pane, and select New Asset.
- Select Assets or Pentests in the left-hand pane, and select Create a Pentest.
  When you set up a pentest, the wizard allows you to define an asset.

This Getting Started Guide assumes that you're setting up an asset as part of
setting up a pentest.

The asset screen prompts you for the following information:

- Asset Image: Use it to help identify what you need from a list of assets.
- Asset Title: Set up a descriptive name to attract attention from the best pentesters.
- [Asset Type](./asset-type): Select one of the options described in the linked page.
- Asset Scoping: Review the guidance on:
  - [Asset Size](./asset-size)
  - [Coverage and Scope](./coverage)
- [Asset Description](./asset-description): Add information that can help your
  pentesters fully analyze your asset.
- [Asset Documentation](./asset-description/#asset-documentation): Upload documentation,
  architecture diagrams, images, spreadsheets, or videos related to your asset.

The UI provides the information that you need to add an Asset Image and Title.
Now take the next step and define your [Asset Type](./asset-type).

<!-- For content, see https://github.com/cobalthq/cobalt-product-public-docs/blob/main/layouts/shortcodes/invite-help.md -->
{{% invite-help %}}
