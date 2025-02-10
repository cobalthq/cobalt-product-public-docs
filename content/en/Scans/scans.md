---
title: "Scans"
linkTitle: "Scans"
weight: 15
description: >
  A scan represents a test run against a specific target
---
<style>
  .image-box.borderless-image {
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin: 0 0 20px 0;
  }
  .width400 {
    width: 400px;
  }
  .ml25 {
    margin-left: 25px !important;
  }
  .mx0 {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .mt0 {
    margin-top: 0px !important;
  }
  .mb0 {
    margin-bottom: 0px !important;
  }
</style>

## Statuses

A scan can have the following states:

{{% image src="/scans/scans/ScanStatuses.png" alt="scan statuses" class="mt0" %}}

To start a scan, you can either **start** it immediately or **schedule** it for a later point in time. This can even be on a [recurring basis].

{{% image src="/scans/scans/StartScan.png" alt="start scan button" class="borderless-image mb0" %}}

Initially, a scan will get **queued** while the scanner is waiting for resource allocation. Once the scan has the required resources, it will show up as **Running**.

{{% image src="/scans/scans/PauseScan.png" alt="pause scan button" class="borderless-image mb0" %}}

A running scan can either be **paused** or **canceled**. Canceling a scan will finish all of its sub-processes and won't allow the scan to be restarted again.

{{% image src="/scans/scans/ResumeScan.png" alt="resume scan button" class="borderless-image mb0" %}}

If you want to still have the option to **resume** a scan later on, use the pausing functionality. Once paused, a scan will stay in this state for up to 7 days, after which it will get canceled automatically. A paused scan can also be canceled directly, if needed.

Once the scan is finished, it will either move to a **completed** or **failed** state. A completed scan represents a successful test run. On the other hand, a failed scan signals that there's been a problem during the test execution. To find out exactly what went wrong, you can review the progress tracker on the scan's details page.

If some vulnerabilities need to be manually confirmed, the scan will show as **Under Review**. After this manual review, the scan changes to **Completed**.

## Components

{{% image src="/scans/scans/PausedComponents.png" alt="paused scan components" class="mx0 mt0" %}}

A scan is subdivided into 3 components that partially overlap each other:
1. Fingerprinting: Identifies the technologies used on the target. Examples: React or Cloudflare.
2. Crawling: Goes through the target's URLs and interacts with every element found, clicking on buttons and filling in forms, among other things.
3. Scanning: Finds vulnerabilities within the target's URLs.

Each of these components reports its own progress in terms of either an absolute count (number of technologies found during fingerprinting) or percentages (percentage of URLs crawled or scanned).
If any issues arise as part of a component's activity, these will show up as warning or error messages below the corresponding progress bar.

### Progress bars

Each component will have its own progress bar to provide quick visual feedback.
Aside from the bars filling up as each component progresses, the color of the bar may change as well to reflect its state:

{{% image src="/scans/scans/LightGreyProgressBar.png" alt="light grey progress bar" class="borderless-image width400 ml25" %}}

- Light grey: The specific component hasn't started yet or the whole scan is paused.

{{% image src="/scans/scans/BlueProgressBar.png" alt="blue progress bar" class="borderless-image width400 ml25" %}}

- Blue: The component has started and is making progress.

{{% image src="/scans/scans/GreenProgressBar.png" alt="green progress bar" class="borderless-image width400 ml25" %}}

- Green: The component has successfully completed its duty.

{{% image src="/scans/scans/RedProgressBar.png" alt="red progress bar" class="borderless-image width400 ml25" %}}

- Red: The component failed. Whenever this occurs, details will show below the progress bar.

{{% image src="/scans/scans/YellowProgressBar.png" alt="yellow progress bar" class="borderless-image width400 ml25" %}}

- Yellow: The component didn't fail but there's potential for improvement, since it didn't run optimally. Details will show below the progress bar.

{{% image src="/scans/scans/DarkGreyProgressBar.png" alt="dark grey progress bar" class="borderless-image width400 ml25" %}}

- Dark grey: The whole scan has been canceled.


<!-- links -->

[recurring basis]: /platform-deep-dive/scans/#scan-scheduling
