---
title: "Digital Risk Assessment Methodology"
linkTitle: "Digital Risk Assessment Methodology"
weight: 290
description: >
  Review Cobalt methodology for a Digital Risk Assessment.
---

Cobalt will use publicly available information and commonly used OSINT methodologies and tooling (such as those documented at https://osintframework.com) to assess an organization from an external, adversarial perspective. Cobalt will employ a passive approach to OSINT reconnaissance, relying on third-party and publicly accessible sources and avoiding any direct, active interaction with the target organization's systems, applications, or personnel.
<!-- MODIFIED: original first paragraph kept verbatim; appended a clause defining what "passive" means (no direct/active interaction) to remove ambiguity about scope. -->

<!-- ADDED: methodology-alignment paragraph. Anchors the approach to recognized standards, which strengthens credibility and defensibility of the deliverable. Remove or trim if you prefer to keep the doc tool-agnostic. -->
Cobalt's approach aligns with recognized industry methodologies for intelligence gathering and external assessment, including the Intelligence Gathering phase of the Penetration Testing Execution Standard (PTES), the discovery activities described in NIST SP 800-115, and the Reconnaissance tactic (TA0043) of the MITRE ATT&CK framework. Collection is conducted in a structured, repeatable manner consistent with the intelligence cycle: direction, collection, processing, analysis, and dissemination.

<!-- ADDED: scope and authorization note. OSINT engagements should state the authorization basis and reaffirm the passive boundary; both PTES and OSSTMM treat rules of engagement as a required first step. -->
All activities are limited to the assets and scope defined in the engagement brief and authorized in writing by the client. During a passive Digital Risk Assessment, Cobalt does not interact directly with in-scope systems, attempt authentication, or engage target personnel.

Activities conducted within a Digital Risk Assessment are noted within the brief:

<!-- REORGANIZED: the original flat list is preserved in full below, regrouped into categories for readability. -->

#### Organization and infrastructure footprint

- Company research
- Domain and host enumeration
- Subdomain and DNS discovery, including certificate transparency logs <!-- ADDED -->
- Attempts to identify code used for internal applications
- Identification of exposed cloud storage or misconfigured public-facing services <!-- ADDED -->
- Identification of lookalike or typosquatting domains <!-- ADDED: supports the existing "Online brand protection" objective. -->

#### Personnel and identity exposure

- Email, name, phone, and username harvesting
- Identification of employee badges on social media sites

#### Exposed and leaked data

- Advanced Search Engine Operators ("dorks")
- Password dumps
- Leaked credentials, keys, or secrets in public code repositories <!-- ADDED -->
- Attempts to identify sensitive or proprietary indexed files
- Metadata extracted from publicly published documents <!-- ADDED -->

#### Physical and brand exposure

- Building layouts
- Online brand protection

<!-- ADDED: data-handling note. Passive OSINT routinely collects personal and third-party data, so the methodology should state how that data is handled.  -->
#### Data handling

Information collected during the assessment may include personal or third-party data. Such information is collected, stored, and reported in accordance with Cobalt's data-handling obligations and applicable privacy regulations, and findings are shared only with authorized client recipients.
