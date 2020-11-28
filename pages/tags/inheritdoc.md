---
layout: page
title: '@inheritDoc'
navigation_source: docs_nav
---

| Standardization: | [Extended]({% link pages/spec/standardization_groups.md %}) |
| Syntax kind: | [Inline tag]({% link pages/spec/tag_kinds.md %}) |


## Usage

This inline tag is used to automatically generate an API item's documentation by copying it from another
API item.  The inline tag parameter contains a reference to the other item, which may be an unrelated class,
or even an import from a separate NPM package.

### What gets copied

The `@inheritDoc` tag does not copy the entire comment body. Only the following components are copied:

- summary section
- `@remarks` block
- `@params` blocks
- `@typeParam` blocks
- `@returns` block

Other tags such as `@defaultValue` or `@example` are not copied, and need to be explicitly included after
the `@inheritDoc` tag.

> Note: The notation for API item references has not been finalized.  See GitHub
> [issue #9](https://github.com/microsoft/tsdoc/issues/9)
