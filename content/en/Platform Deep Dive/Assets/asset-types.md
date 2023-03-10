---
title: "Asset Types"
linkTitle: "Asset Types"
weight: 20
description: >
  Learn about the asset types we support.
---

{{% pageinfo %}}
{{% asset-definition %}}
{{% /pageinfo %}}

We can perform pentests on assets in the following categories:

{{% asset-types-table %}}
| IoT | An IoT device. As [defined](https://csrc.nist.gov/glossary/term/iot_device) by NIST, an IoT device has at least one transducer (sensor or actuator) for interacting directly with the physical world and at least one network interface, such as Ethernet, Wi-Fi, or Bluetooth, for interfacing with the digital world.| Specialized |
| Physical | <!--Add description--> | Specialized |
| Thick Client App | An application installed locally on a user's computer. | Specialized |
| Wireless Network | A network that allows devices to stay connected without using wires of any kind. | Specialized |

For assets of multiple types, you may want to **set up one or more pentests**, depending on the characteristics of your software.

{{%expand "Learn more." %}}

For example, if your asset combines a web and mobile application, you may want us to test them together, in one pentest, if:

- The two applications share some of the same code and functionalities.
- One pentest report is sufficient for your purposes.
- One team is responsible for both applications.

Otherwise, you may need to set up two pentests to get more granular results.
{{% /expand%}}
