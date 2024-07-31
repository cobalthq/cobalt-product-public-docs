---
title: "Scans"
linkTitle: "Scans"
weight: 50
description: >
  A scan represents a test run against a specific target
---

## Description

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

To start a scan, you can either **start** it immediately or **schedule** it for a later point in time. This can even be on a recurring basis.

Initially, a scan will get **queued** while the scanner is waiting for resource allocation. Once the scan has the required resources, it will show up as "Running".

A running scan can either be **paused** or **canceled**. Canceling a scan will finish all of its sub-processes and won't allow the scan to be spun up again. If you want to still have the option to **resume** a scan later on, use the pausing functionality. Once paused, a scan will stay in this state for up to 7 days, after which it will get canceled automatically. A paused scan can also be canceled directly, if needed.

Once the scan is finished, it will either move to a **completed** or **failed** state. A completed scan represents a successful test run. On the other hand, a failed scan signals that there's been a problem during the test execution. To find out exactly what went wrong, you can review the progress tracker on the scan's details page.