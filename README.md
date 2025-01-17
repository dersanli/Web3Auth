# Web3Auth

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![npm](https://img.shields.io/npm/dw/@web3auth/core)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/web3auth/web3auth/Build%20&%20Release)

Web3Auth is pluggable auth infrastructure for Web3 wallets and applications. It streamlines the onboarding of both mainstream and crypto native users under a minute by providing experiences that they're most comfortable with.

With support for all social logins, web & mobile native platforms, wallets and other key management methods, **Web3Auth results in a standard cryptographic key provider specific to the user and application.**

### Checkout the official [Web3Auth Documentation](https://docs.web3auth.io) and [API Reference](https://docs.web3auth.io/api-reference) to get started!

## Choosing Between SDKs

For using Web3Auth you have multiple choices to get started with. If you're just starting up and want to experience how it will look like within your
application, we recommend you to use our **Plug n Play SDK [`@web3auth/web3auth`](https://npmjs.com/package/@web3auth/web3auth)** which is a simple
and easy to use SDK that will give you a simple modular way of implementing Web3Auth directly within your application.

For more customised usage, we
have our **Custom Login UI Module [`@web3auth/core`](https://npmjs.com/package/@web3auth/core)**, which is the core module implementing the features
you need and giving you the flexibilty of using your own UI with the Web3Auth SDK working in the backend.

### Plug n Play SDK

### [`@web3auth/web3auth`](https://npmjs.com/package/@web3auth/web3auth)

This package provides main class for using default web3auth modal. It inherits `@web3auth/core` package. So you can still call all the
functions available in the `@web3auth/core` api reference. The package includes all of our packages and gives you a simple way of implementing
Web3Auth within your interface.

### Installation

#### npm

```shell
npm i --save @web3auth/web3auth
```

#### yarn

```shell
yarn add @web3auth/web3auth
```

#### Head on to the [Plug n Play API Reference](https://docs.web3auth.io/api-reference/web/plugnplay) to get started.

### Custom Login UI SDK

### [`@web3auth/core`](https://npmjs.com/package/@web3auth/core)

This package provides the core logic for handling adapters within web3auth. This package acts as a manager for all the adapters. You should use this
package to build your custom login UI on top of web3auth.

### Installation

#### npm

```shell
npm i --save @web3auth/core
```

#### yarn

```shell
yarn add @web3auth/core
```

#### Head on to the [Custom Login UI API Reference](https://docs.web3auth.io/api-reference/web/customloginui) to get started.

## Other packages included in our SDK

### [`@web3auth/base`](https://npmjs.com/package/@web3auth/base)

This package gives access to common types and interfaces for web3auth. It is included as a dependency in both our Custom UI and Plug n Play SDKs.

### [`@web3auth/ui`](https://npmjs.com/package/@web3auth/ui)

This package includes the default Web3Auth modal UI for modular access within the Plug n Play SDK. It is included as a dependency in our Plug n Play
SDK.

## Adapter packages

Adapter acts as a connector between the Web3Auth and underlying wallet provider. Every adapter follows a common interface which is required by
Web3Auth to communicate with the wallet.

To understand what they are and what they're for: Check out [Adapters](https://docs.web3auth.io/api-reference/web/adapters/)

Currently we have the following adapters available for utilisation:

- [`@web3auth/openlogin-adapter`](https://npmjs.com/package/@web3auth/openlogin-adapter)
- [`@web3auth/phantom-adapter`](https://npmjs.com/package/@web3auth/phantom-adapter)
- [`@web3auth/torus-evm-adapter`](https://npmjs.com/package/@web3auth/torus-evm-adapter)
- [`@web3auth/torus-solana-adapter`](https://npmjs.com/package/@web3auth/torus-solana-adapter)
- [`@web3auth/metamask-adapter`](https://npmjs.com/package/@web3auth/metamask-adapter)
- [`@web3auth/wallet-connect-v1-adapter`](https://npmjs.com/package/@web3auth/wallet-connect-v1-adapter)

## Provider packages

Each adapter in web3auth exposes a provider on successful user authentication. This provider can be use to interact with wallet or connected chain
using rpc calls. Currently web3auth supports providers for both EVM and Solana chains. For other chains, one can easily get the private key from the
web3auth SDK. You can learn more about providers [here](https://docs.web3auth.io/api-reference/web/providers/).

- [`@web3auth/ethereum-adapter`](https://www.npmjs.com/package/@web3auth/ethereum-provider)
- [`@web3auth/solana-adapter`](https://www.npmjs.com/package/@web3auth/solana-provider)

## Plugin packages

Each plugin in web3auth enhances the functionality of web3auth sdk by providing additional features.
Currently web3auth supports plugins for both EVM and Solana wallets.

- [`@web3auth/torus-wallet-connector-plugin`](https://www.npmjs.com/package/@web3auth/torus-wallet-connector-plugin)
- [`@web3auth/solana-wallet-connector-plugin`](https://www.npmjs.com/package/@web3auth/solana-wallet-connector-plugin)

## Bundling

This module is distributed in 4 formats

- `esm` build `dist/package.esm.js` in es6 format
- `commonjs` build `dist/package.cjs.js` in es5 format
- `umd` build `dist/package.umd.min.js` in es5 format without polyfilling corejs minified

By default, the appropriate format is used for your specified usecase
You can use a different format (if you know what you're doing) by referencing the correct file

The cjs build is not polyfilled with core-js.
It is upto the user to polyfill based on the browserlist they target

### Directly in Browser

CDN's serve the non-core-js polyfilled version by default. You can use a different

Please replace package and version with the appropriate package name

jsdeliver

```js
<script src="https://cdn.jsdelivr.net/npm/@web3auth/PACKAGE@VERSION"></script>
```

unpkg

```js
<script src="https://unpkg.com/@web3auth/PACKAGE@VERSION"></script>
```

| Packages                                   | `@latest` Version                                                                                                                                                                     | Size                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🏠 **Core**                                |
| `@web3auth/core`                           | [![npm version](https://img.shields.io/npm/v/@web3auth/core?label=%22%22)](https://www.npmjs.com/package/@web3auth/core/v/latest)                                                     | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/core?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/core@latest)                                                     | Provides the core logic for handling adapters within web3auth. This package acts as a manager for all the adapters. You should use this package to build your custom login UI on top of web3auth.                                                                                                            |
| `@web3auth/web3auth`                       | [![npm version](https://img.shields.io/npm/v/@web3auth/web3auth?label=%22%22)](https://www.npmjs.com/package/@web3auth/web3auth/v/latest)                                             | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/web3auth?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/web3auth@latest)                                             | Provides the main class for using default web3auth modal. It inherits `@web3auth/core` package. So you can still call all the functions available in the `@web3auth/core` api reference. The package includes all of our packages and gives you a simple way of implementing Web3Auth within your interface. |
| 🔌 **Adapters**                            |
| `@web3auth/coinbase-adapter`               | [![npm version](https://img.shields.io/npm/v/@web3auth/coinbase-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/coinbase-adapter/v/latest)                             | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/coinbase-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/coinbase-adapter@latest)                             | Adds coinbase login functionality                                                                                                                                                                                                                                                                            |
| `@web3auth/metamask-adapter`               | [![npm version](https://img.shields.io/npm/v/@web3auth/metamask-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/metamask-adapter/v/latest)                             | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/metamask-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/metamask-adapter@latest)                             | Adds metamask chrome extension login functionality                                                                                                                                                                                                                                                           |
| `@web3auth/openlogin-adapter`              | [![npm version](https://img.shields.io/npm/v/@web3auth/openlogin-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/openlogin-adapter/v/latest)                           | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/openlogin-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/openlogin-adapter@latest)                           | Adds social logins with MFA functionality                                                                                                                                                                                                                                                                    |
| `@web3auth/phantom-adapter`                | [![npm version](https://img.shields.io/npm/v/@web3auth/phantom-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/phantom-adapter/v/latest)                               | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/phantom-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/phantom-adapter@latest)                               | Adds phantom chrome extension login functionality                                                                                                                                                                                                                                                            |
| `@web3auth/torus-evm-adapter`              | [![npm version](https://img.shields.io/npm/v/@web3auth/torus-evm-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/torus-evm-adapter/v/latest)                           | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/torus-evm-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/torus-evm-adapter@latest)                           | Adds Torus Wallet login functionality (https://app.tor.us)                                                                                                                                                                                                                                                   |
| `@web3auth/torus-solana-adapter`           | [![npm version](https://img.shields.io/npm/v/@web3auth/torus-solana-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/torus-solana-adapter/v/latest)                     | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/torus-solana-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/torus-solana-adapter@latest)                     | Adds Solana Torus Wallet login functionality (https://solana.tor.us)                                                                                                                                                                                                                                         |
| `@web3auth/wallet-connect-v1-adapter`      | [![npm version](https://img.shields.io/npm/v/@web3auth/wallet-connect-v1-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/wallet-connect-v1-adapter/v/latest)           | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/wallet-connect-v1-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/wallet-connect-v1-adapter@latest)           | Adds wallet connect v1 login functionality + all supported adapters (eg: Metamask mobile, rainbow etc.)                                                                                                                                                                                                      |
| 🐉 **Providers**                           |
| `@web3auth/base-provider`                  | [![npm version](https://img.shields.io/npm/v/@web3auth/base-provider?label=%22%22)](https://www.npmjs.com/package/@web3auth/base-provider/v/latest)                                   | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/base-provider?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/base-provider@latest)                                   | Base implementation of JRPC provider                                                                                                                                                                                                                                                                         |
| `@web3auth/ethereum-provider`              | [![npm version](https://img.shields.io/npm/v/@web3auth/ethereum-provider?label=%22%22)](https://www.npmjs.com/package/@web3auth/ethereum-provider/v/latest)                           | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/ethereum-provider?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/ethereum-provider@latest)                           | EIP-1193 compatible JRPC provider                                                                                                                                                                                                                                                                            |
| `@web3auth/solana-provider`                | [![npm version](https://img.shields.io/npm/v/@web3auth/solana-provider?label=%22%22)](https://www.npmjs.com/package/@web3auth/solana-provider/v/latest)                               | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/solana-provider?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/solana-provider@latest)                               | Solana chain compatible JRPC provider                                                                                                                                                                                                                                                                        |
| 🐉 **Plugins**                             |
| `@web3auth/base-plugin`                    | [![npm version](https://img.shields.io/npm/v/@web3auth/base-plugin?label=%22%22)](https://www.npmjs.com/package/@web3auth/base-plugin/v/latest)                                       | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/base-plugin?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/base-plugin@latest)                                       | Base implementation of plugin                                                                                                                                                                                                                                                                                |
| `@web3auth/torus-wallet-connector-plugin`  | [![npm version](https://img.shields.io/npm/v/@web3auth/torus-wallet-connector-plugin?label=%22%22)](https://www.npmjs.com/package/@web3auth/torus-wallet-connector-plugin/v/latest)   | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/torus-wallet-connector-plugin?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/torus-wallet-connector-plugin@latest)   | Allows to inject your web3auth scoped private key into torus wallet UI (https://app.tor.us)                                                                                                                                                                                                                  |
| `@web3auth/solana-wallet-connector-plugin` | [![npm version](https://img.shields.io/npm/v/@web3auth/solana-wallet-connector-plugin?label=%22%22)](https://www.npmjs.com/package/@web3auth/solana-wallet-connector-plugin/v/latest) | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/solana-wallet-connector-plugin?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/solana-wallet-connector-plugin@latest) | Allows to inject your web3auth scoped private key into torus solana wallet UI (https://solana.tor.us)                                                                                                                                                                                                        |
| 🐉 **Low-Level**                           |
| `@web3auth/base`                           | [![npm version](https://img.shields.io/npm/v/@web3auth/base?label=%22%22)](https://www.npmjs.com/package/@web3auth/base/v/latest)                                                     | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/base?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/base@latest)                                                     | Base reusable functionalities for creating a web3auth instance                                                                                                                                                                                                                                               |
| `@web3auth/ui`                             | [![npm version](https://img.shields.io/npm/v/@web3auth/ui?label=%22%22)](https://www.npmjs.com/package/@web3auth/ui/v/latest)                                                         | [![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/ui?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/ui@latest)                                                         | Provides the UI used for creating the modal                                                                                                                                                                                                                                                                  |

## Examples

Please refer to examples

- [vue](examples/vue-app)
- [react](examples/react-app)
- [nextjs](examples/next-app)
- [angular](examples/angular-app)
- [html](examples/getting-started)

Hosted Example for testing

- [Full fledged example](https://demo-app.web3auth.io)

## Requirements

- All packages require a peer dependency of `@babel/runtime`
- Node 12+
