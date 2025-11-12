---
title: "Integrate Microsoft Teams with Cobalt"
linkTitle: "Microsoft Teams"
weight: 25
description: >
    Receive updates in Microsoft Teams
---

{{% alert title="Note" color="primary" %}}
Microsoft Teams support is coming soon. This feature is not yet live for all users.
{{% /alert %}}

{{% pageinfo %}}
Learn how to set up an integration between Cobalt and Microsoft Teams. The availability of this feature depends on your [PtaaS tier](https://docs.cobalt.io/platform-deep-dive/credits/ptaas-tiers/).
{{% /pageinfo %}}


## Integration Overview
Integrate with Microsoft Teams to seamlessly collaborate with Cobalt pentesters and other pentest team members directly from Teams.

### How it Works
- Install the Cobalt Offensive Security app, from the Microsoft Teams app store, into your Teams environment
- In Teams, a channel manager adds the Cobalt Offensive Security app to a Teams channel, authenticates to Cobalt, and selects the specific pentest to connect to the channel
- Members of the Teams channel can use the Cobalt Offensive Security app to post or reply to messages, directly from Teams
- Pentest team members with a Cobalt account, as well as Cobalt’s pentesters and staff, can see, respond, or send new messages from Cobalt’s Pentest Chat, which are syndicated to the connected Teams channels
- Pentester Updates are sent to the channel(s) connected to that specific pentest

### Limitations
Please be aware of the following considerations when using this integration. We are working to improve the integration and address these limitations.
- Messages will not appear as threads in Teams or Cobalt Chat
- A Teams channel can only be connected to a single Cobalt pentest.
- Editing a Teams message does not retry the attempt to sync to the Cobalt platform.

## Integrate with Microsoft Teams
Connect your Microsoft Teams workspace to your Cobalt Organization in order to sync Cobalt pentests chat with Teams channels, allowing your team to collaborate on a test directly from your Teams instance. 

### Required Permissions

The Cobalt Offensive Security app requires specific Microsoft Graph API permissions to function properly. These are **not** configured in the Teams app manifest, but must be granted by your Teams administrator through the Azure portal:

Navigate to: **Azure Portal → App registrations → Cobalt Offensive Security → API permissions → Add a permission → Microsoft Graph → Application permissions**

Add the following **Microsoft Graph Application Permissions**:
- **ChannelMessage.Read.All** - Read all channel messages across the organization to enable bot message synchronization
- **Chat.Read.WhereInstalled** - Read chat messages only in conversations where the Cobalt Offensive Security app is installed (RSC permission)
- **Files.Read.All** - Read file metadata and properties for attachments shared in Teams conversations
- **Sites.Read.All** - Download file content from SharePoint sites when files are shared through Teams

After adding these permissions, an administrator must click **"Grant admin consent"** to activate them.

**Security Note**: The Cobalt Offensive Security app only accesses Teams channels where it is explicitly added. While `ChannelMessage.Read.All` and file permissions have organization-wide scope at the API level, the app's functionality is limited to channels where it's installed and only processes messages directed to the bot. `Chat.Read.WhereInstalled` uses Resource Specific Consent (RSC) to restrict access exclusively to chats where the app is present.

### Install Cobalt Teams Application in Your Teams Instance
As an administrator for your Microsoft Teams instance, you can add the Cobalt Offensive Security app to your environment by:
1. Go to Apps within your Microsoft Teams interface
2. Search "Cobalt Offensive Security"
3. Click “Add”

### Uninstall Teams Integration
To remove the Cobalt Offensive Security app from your Microsoft Teams instance: 
1. Navigate to the "Apps" section within Microsoft Teams, then "Manage your apps".
2. Find the Cobalt Offensive Security app; expand it to see where it's used. 
3. Click the trash can icon to remove from each channel as needed. 
Note: If you're a Teams Administrator, you can also remove apps from the Teams admin center.

Here’s what to expect once you’ve removed the Cobalt Offensive Security app:
- Data synchronization between Cobalt and Microsoft Teams stops.
- All channel connections for specific pentests are deleted. If you decide to reinstall the integration, you’ll need to set up the connection for each pentest.
- Any previously posted messages from Cobalt to your Teams channels will remain visible in Teams. 
- Posting new messages, or responding to previously posted pentest messages in Teams, will no longer be possible. 

## Connect Channels
Once you’ve installed the Cobalt Offensive Security app in your Microsoft Teams instance, you can connect a Teams channel to a pentest, so your teams and pentesters can seamlessly collaborate directly from the Teams channel or through the Cobalt platform. 

### Connect a Teams Channel to a Pentest
To communicate with the Cobalt pentest team through Microsoft Teams, you must connect a Teams channel to a specific Cobalt pentest. The person who sets up the Teams channel connection must have a Cobalt account which has access to the Cobalt pentest.

1. Go to the Teams channel which you wish to connect to a pentest, and add the "Cobalt Offensive Security" app
2. Type “@Cobalt Offensive Security connect”
3. In the bot response, which shows instructions to set up the connection, click “Login & Select Test”
4. Sign in to the Cobalt platform
5. Select the pentest you wish to connect to the Teams channel
6. Review the confirmation message from the Cobalt Offensive Security bot to verify the correct pentest has been connected to the channel. 
Note:  Only one pentest can be connected to a Teams channel.  

### Disconnect Teams Channel(s)
Once you’ve connected your Microsoft Teams instance, you can view all pentests connected to Teams channels.  

1. After logging in to Cobalt, go to Integrations > Microsoft Teams > Configuration. Here, you can see pentests for which you have connected Teams channels.
2. Click “Disconnect” beside the desired pentest to remove the Teams connection.
3. If disconnection was successful, in the Teams channel, a new post will confirm that the channel is no longer connected.

You may also disconnect directly from Teams, by going to the desired channel, and using the bot command “@Cobalt Offensive Security disconnect”. 

### Send a Message from Teams
Once a Teams channel has been connected to a Cobalt pentest, you can send messages to the pentest chat directly from Teams. 

1. In the Teams channel, click the "Cobalt Offensive Security" icon in the Compose Message box
2. Enter your message in the “Send Message” dialog box
3. Click “Send”

You can also use the bot command “@Cobalt Offensive Security chat” then type your message. 
Once sent, the message will appear in the Cobalt Chat for the associated pentest, and will be syndicated to your Teams channel for visibility to the other channel members. 

### Get Help within Teams
You can also use the bot command “@Cobalt Offensive Security help” to view a list of the available commands and what they are used for.

### Pentester Updates in Teams
If a Teams channel has been connected to a Cobalt pentest, during the course of the pentest, updates posted by pentesters will be sent as messages to the connected channel(s). 

## Support
If you have issues or need support, contact support@cobalt.io. 

## Frequently Asked Questions
**Q: Do all messages in my Teams channel get synced to the Cobalt pentest?**

A: No. Only messages or replies sent using the Cobalt Offensive Security bot will be synced to Cobalt.  Any other communication within the channel, using the standard Teams messaging features, will remain private to that channel, and are not visible to Cobalt. 


**Q: Do I need to provide pentesters and Cobalt staff with access to Microsoft Teams?**

A: No.  Pentesters and Cobalt staff can see and respond to messages posted via the Microsoft Teams integration using the Pentest Chat within the Cobalt platform. 


**Q: Do all members of my Teams channel need to have access to the Cobalt platform?**

A: No. You can invite anybody you wish from your organization to the Teams channel, even those without a Cobalt account.  All members of the channel will be able to post, respond and view communications from the associated pentest.  


**Q: Can Cobalt access data in my Microsoft Teams instance when I use this integration?**

A: No. Cobalt has no visibility or access to your Teams system, except for messages posted using the Cobalt Offensive Security bot.


**Q: Where do messages sent from Teams appear in the Cobalt platform?**

A: Messages are synchronized to the Cobalt Chat for the pentest or engagement that they are associated with.  


**Q: Who can see the messages sent using the integration?**

A: Messages sent to Cobalt from the Teams bot will be visible to Cobalt users who have been granted access to the associated pentest (including your Cobalt Staff members, Pentesters, and any team members that you have invited to the pentest in the Cobalt platform).  After you’ve connected a Teams channel to a pentest, messages posted using the Cobalt Offensive Security bot will be syndicated to the connected pentest’s InApp chat on the Cobalt platform, and vice versa. Users with access to the Teams channel will be able to see the messages originating from the Cobalt InApp chat on the connected pentest. 


**Q: How do I control who sees the Cobalt discussions in Teams?**

A: Anybody you add to a Teams channel that is connected to a Cobalt pentest will be able to see the discussion.  Cobalt has no visibility or control over the membership of your Teams channels.  As such, it is the customer’s responsibility to manage access in Teams. 


**Q: Can I subscribe to multiple Cobalt pentests from the same Teams channel?**

A: No, a Teams channel can only be connected to one Cobalt pentest.  To connect another pentest, you may remove the original connection, then connect the new test.  Otherwise, you must create a new channel. 


**Q: Can I discuss a specific Cobalt finding using the integration?**

A: Currently the integration supports Cobalt’s Pentest Chat only, not Finding chat.  You may reference a finding ID when sending a message, but the message will remain in the Pentest Chat, and will not be directly associated to the specific finding. 


**Q: Does the integration support threading?**

A: No, threaded messaging  is not currently supported, but will be in a future release. 


**Q: Does the integration support file attachments?**

A: No, attachments are not currently supported, but will be in a future release. 


**Q: Does the integration support reactions?**

A: No, emoji reactions are not currently supported, but will be in a future release.
