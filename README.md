# [route-blocker](https://www.npmjs.com/package/route-blocker) &middot; [![GitHub license](https://img.shields.io/github/license/ehasnain/route-blocker)](https://github.com/ehasnain/route-blocker/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/route-blocker)](https://www.npmjs.com/package/route-blocker) [![Test and Build Status](https://github.com/ehasnain/route-blocker/workflows/test%20and%20build/badge.svg)](https://github.com/ehasnain/route-blocker/actions?query=workflow%3A%22test+and+build%22+branch%3Amaster) [![Issues](https://img.shields.io/github/issues/ehasnain/route-blocker)](https://github.com/ehasnain/route-blocker/issues) ![Downloads](https://img.shields.io/npm/dw/route-blocker)

A middleware for expressjs to block or unblock a route

## Install

Using npm

```sh
npm install route-blocker
```

Using yarn

```sh
yarn add route-blocker
```

## Usage

In server.ts (or the file where app and routes are defined)

```ts
import { routeBlocker } from "route-blocker";

const BASE_ROUTE = "api/some-base-route";
export const subRouteToBlock = "some-sub-route";
const myRoute = `${BASE_ROUTE}/${subRouteToBlock}`;

app.use(myRoute, routeBlocker.middleware(subRouteToBlock));
app.get(myRoute, myRouteFunction);
```

In the file where the route blocking should be enabled/disabled

```ts
import { routeBlocker } from "route-blocker";
import { subRouteToBlock } from "src/server.ts";

routeBlocker.disableRoute(subRouteToBlock); // disable route

// do something

routeBlocker.enableRoute(subRouteToBlock); // enable route

```

To remove all route blockings

```ts
routeBlocker.clearBlockings();
````

## Note

See the [source](https://github.com/ehasnain/route-blocker) for more details

<p align="center">
    <a><img src="https://img.shields.io/bundlephobia/min/route-blocker" alt="package bundle size"></a>
    <a href="https://www.npmjs.com/package/express">
        <img src="https://img.shields.io/npm/dependency-version/route-blocker/peer/express" alt="express"></a>
    <a href="https://github.com/ehasnain/route-blocker/releases">
        <img src="https://img.shields.io/github/release-date/ehasnain/route-blocker" alt="release"></a>
    <a href="https://github.com/ehasnain/route-blocker/pulls?q=is%3Aopen+is%3Apr">
        <img src="https://img.shields.io/github/issues-pr/ehasnain/route-blocker" alt="pull request"></a>
</p>


## License

route-blocker is [MIT](https://github.com/ehasnain/route-blocker/blob/master/LICENSE) licensed.
