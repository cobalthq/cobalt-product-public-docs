---
title: "Automated Data Removal"
linkTitle: "Automated Data Removal"
weight: 20
aliases: /platform-deep-dive/collaboration/organization/manage-users/
description: >
  Process of automatically deleting data from the Cobalt Platform based on predefined rules and schedules.
---

{{% pageinfo %}}
When your organization's contract expires, the associated data will be removed after a predefined period of time. This period can be extended based on certain conditions.
{{% /pageinfo %}}

When your contract ends, a 30-day grace period begins during which you will still have access to the platform to export any necessary data. You will also receive a notification about this. If the contract is renewed, the grace period will be lifted.

<!-- ![Contract gate after grace period](/deepdive/ContractGateAfterGracePeriod.png "Contract gate after grace period") -->
{{% image src="/deepdive/ContractGateAfterGracePeriod.png" alt="scan statuses" class="mt0" %}}


After the grace period, access to the platform will be revoked. However, your data will remain in our system for an additional 90 days (termination period). 

<!-- ![Confirm to retain data](/deepdive/ConfirmToRetainData.png "Confirm to retain data") -->
{{% image src="/deepdive/ConfirmToRetainData.png" alt="scan statuses" class="mt0" %}}


You can extend this termination period by an additional 90 days if confirmed before the end of the initial period.

## Data Subject to Removal

The following data will be removed:

- User accounts (except those associated with additional organizations not affected by data removal)
- Organization's address, name, and logo
- Assets
- Pentests
- Jira integrations

## Notification Recipients

The following user roles will receive email notifications about data removal:

- Owners
- Customer Success Managers

## Notification Schedule

The following notifications will be sent:

- **Data removal reminders:** Sent 60, 30, 7, and 1 day(s) before the data removal date (90 days after contract termination). These emails will include a link to extend the removal period.
- **Data retention extension:** Sent if your retention period is extended.
- **Data removal confirmation:** Sent after your data has been removed.

## Extension Requests

Only organization owners can request a 90-day extension of the data retention period.

## Post-Removal Notifications

After the removal process is complete, the following user roles will receive notifications:

- Organization owners
- Assigned Customer Success Managers

If you wish to have your data removed earlier, please reach out to your Customer Success Manager (CSM).