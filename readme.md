# eslint-config-cosmo

> Eslint config for Cosmo CLI

If you have bootstrapped your project with `cosmo`, you are already using this config. If you would like to configure it, Add `.eslintrc.js` to your project root. `cosmo` will use that as eslint config instead of default config.

To use it in a non-cosmo project, Follow the steps bellow:

## Install

```bash
$ npm install --save-dev babel-eslint eslint eslint-config-airbnb-base eslint-config-prettier eslint-config-flow-type eslint-plugin-import eslint-plugin-prettier prettier
```

Or using `yarn`:

```bash
$ yarn add --dev babel-eslint eslint eslint-config-airbnb-base eslint-config-prettier eslint-config-flow-type eslint-plugin-import eslint-plugin-prettier prettier
```

## Usage

In your `.eslintrc.js`:

```js
module.exports = {
  extends: ["cosmo"]
};
```

It expects you to be using `prettier` and `flow` in your project.

## License

MIT © [Sid Doshi](https://sid.sh)
