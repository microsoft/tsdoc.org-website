"use strict";(self.webpackChunktsdoc_org=self.webpackChunktsdoc_org||[]).push([[9473],{158:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(6393);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=p,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:p,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(9122),p=n(2501),a=(n(6393),n(158)),i=["components"],s={title:"eslint-plugin-tsdoc"},o=void 0,c={unversionedId:"pages/packages/eslint-plugin-tsdoc",id:"pages/packages/eslint-plugin-tsdoc",title:"eslint-plugin-tsdoc",description:"NPM package",source:"@site/docs/pages/packages/eslint-plugin-tsdoc.md",sourceDirName:"pages/packages",slug:"/pages/packages/eslint-plugin-tsdoc",permalink:"/pages/packages/eslint-plugin-tsdoc",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/tsdoc.org/docs/pages/packages/eslint-plugin-tsdoc.md",tags:[],version:"current",frontMatter:{title:"eslint-plugin-tsdoc"},sidebar:"docsSidebar",previous:{title:"@microsoft/tsdoc-config",permalink:"/pages/packages/tsdoc-config"},next:{title:"TSDoc spec",permalink:"/pages/spec/overview"}},l={},u=[{value:"Usage",id:"usage",level:2}],m={toc:u},d="wrapper";function g(e){var t=e.components,n=(0,p.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-tsdoc"},"NPM package"),(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc/blob/main/eslint-plugin/CHANGELOG.md"},"CHANGELOG.md")),(0,a.kt)("p",null,"This ESLint plugin provides a rule for validating that TypeScript doc comments conform to the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc"},"TSDoc specification"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure ESLint for your TypeScript project. See the instructions provided by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint"},"typescript-eslint")," project.\nYou will end up with some dependencies like this:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"my-project/package.json")," (example)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "name": "my-project",\n  "version": "1.0.0",\n  "dependencies": {},\n  "devDependencies": {\n    "@typescript-eslint/eslint-plugin": "~2.6.1",\n    "@typescript-eslint/parser": "~2.6.1",\n    "eslint": "~6.6.0",\n    "typescript": "~3.7.2"\n  },\n  "scripts": {\n    "lint": "eslint -f unix \\"src/**/*.{ts,tsx}\\""\n  }\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("strong",{parentName:"p"},"eslint-plugin-tsdoc")," dependency to your project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd my-project\n$ npm install --save-dev eslint-plugin-tsdoc\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your ESLint config file, add the ",(0,a.kt)("inlineCode",{parentName:"p"},'"eslint-plugin-tsdoc"')," package to your ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," field,\nand enable the ",(0,a.kt)("inlineCode",{parentName:"p"},'"tsdoc/syntax"')," rule. For example:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"my-project/.eslintrc.js")," (example)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"module.exports = {\n  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc'],\n  extends: ['plugin:@typescript-eslint/recommended'],\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    project: './tsconfig.json',\n    tsconfigRootDir: __dirname,\n    ecmaVersion: 2018,\n    sourceType: 'module'\n  },\n  rules: {\n    'tsdoc/syntax': 'warn'\n  }\n};\n")))))}g.isMDXComponent=!0}}]);