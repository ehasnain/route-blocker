# route-blocker

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

## License

MIT © [Ehtesham Hasnain](https://github.com/ehasnain)
