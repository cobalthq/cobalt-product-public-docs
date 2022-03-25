
---
title: "Changelog"
linkTitle: "Changelog"
weight: 30
menu:
  main:
    weight: 30
---

{{% pageinfo %}}
This page includes notable external changes to Cobalt software.

The format is based on guidance from [Keep a Changelog](http://keepachangelog.com/).

This changelog includes two types of versioning:

- Product: [Calendar Versioning](https://calver.org)
- API: [Semantic Versioning](http://semver.org/)
{{% /pageinfo %}}

## 2022-12-25: [API Version major.minor.patch]

### Added

- Some icon tooltip to the \<name the menu> menu.
- Another tooltip defining \<something important>.
- Option to copy a pentest in Pentests screen.
- API: `new_field` to /some endpoint.

### Changed

- Renamed "Push a \<something>" to "Create a <something>" in Pentests screen.
- API: Increased output from /some endpoint to 20 assets/page.

### Deprecated

- Integration with \<something>.
- API: Output from the /important endpoint will change from `old_thing` to `new_thing`.

### Removed

- Integration with \<something else>. Replaced with \<something new>.
- API: Output from the /important endpoint no longer includes `old_thing`. Replaced with `new_thing`.

### Fixed

- Corrected grammar errors on \<name> screen.
- API: The /important endpoint returns real time data again.

