import { RouteBlockAction, clearRouteBlocks, myRouteFunction, routeAction } from "./methods";
import express, { Application, Request, Response } from "express";
import { routeBlocker } from "../src";

const app: Application = express();

const BASE = "/api";

export const myRoute1 = "my-route-1";
export const myRoute2 = "my-route-2";
export const myRoute3 = "my-route-3";

app.get(`${BASE}/**/disable`, routeAction(RouteBlockAction.DISABLE));
app.get(`${BASE}/**/enable`, routeAction(RouteBlockAction.ENABLE));

app.use(`${BASE}/${myRoute1}`, routeBlocker.middleware(myRoute1));
app.get(`${BASE}/${myRoute1}`, myRouteFunction(myRoute1));

app.use(`${BASE}/${myRoute2}`, routeBlocker.middleware(myRoute2));
app.get(`${BASE}/${myRoute2}`, myRouteFunction(myRoute2));

app.use(`${BASE}/${myRoute3}`, routeBlocker.middleware(myRoute3));
app.get(`${BASE}/${myRoute3}`, myRouteFunction(myRoute3));

app.get(`${BASE}/clear-route-blocks`, clearRouteBlocks);

app.get("/", (req: Request, res: Response) => {
    res.send("Example Server is running");
});

export default app;
