This is the template file for changelogs. See the following
[Confluence page](https://zombie.atlassian.net/wiki/spaces/PRODUCT/pages/2040136662/Create+Changelog+Entries) for the detailed procedure.

TLDR, the following template includes _sample_ entries that you can modify/include
in the `content/en/Changelog/_index.md` file.

1. If you're including API changes, find the version
1. Create a new branch.
1. Insert new changes in the content/en/Changelog/_index.md file, just before the next oldest changelog entry.
1. Substitute existing changes in each category.
   1. If there are no changes in a category, remove it by deleting the title.
1. Create a PR and assign the **review** to a member of the [External Product Documentation]() team. If none are available, [...]

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

### Security

<!-- Security fix changelog entries require approval from our security team -->
