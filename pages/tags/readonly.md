---
layout: page
title: '@readonly'
navigation_source: docs_nav
---

| Standardization: | [Extended]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Modifier]({% link pages/spec/tag_kinds.md %}) |


## Usage

This modifier tag indicates that an API item should be documented as being read-only, even if the TypeScript
type system may indicate otherwise.  For example, suppose a class property has a setter function that always
throws an exception explaining that the property cannot be assigned; in this situation, the `@readonly` modifier
can be added so that the property is shown as read-only in the documentation.
