---
layout: page
title: '@typeParam'
navigation_source: docs_nav
---

| Standardization: | [Core]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Block tag]({% link pages/spec/tag_kinds.md %}) |


## Usage

Used to document a generic parameter.  The `@typeParam` tag is followed by a parameter
name, followed by a hyphen, followed by a description.  The TSDoc parser recognizes
this syntax and will extract it into a DocParamBlock node.
