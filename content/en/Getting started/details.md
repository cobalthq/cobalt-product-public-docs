---
title: "Specify Pentest Details"
linkTitle: "Specify Pentest Details"
weight: 200
description: >
  Describe key details of your pentest.
---

{{% pageinfo %}}
Some detail requirements vary by the type of asset.
{{% /pageinfo %}}

![Workflow for creating a pentest](/gsg/CreatePentestFlowStage5.png "Workflow for creating a pentest")
<br>

Now that you've defined the key [requirements](/getting-started/pentest-objectives/) for your pentest, add more details. Our pentests have common requirements
for all assets, as well as requirements for specific assets.

Pentest requirements for Web and API assets are identical. However,
tests of a Web asset include tests of APIs used to populate content on that asset.

![Pentest Details](/gsg/AddDetails.png "Define details for your desired pentest.")

The **Add Details** page of the pentest wizard requests information about:

- The target environment
- Cloud providers, if you need their authorization

## Common Pentest Requirements

Our pentests share the characteristics listed in this section:

### Network Information

Our pentesters send requests from one or more IP addresses on a Virtual
Private Network. Share this pentest with your network administrator. They may need
to know the IP addresses that we use:

{{% expand "List of IP addresses:" %}}

{{% traffic-ip-addresses %}}

{{% /expand %}}

### Environment

We need to know the environment of the pentest asset. The standard options are:

{{% environment %}}

If you define your environment differently, let us know. Add that information
in comments.

![Target Environment](/gsg/TargetEnvironment.png "Describe the environment that you want tested.")

[Learn the key differences in testing across production, staging, and development.](/getting-started/testing-environments)

### Controls

Tell us about how you've regulated access to your systems. For example, administrators may set up firewall rules that limit access to specified traffic to reduce the risk of Denial-of-Service attacks.

You could use systems like:

- Web-Application Firewalls (WAF)
- IP-based restrictions using allowlists/denylists, or services like `iptables`.

![Rate Controls](/gsg/RateControls.png "Describe the environment that you want tested.")

If you do have rate controls, include details. For example, you might include
details such as:

- Limit `ping` messages (ICMP) to 2/second

### Cloud Platform Components

If part of your asset resides in the cloud, you may not need a separate cloud asset
test. As described in this question, if your asset includes "systems" installed on 
a cloud, you can include the platform and system name in the text box.

![Cloud Platform Details](/gsg/CloudPlatformDetails.png "Does your asset include cloud components?")

In some cases, you may need to inform your Cloud provider about tests. For guidance,
see our page on [Cloud Configuration Review Methodologies](/methodologies/cloud-configuration-review/).

### Additional Guidelines

You may have already addressed these questions when setting up 
[Special Instructions](/getting-started/pentest-objectives/special-instructions/) when defining pentest requirements.

You're welcome to add more information here.

### Test Data

Our pentesters need to know about the environment that they're testing, as well as whether they can find production data on the test system.

Our pentesters also need information on test data. If your apps contain:

- Personally Identifiable Information (PII)
- Protected Health Information (PHI)
- Credit-card holder data (CHD)

Our pentesters take extra care to protect that information.

Some apps support the use of credit cards for purchases. If you provide
test credit card numbers, you can share that information in the 
[instructions](/getting-started/pentest-objectives/special-instructions/) or in the "Kickoff call."

{{% alert title="Note" color="primary" %}}
All Cobalt pentesters have signed a Non-Disclosure Agreement (NDA).
{{% /alert %}}

Now that you've filled in the details, you can start [planning and scoping](/getting-started/planning/) the actual pentest.
