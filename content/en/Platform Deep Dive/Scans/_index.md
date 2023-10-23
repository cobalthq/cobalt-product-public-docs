---
title: "Scans"
linkTitle: "Scans"
weight: 50
description: >
  Scans (Beta) - Web Application Vulnerability Scanning
---

{{% pageinfo %}}
Scan your Web Applications to discover external vulnerabilities.
{{% /pageinfo %}}

The complexity of today's applications, combined with the constant evolution of cyber threats, makes it increasingly difficult to ensure security measures. Traditional methods of security assessment often fall short of providing continuous insights, leading to potential blind spots.

Scans address these challenges head-on. By combining the power of PtaaS with DAST, you gain a comprehensive solution for continuously assessing risk.

The beta period runs until December 31, 2023. During the beta, you have access to three scans a month, allowing you to fully explore this new feature. Anticipate usage and limitation adjustments in 2024.

## How to Use Scans

[Watch the how-to video here.](https://videos.cobalt.io/watch/4D8kQcTmPBE3HdWy6X3fHW)

1. To add a target, select the plus button

![Create Target](/deepdive/scans/1_CreateTarget.png "Create Target")<br>

2. Add a name for the target and the URL

![Add Target](/deepdive/scans/2_AddTarget.png "Add Target")<br>

3. To add authentication toggle on the “Authenticated Scan” option
    - Follow the Steps to add authentication details
      1. Login form URL
      2. Add fields (You will likely have one field for username and one for password)
          - Field Name
          - Field Value

![Authenticated Scan](/deepdive/scans/3_AuthenticatedScan.png "Authenticated Scan")<br>

4. To run a scan, select “Start Scan”

![Start Scan - Targets](/deepdive/scans/4_StartScanTargets.png "Start Scan - Targets")<br>

5. You have two options to View Results
    1. You can view the results on the target
    
    ![Target - Scan Results Sample Report](/deepdive/scans/5_TargetScanResultsSampleReport.png "Target - Scan Results Sample Report")<br>

    2. Or, navigate to scans and view results for individual scans by clicking on the Started Date.

    ![Scans Sample Findings Report](/deepdive/scans/6_ScansSampleFindingsReport.png "Scans Sample Findings Report")<br>

6. Generate Report
    1. From Targets, select the target you want to view a report for

    2. Select “View Report”

    ![View Report](/deepdive/scans/7_ViewReport.png "View Report")<br>

    You’ll then see a PDF report with the scan report findings.

    ![Report](/deepdive/scans/8_Report.png "Report")<br>

7. Move Finding State
    1. You can update the state for each finding
    2. Each finding has the following states:
        - **Pending Fix** (default): A vulnerability was found in a scan and has not been remediated
        - **Declined**: This is a false positive and not relevant to your application  (Each of these gets reviewed internally by Cobalt)
        - **Accepted Risk**: This is a known vulnerability but due to a mitigating control, the user accepts the risk.
        - **Re-test**: The user has remediated the vulnerability and is ready to retest the finding. Submitting a retest is the only way to mark a vulnerability as “fixed”.

8. Retest Finding
    1. You can retest individual findings.
    2. Navigate to the finding you want to retest and select “retest”

    ![Retest Finding](/deepdive/scans/9_Retest_Finding.png "Retest Finding")<br>

    3. If the scan engine does not find the vulnerability again it will automatically mark the finding as “Fixed”.  If the issue still persists, it will move back to its previous state.

## How to Contact Support

For support, please reach out to your CSM or email us at dast@cobalt.io.