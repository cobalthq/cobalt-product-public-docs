---
title: "Testing Environments"
linkTitle: "Testing Environments"
toc_hide: = true
weight: 0
---

The testing environment impacts the scope and methods used during a Cobalt test. Please specify the testing environments in the brief. 

This article outlines the key differences between testing in production, staging, and development environments.

### Production Environments:

Testing in a live production environment is highly restricted due to the potential for business disruption. The primary goal is to identify security vulnerabilities without impacting ongoing operations or exposing sensitive data.  

#### Key Restrictions:
- **Destructive Testing Prohibited:** This includes Denial of Service (DoS), resource exhaustion, integrity-based data manipulation (altering, deleting, modifying), and automated exploitation. While DoS and resource exhaustion testing are explicitly listed as out of scope for production environments, it is important to note that these techniques are always considered out of scope, regardless of the testing environment.
- **Non-Intrusive Assessments:** Testing is limited to non-invasive security assessments, including:
  - Authentication and authorization verification.
  - Configuration reviews.
  - Safe exploitation of confirmed vulnerabilities (with explicit prior approval).
- **Sensitive Data Protection:** If production environments contain sensitive data, such asPersonally Identifiable Information (PII) or Protected Health Information (PHI), stringent controls must be implemented to prevent unauthorized access or data exposure.

If we are testing in production environments, be sure to list out any restrictions within the pentest brief. 

### Staging Environments: 
Staging environments are designed to closely replicate production environments while maintaining isolation from live operations. This allows for more comprehensive testing without the risks associated with production testing.  

#### Testing Capabilities:
- **In-Depth Assessments:** Staging environments enable more detailed assessments, including:
  - Business logic exploitation
  - Session management validation
  - Controlled security testing of critical workflows
- **Anonymized Data:** Staging environments should utilize anonymized or synthetic test data whenever feasible to avoid potential exposure of real PII/PHI.

### Development Environments:
Development environments offer the broadest scope for testing, providing a safe space for comprehensive assessments.

#### Testing Scope: 
- **Unrestricted Testing:** Development environments should be configured to allow unrestricted security testing without affecting business operations, including: 
  - Automated vulnerability scanning
  - Fuzzing
  - Full exploit validation
- **No Live User Data:** Development environments should not contain live user data.

{{% pageinfo %}}
Before any testing begins, all testing limitations and safety constraints must be documented within the brief. This will ensure the engagement aligns with the business risk tolerance and operational requirements.
{{% /pageinfo %}} 

