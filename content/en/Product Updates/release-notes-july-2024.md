---
title: "Release Notes: July 2024"
linkTitle: "July 2024"
weight: 45
description: >-
---

{{% pageinfo %}} 
Explore What's New from Cobalt This Month
{{% /pageinfo %}}

### July 2024


#### Attack Surface Updates

In response to customer feedback and to better align with the comprehensive capabilities of the feature, we are excited to announce that 'Domains' has now been revamped as 'Attack Surface.' This new name reflects the broader scope and enhanced functionality that this feature offers to our users.

As part of this update, we are introducing the all-new 'Attack Surface Insights' feature. We understand that managing multiple domains and hosts can be challenging for our customers, making it crucial to prioritize effectively. The new insights feature aims to simplify this process by providing high-level insights, enabling users to identify key focus areas and prioritize tasks seamlessly.

With intuitive charts and visual aids, customers can now gain a consolidated overview of the health status of their attack surface, empowering them to make informed decisions and optimize their security strategies. This update underscores our commitment to helping our users achieve a more robust and proactive security posture.

![Attack Surface Insights](/release-notes/Attack-Surface-Insights.png "Attack Surface Insights")


---

#### Ticketing Integrations Released for DAST Scans

Customers have expressed a strong desire to seamlessly integrate their DAST findings directly into their ticketing systems, a highly requested feature for DAST. In response to this feedback, we have enhanced our public API and Integration Builder to empower customers to:

- Retrieve their DAST targets data
- Access their DAST scans data
- Retrieve their DAST findings data

With these improvements, customers will now receive real-time notifications when a DAST finding is detected or resolved. Additionally, we have introduced recipe templates in the Integration Builder Library, allowing customers to effortlessly push their DAST findings to popular platforms such as Jira Cloud, GitHub Issues, and Azure DevOps Boards.

##### Steps to Integrate with Ticketing Systems

<iframe src="https://play.vidyard.com/kVCJ1gQ6ywr1t2G3K7Z46m" width="640" height="360" frameborder="0" allowfullscreen></iframe>

---

#### DAST Release: Extra Hosts

By introducing the “Extra Hosts” section to the target’s “Advanced Settings” page, customers now have the ability to include APIs residing on different hostnames as extra hosts. This enhancement ensures that the API will undergo scanning as part of the web target. The significance of this feature lies in providing customers with a more comprehensive view of their application's security. By scanning the API along with the web target, customers can identify and address vulnerabilities that may have gone undetected through isolated web target scans. 

This integrated approach enhances security measures and empowers customers to proactively address potential risks in their applications.

![DAST Extra Hosts](/release-notes/extra-hosts.png "DAST Extra Hosts")

---

#### Email Notifications for DAST Scans

We have implemented email notifications for the following key actions: successful scan completion, scan failure, target creation, and target deletion. These notifications will be sent to all organization owners and the Customer Success Manager (CSM). 

This enhancement ensures that important stakeholders are promptly informed about significant events related to their security scans, enabling them to stay informed and take timely action when necessary.

![DAST Email Notifications](/release-notes/email-target-created.png "DAST Email Notifications")

---

#### Secure Code Reviews

We are pleased to announce that Secure Code Reviews are now available on the Cobalt platform! This comprehensive offering includes several key features, which are outlined below:

- **Effortless Initiation:** Customers can start a Secure Code Review directly from the Engagements or Catalog tab in just a few clicks. No more Statement of Work is required, as customers can create a Secure Code Review Brief and submit it for review.

- **Coverage Checklist:** The Coverage Checklist provides customers with transparency into the specific areas and aspects that are evaluated during the Secure Code Review. Customers can track the progress of testers, mark items as complete, or identify items that are not applicable to the current engagement.

- **Findings:** Our highly experienced Cobalt Core pentesters specialize in diverse technology stacks and assess your codebase rigorously for vulnerabilities. Our Cybersecurity Services team oversees this comprehensive process, ensuring that potential threats are discovered and reported in real-time, allowing for quick remediation.

- **Reporting:** Upon completion of the engagement, customers receive a comprehensive Secure Code Review Report that includes an Executive Summary, Scope of Work, Methodology, Findings Summary and Risk Rating, Storyboard, and individual Findings and Remediation Guidance. You can view a sample report here.

This new offering is designed to enhance the security and integrity of your codebase. Customers can gain valuable insights into the thoroughness of the assessment, leverage the expertise of our testers, and receive detailed reporting to address potential risks and strengthen overall security measures.

![Secure Code Reviews ](/release-notes/SCR.png "Secure Code Reviews")

![Secure Code Reviews Brief ](/release-notes/SCR-Brief.png "Secure Code Reviews Brief")

