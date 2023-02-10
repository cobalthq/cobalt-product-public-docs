---
title: "Organization"
linkTitle: "Organization"
weight: 10
description: >
  Collaborate on pentests with team members from your organization.
---

{{% pageinfo %}}
Organization Owners can [manage users](/platform-deep-dive/collaboration/organization/manage-users/) and [adjust settings](/platform-deep-dive/collaboration/organization/organization-settings/) for their organization.
{{% /pageinfo %}}

When you receive an email invitation from Cobalt, you join a specific organization with a role assigned to you. Within an organization, you and your team get access to the Cobalt platform and the pentest experience.

You can view the organization you belong to in the Cobalt app. If you joined multiple organizations, you can switch between them.

![View your organizations in the Cobalt app](/deepdive/OrganizationsList.png "View your organizations in the Cobalt app")

{{< alert title="Note" color="primary" >}}
Your user role determines your set of privileges within an organization or [pentest](/platform-deep-dive/pentests/). Learn more about [user roles and permissions](/platform-deep-dive/collaboration/organization/user-roles/).
{{< /alert >}}

## Download Your Organization's Pentest Data

To export pentest data for your organization, you can:

- Use the Cobalt API. Read our [API documentation](https://docs.cobalt.io/v2/) for details. You can send API requests to retrieve pentest data, such as:
  - [All pentests](https://docs.cobalt.io/v2/#get-all-pentests)
  - [All findings](https://docs.cobalt.io/v2/#get-all-findings)
  - [A pentest report](https://docs.cobalt.io/v2/#get-a-pentest-report)
- Manually download [findings](/platform-deep-dive/pentests/findings/) and [reports](/platform-deep-dive/pentests/reports/) for each pentest in the Cobalt app. Select the <i style="font-size:x-large; color: #0047AB" class="fas fa-chevron-right"></i> key for instructions.
   {{%expand "To download all findings for a pentest:" %}}
   1. On the pentest page, navigate to the **Findings** tab.
   1. To clear all filters, select **Clear all**.
   1. Select **Download CSV**.<br><br>
   ![Download all findings for a pentest](/deepdive/DownloadFindings.png "Download all findings for a pentest")
   {{% /expand%}}

   {{%expand "To download a report as a PDF file:" %}}
   {{% download-report-steps %}}<br><br>
   ![Download reports for a Comprehensive Pentest](/deepdive/DownloadReport.png "Download reports for a Comprehensive Pentest")
   {{% /expand%}}
