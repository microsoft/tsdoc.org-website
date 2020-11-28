---
layout: page
title: '@remarks'
navigation_source: docs_nav
---

| Standardization: | [Core]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Block tag]({% link pages/spec/tag_kinds.md %}) |


## Usage

The main documentation for an API item is separated into a brief "summary" section,
optionally followed by a more detailed "remarks" section.  On a documentation web site,
index pages (e.g. showing members of a class) will show only the brief summaries,
whereas a detail pages (e.g. describing a single member) will show the summary followed
by the remarks.  The `@remarks` block tag ends the summary section, and begins the
remarks section for a doc comment.
