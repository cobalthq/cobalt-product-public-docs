---
title: "What's in a Pentest Report"
linkTitle: "Contents of a Pentest Report"
weight: 310
description: >
  Here's what can you expect in a Pentest Report.
---

{{% pageinfo %}}
Our pentest reports include what you need to further secure your systems.
{{% /pageinfo %}}

We provide following types of pentest reports:

{{% pentest-report-types %}}

Our Full Report + Finding Details includes all of the following sections. If you've purchased an appropriate
{{% ptaas-tier %}}, you can customize what you see in all but the Attestation Letter.

The Attestation Letter is a one-page report that you can share with external stakeholders 
such as prospects or customers. You're welcome to download this [sample Attestation
Letter](/gsg/Sample_Web_Attestation_Letter.pdf) for a web app.

{{% alert title="Note" color="note" %}}
We do not leave out any finding details from the Full Report + Finding Details report.
{{% /alert %}}

## Target

We include the [Pentest Target](../../pentest-objectives/pentest-target/), the location of
your asset.

## Test Period

We include the dates when we tested your asset.

## Test Performed By

We include a list of pentesters who analyzed your asset. Each pentester name includes a link
to their Cobalt profiles.

## Executive Summary

Our executive summary includes:

- A high-level summary of the tests we performed
- A table with the number of [findings](../../glossary/#finding) that we identified, categorized by different [severity levels](../../../severitylevels/)
- Highlights of any significant findings

## Scope of Work

The scope shown in the following subsections varies depending on the type of [asset](../../glossary/#asset).

### Target Description

The report includes information on the asset that we tested, along with the
[environment](../../glossary/#environment) you specified when planning the pentest:

{{% environment %}} 

### In-Scope Testing Methodologies

In this section, we get into more specifics on the tests that we performed. In general,
we test to standards such as:

- [OWASP Top 10](https://owasp.org/Top10/)
- [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)

In this section we include a checklist of the tests that we performed on your assets. Depending
on your asset, it may also include manual and automated steps that we use with black box
and grammar-based fuzzing. For more information, see:

- [OWASP definition of Fuzzing](https://owasp.org/www-community/Fuzzing)
- [A brief introduction to fuzzing and why it's an important tool for developers](https://www.microsoft.com/en-us/research/blog/a-brief-introduction-to-fuzzing-and-why-its-an-important-tool-for-developers/)

### Test Cases that Thwarted Exploitation Attempts

This section lists the tests that did _not_ find vulnerabilities
while testing your asset.

## Methodology

We list the basic methodologies that we used before, during, and after our tests.

### Pre-Engagement

- Scoping
- Customer
- Documentation
- Information
- Discovery

### Penetration Testing

- Tool-assisted assessment
- Manual assessment
- Exploitation
- Risk Analysis
- Reporting

### Post Engagement

- Prioritized remediation
- Best practice support
- Re-testing

## Risk Factors

We use a modified version of the [OWASP Risk Rating Methodology](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology), based on their business impact and likelihood.
We measure each factor on a scale from 1 (very low) to 5 (very high).

## Severity Definitions

Based on [Risk Factors](#risk-factors), we assign a rating to each finding, using the
following equation:

```
risk = impact * likelihood
```

For more information, see our documentation on [Severity Levels](../../../severitylevels).

## Summary of Findings

When feasible, we include graphs that categorize vulnerabilities by:

- Type
- Severity

### Analysis

We include a short summary of each vulnerability. If you have a Full Report + Finding Details,
you can find more information about each vulnerability in the appendix on [Finding Details](#appendix-a---finding-details).

Where applicable, we also include a list of open ports and services.

### General Risk Profile

We include a color coded chart based on impact and likelihood of each vulnerability.
<!-- I'd include an example, but what I see doesn't present well in the build -->

## Recommendations

We include recommendations for what you can do to [mitigate](../../glossary/#mitigate)
and [remediate](../../glossary/#remediate) each finding.

## Post-Test Remediation

In this section, we include the type, severity, and state of each finding, as well as whether
the finding has been resolved.

## Terms

This section includes a disclaimer.

## Appendix A - Finding Details

In this section, we go into details for each vulnerability. Our descriptions include the following:

- Vulnerability Type
- Description 
- Affected URLs
- Proof of Concept of the vulnerability
- Severity
- Suggested Fix
