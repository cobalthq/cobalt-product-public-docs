---
title: "Partial Scans: Reduced Scope"
linkTitle: "Partial Scans: Reduced Scope"
weight: 50
no_list: true
description: Define a specific set of URLs within your target to scan
---

Rather than scanning the entire target, specify a subset of URLs within your target to scan by defining a Reduced Scope in your target settings. This is particularly useful when you want to focus on specific areas of your application, such as new features or high-risk areas.

### Benefits

- **Faster Feedback:** Get faster feedback on the security of your code changes. This is especially helpful in CI/CD pipelines, where you need to deliver code changes quickly and reliably.
- **Reduced Scan Time:** Scanning a smaller subset of your target can significantly reduce the overall scan time.
- **Focused Scans:** Focus your scans on specific areas of your target that are most important or that have undergone recent changes.
- **Reduced Noise:** Reduce the number of vulnerabilities reported, making it easier to focus on the most critical issues.

### Using a Reduced Scope Partial Scan

1. Go to your target's settings.
2. In the Scanner tab, locate the **Reduced Scope** section.
3. Add the URLs you want to include in your partial scan.
   - Use wildcards (`*`) to include all sub-pages of a specific URL. For example, `https://www.example.com/blog/*` would include all pages within the blog section.
4. Add and enable as many URLs as you need to define the intended reduced scope.
   {{% image src="/deepdive/scans/partial-scans-configured.png" alt="Configured Reduced Scope" %}}
6. Save your changes.
7. Select **Scan Now** for the target to start a Partial Scan.
{{% image src="/deepdive/scans/partial-scans-modal.png" alt="Reduced Scope Scan Now" %}}
   - When starting a scan, you can temporarily enable or disable individual URLs within your Reduced Scope through the checkbox next to each URL.

### Other Considerations

- **Target Hostname and Extra Hosts**: Only the target's hostname and defined extra hosts are allowed in the reduced scope.
- **Inaccessible Endpoints**: If you want to test endpoints that are not accessible through your target's root, you will need to add them to the Seeds List module in your target settings.
- **Unreachable Sub-Scopes**: It is possible that some of the sub-scopes (URLs) defined in the reduced scope may not be found during the scan. This can happen if the URLs are no longer valid or if they are not accessible to the scanner.
- **Root URL Always Scanned**: The root of your target will always be visited by the crawler to find possible valid endpoints, even if it is not explicitly included in the reduced scope.
- **Full Scans Still Recommended**: While reduced scope scans are useful for targeted testing, it is still recommended to perform full scans on a regular basis to ensure the overall security of your application.

