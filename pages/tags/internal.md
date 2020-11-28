---
layout: page
title: '@internal'
navigation_source: docs_nav
---

| Standardization: | [Discretionary]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Modifier]({% link pages/spec/tag_kinds.md %}) |


## Suggested meaning

Designates that an API item is not planned to be used by third-party developers.  The tooling may trim the
declaration from a public release. In some implementations, certain designated packages may be allowed to
consume  internal API items, e.g. because the packages are components of the same product.


## See also

- [@alpha]({% link pages/tags/alpha.md %}) tag
- [@beta]({% link pages/tags/beta.md %}) tag
- [@experimental]({% link pages/tags/experimental.md %}) tag
- [@public]({% link pages/tags/public.md %}) tag
