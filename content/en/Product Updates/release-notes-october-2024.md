---
title: "Release Notes: October 2024"
linkTitle: "October 2024"
weight: 42
description: >-
---

{{% pageinfo %}} 
Explore What's New from Cobalt This Month
{{% /pageinfo %}}


## DAST Improvements

### Expanded DAST Public API Capabilities

Despite existing read-only endpoints in our public API, customers lacked the functionality to sync Cobalt DAST data with external DevSecOps tools such as ticketing, reporting, and Ci/CD platforms.

We’ve now enhanced our public API to enable users to:

- Trigger scans
- Create recurring scheduled scans
- Retest DAST findings
- Modify DAST finding states


### Scan Profiles

We've implemented the option for users to select their preferred scan profile to customize scan behavior according to their specific requirements. Users can choose from a selection of 8 different profiles for immediate and scheduled scans, with more to be added if needed. Notably, scan profiles are target-specific, with different profiles available for API and web targets.

{{% pageinfo color="blue" %}}
For more information, have a look at our [Scan Profiles documentation.](https://docs.cobalt.io/platform-deep-dive/scans/#scan-profiles)
{{% /pageinfo %}}

![Scan Profiles](/release-notes/scan-profiles.png "Scan Profiles")

