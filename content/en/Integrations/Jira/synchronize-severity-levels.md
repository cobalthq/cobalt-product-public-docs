---
title: "Synchronize Cobalt Severity Levels with Jira"
linkTitle: "Synchronize Severity Levels"
weight: 40
description: >
  Learn how to push severity levels to Jira.
---

{{% pageinfo %}}
You can synchronize findings' [severity levels](/platform-deep-dive/pentests/findings/severity-levels/) with Jira using the **Cobalt Severity** field.
{{% /pageinfo %}}

**Cobalt Severity** is a field built by Cobalt. Avoid using custom fields such as "Severity."

To add the **Cobalt Severity** field to your Jira project:

1. In your Jira software project, select the gear icon in the upper-right corner, and then select **Projects**.
1. Select the three-dot icon next to the project you want to edit, and then select **Project Settings**.
1. On the left panel, select **Issue Types**.
1. For the desired issue type, drag the **Cobalt Severity** field from the panel on the right to the **Context fields** section.<br><br>
    ![Add the Cobalt Severity field to an issue type in Jira](/integrations/cobalt-severity-level.png "Add the Cobalt Severity field to an issue type in Jira")
1. Select **Save changes**.

When findings are pushed to Jira, the Cobalt severity level should appear in the **Cobalt Severity** field in Jira issues.
