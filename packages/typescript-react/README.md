# ESlint react typescript

ESlint react typescript based configurations

## Install

**With [install-peerdeps](https://github.com/nathanhleung/install-peerdeps)**:

```sh
npx install-peerdeps --dev @ivyhjk/eslint-config-typescript-react
```

**The classic way**:

peer dependencies:

```sh
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import-length eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-promise eslint-plugin-standard eslint-plugin-node eslint-config-standard eslint-config-semistandard eslint-config-react-app babel-eslint eslint-plugin-flowtype eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @ivyhjk/eslint-config-typescript
```

```sh
npm install --save-dev @ivyhjk/eslint-config-typescript-react
```

## usage

extends this package into your [ESLint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files),
using [ESLint shareable configs](https://eslint.org/docs/developer-guide/shareable-configs)

```json
{
  "extends": "@ivyhjk"
}
```
