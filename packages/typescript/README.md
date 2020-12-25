# ESlint typescript

ESlint typescript configurations

## Install

**With [install-peerdeps](https://github.com/nathanhleung/install-peerdeps)**:

```sh
npx install-peerdeps --dev @ivyhjk/eslint-config-typescript
```

**The classic way**:

peer dependencies:

```sh
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import-length eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-promise eslint-plugin-standard eslint-plugin-node eslint-config-standard eslint-config-semistandard
```

```sh
npm install --save-dev @ivyhjk/eslint-config-typescript
```

## usage

extends this package into your [ESLint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files),
using [ESLint shareable configs](https://eslint.org/docs/developer-guide/shareable-configs)

```json
{
  "extends": "@ivyhjk"
}
```
