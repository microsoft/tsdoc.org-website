---
layout: page
title: '@packageDocumentation'
navigation_source: docs_nav
---

| Standardization: | [Core]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Modifier]({% link pages/spec/tag_kinds.md %}) |


## Usage

Used to indicate a doc comment that describes an entire NPM package (as opposed to an individual API item belonging
to that package).  The `@packageDocumentation` comment is found in the *.d.ts file that acts as the entry point for
the package, and it should be the first `/**` comment encountered in that file.  A comment containing
a `@packageDocumentation` tag should never be used to describe an individual API item.
