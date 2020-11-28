---
layout: page
title: '@override'
navigation_source: docs_nav
---

| Standardization: | [Extended]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Modifier]({% link pages/spec/tag_kinds.md %}) |


## Usage

This modifier has similar semantics to the `override` keyword in C# or Java.  For a member function or property,
explicitly indicates that this definition is overriding (i.e. redefining) the definition inherited from the
base class. The base class definition would normally be marked as `virtual`.

A documentation tool may enforce that the `@virtual`, `@override`, and/or `@sealed` modifiers are consistently
applied, but this is not required by the TSDoc standard.


## See also

- [@sealed]({% link pages/tags/sealed.md %}) tag
- [@virtual]({% link pages/tags/virtual.md %}) tag
