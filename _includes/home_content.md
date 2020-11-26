# What is TSDoc?

**TSDoc** is a proposal to standardize the doc comments used in [TypeScript](http://www.typescriptlang.org/) source files.  It enables different tools to extract content from comments without getting confused by each other's syntax.  The **TSDoc** notation looks pretty familiar:

```typescript
export class Statistics {
  /**
   * Returns the average of two numbers.
   *
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */
  public static getAverage(x: number, y: number): number {
    return (x + y) / 2.0;
  }
}
```

We are developing a library package [@microsoft/tsdoc](https://www.npmjs.com/package/@microsoft/tsdoc) that provides an open source reference implementation of a parser.  Using this library is an easy way to ensure that your tool is 100% compatible with the standard.

&#x1F44B; ***Give it a try!**  The <a target="_blank" href="https://microsoft.github.io/tsdoc/">TSDoc Playground</a> provides an interactive showcase of our parser!*


##  Why do we need TSDoc?

The doc comments in a given source file may need to be processed by multiple tools:

- [Visual Studio Code](https://code.visualstudio.com): an editor that supports syntax highlighting and interactive refactoring for TypeScript doc comments
- [TypeDoc](https://github.com/TypeStrong/typedoc): an API reference website generator that extracts its content from doc comments
- [DocFX](https://dotnet.github.io/docfx/):  an integrated pipeline that ingests API reference content for many different programming languages, but then applies its own Markdown renderer and custom tag parsing
- [API Extractor](https://aka.ms/extractor): a build tool that tracks TypeScript API review workflows and generates *.d.ts rollups for third-party SDKs

These are just examples.  Many other tools in today's web developer community want to interact with TypeScript doc comments.  Each tools accepts a syntax that is loosely based on [JSDoc](http://usejsdoc.org), but encounters frustrating incompatibilities when attempting to coexist with other parsers.

_**Why can't JSDoc be the standard?**_  Unfortunately the JSDoc grammar is not rigorously specified, but rather inferred from the behavior of a particular implementation.  The majority of the standard JSDoc tags are preoccupied with providing type annotations for plain JavaScript, which is an irrelevant concern for a strongly-typed language such as TypeScript.

**TSDoc** addresses these limitations while also tackling some more ambitious [design goals]({% link pages/intro/goals.md %}).


## Who's involved?

Implementation:
- [Pete Gonzalez](https://github.com/octogonz) original architect
- [Ron Buckton](https://github.com/rbuckton) redesigned the declaration reference syntax and has been working on a rewrite of the markdown parser
- [Ian Clanton-Thuon](https://github.com/iclanton/) contributed the TSDoc Playground
- [Brian Folts](https://github.com/bafolts) contributed `eslint-plugin-tsdoc` package for ESLint
- many other contributors who implemented features and bugfixes!

(Should your name appear here? [Suggest an update](https://github.com/microsoft/tsdoc-website/edit/master/_includes/home_content.md) to this page.)

Providing input for the design and spec:
- [TypeScript](http://www.typescriptlang.org) compiler group at Microsoft
- [API Extractor](https://aka.ms/extractor) community
- [DocFX](https://dotnet.github.io/docfx/) maintainers
- [TypeDoc](http://typedoc.org) community
- [SimplrJS](https://simplrjs.com/) developers, who maintain the [ts-docs-gen](https://github.com/SimplrJS/ts-docs-gen) tool
- [Tom Dale](https://github.com/tomdale), who's working on the documentation engine for [Ember.js](https://www.emberjs.com), [Glimmer.js](https://glimmerjs.com), and other projects
- [Rob Eisenberg](https://github.com/EisenbergEffect), who's working on the documentation engine for [Aurelia](http://aurelia.io/).


## Next steps

👉 [Learn more]({% link pages/intro/goals.md %}) -- about the design goals that characterize TSDoc

👉 [Get started]({% link pages/intro/using_tsdoc.md %}) -- how can I use it?
