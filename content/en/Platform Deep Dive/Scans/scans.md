---
title: "Scans"
linkTitle: "Scans"
weight: 15
description: >
  A scan represents a test run against a specific target
---

## Statuses

A scan can have the following states:
- Canceled
- Canceling
- Completed
- Completed With Errors
- Failed
- Finishing Up
- Paused
- Pausing
- Queued
- Resuming
- Running
- Under Review

To start a scan, you can either **start** it immediately or **schedule** it for a later point in time. This can even be on a [recurring basis].

Initially, a scan will get **queued** while the scanner is waiting for resource allocation. Once the scan has the required resources, it will show up as **Running**.

A running scan can either be **paused** or **canceled**. Canceling a scan will finish all of its sub-processes and won't allow the scan to be spun up again. If you want to still have the option to **resume** a scan later on, use the pausing functionality. Once paused, a scan will stay in this state for up to 7 days, after which it will get canceled automatically. A paused scan can also be canceled directly, if needed.

Once the scan is finished, it will either move to a **completed** or **failed** state. A completed scan represents a successful test run. On the other hand, a failed scan signals that there's been a problem during the test execution. To find out exactly what went wrong, you can review the progress tracker on the scan's details page.

If some vulnerabilities need to be manually confirmed, the scan will show as **Under Review**. After this manual review, the scan changes to **Completed**.

## Components

A scan is subdivided into 3 components that partially overlap each other:
1. Fingerprinting: Identifies the technologies used on the target. Examples: React or Cloudflare.
2. Crawling: Goes through the target's URLs and interacts with every element found, clicking on buttons and filling in forms, among other things.
3. Scanning: Finds vulnerabilities within the target's URLs.

Each of these components reports its own progress in terms of either an absolute count (number of technologies found during fingerprinting) or percentages (percentage of URLs crawled or scanned).
If any issues arise as part of a component's activity, these will show up as warning or error messages below the corresponding progress bar.

### Progress bars

Each component will have its own progress bar to provide quick visual feedback.
Aside from the bars filling up as each component progresses, the color of the bar may change as well to reflect its state:
- Light gray: The specific component hasn't started yet or the whole scan is paused.
- Blue: The component has started and is making progress.
- Green: The component has successfully completed its duty.
- Red: The component failed. Whenever this occurs, details will show below the progress bar.
- Warning: The component didn't fail but there's potential for improvement, since it didn't run optimally. Details will show below the progress bar.
- Dark gray: The whole scan has been canceled.


<!-- links -->

[recurring basis]: /platform-deep-dive/scans/#scan-scheduling