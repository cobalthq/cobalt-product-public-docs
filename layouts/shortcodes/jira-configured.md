Here's what to expect once you've enabled the integration for a pentest:

- The **Auto-Push** option is enabled for a pentest by default. When a new finding in the Pending Fix [state](/platform-deep-dive/pentests/findings/finding-states/) is reported, a new issue is automatically created in Jira. Learn more about [how auto-push works](/integrations/jira/push-findings/#how-auto-push-works).
- Pentest Team Members can push findings manually—if they're not already synchronized. Learn [how to push findings manually](/integrations/jira/push-findings/#push-findings-manually).
- Jira issue statuses are synchronized with Cobalt finding states according to your mapping settings.

You can manage Jira connections for specific pentests:

- View the connection status in **Integrations** > **Jira** > **Configuration**. Here, you can see the last synchronization time.
- Adjust the configuration for specific pentests if needed.