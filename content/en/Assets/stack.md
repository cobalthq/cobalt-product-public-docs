---
title: "Technology Stack"
linkTitle: "Technology Stack"
weight: 180
description: >
  Your pentesters need to know the technologies behind your asset.
aliases:
  - /getting-started/pentest-objectives/stack/
---

{{% pageinfo %}}
A technology stack could include languages like Java or Go. For networks,
it can include hardware components like routers and switches.
{{% /pageinfo %}}

You should specify the technology stack associated with your asset. The
technologies can vary by asset:

![Technology Stack](/gsg/TechnologyStack.png "Technology stack for your asset")

When you create or update a Web, Mobile, API, or combined [asset](/getting-started/assets/), you can [add a technology stack](/platform-deep-dive/assets/risk-advisories/#add-a-technology-stack-for-your-asset) for it. Technologies that you selected from a predefined list on the asset details page populate in the **Technology Stack** field in the pentest wizard.

- You can add more technologies for your pentest, in addition to those that you specified for your asset earlier.
- We don't show a predefined list of technologies in the **Technology Stack** list in the pentest wizard, as opposed to the asset details page. Type a technology, and press Enter to confirm.

### Web

When building a web application, you may use one or more coding languages.
List those languages in the text box.

In addition, dynamic web sites may pull information from databases. Include those
languages as well.

### Mobile

For some, mobile apps are an extension of web apps. If you have a dedicated mobile app,
your pentester needs to know the language used to develop that app.

You may have used one of the [Web](#web) app languages. You may have
also used one or more of the languages that designed for mobile apps. In either
case, add those languages to the list.

### API

An API, short for an Application Programming Interface, specifies how apps communicate
with each other. Most APIs are associated with one of the following technologies:

- RESTful APIs
- GraphQL
- Simple Object Access Protocol (SOAP)

The technology drives the commands used to access data. And API testing also depends on
the programming language used to set it up. In general, you may use one or more of the
same programming languages used to create [Web](#web) or [Mobile](#mobile) apps.

### Internal Network / External Network

The technologies associated with internal and external networks generally relate to hardware
components, including:

- Routers
- Switches
- Firewalls
- Load Balancers
- Proxy Servers

If you're looking for a test of an internal or an external network, it's also helpful to
include:

- A hardware diagram which depicts connections on your network

You can upload this information to your asset, as described in the section on
[Attachments](/getting-started/assets/asset-description/#attachments).

### Cloud Configuration

We can help users test their cloud configurations by service. In general, cloud
services correspond to what may be installed on internal servers. But you also need
to specify cloud components for the Technology Stack.

In this case, cloud configuration technology stacks correspond to the services that you
might buy from a cloud provider such as Google, Amazon, or Microsoft.
To help you list the right components, we provide this list of examples:

- APIs
- VPNs
- S3 Buckets
- Databases (SQL, RDMS)
- Remote Desktops
- Virtual Machines

Now that you've defined the technology stack, proceed to [pentest details](/getting-started/details/).
