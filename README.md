# IA portfolio frontend

---

## [Deployed](https://ia-portfolio-app.vercel.app/)

## Installation

1. [`Node.js`](https://nodejs.org/) `LTS`
2. [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or
   [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [`git`](https://git-scm.com/)
4. Install all dependencies (see below)

```sh
cd ia-portfolio-frontend
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
-   styled-components
-   MUI
-   Axios
-   Redux Toolkit Query

## Configuration

Backend address is located in `./src/shared/constants.ts` as `SERVER_URL` htaccess config file is located in
`./public/.htaccess`
