# IA portfolio frontend

---

## [Available production](http://ilyaalenichev.ru/)

## Installation

1. [`Node.js`](https://nodejs.org/) `LTS`
2. [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or
   [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [`git`](https://git-scm.com/)
4. Install all dependencies (see below)

```sh
cd IA-portfolio-frontend
yarn install
# or
npm install
```

## Mode development

`yarn start`

## Mode production

`yarn add -g serve` `yarn run build` `serve -s build`

## Stack

-   Typescript
-   React
-   react-router-dom
-   react-helmet
-   react-markdown
-   react-simplemde-editor
-   Axios
-   Redux Toolkit Query
-   SASS
-   MUI

## Configuration

Backend address is located in `./src/shared/config.ts` as `address` htaccess config file is located in
`./public/.htaccess`
