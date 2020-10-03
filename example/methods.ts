import { Request, Response } from "express";
import { routeBlocker } from "../src";

export enum RouteBlockAction {
    DISABLE = "disable",
    ENABLE = "enable"
}

export function routeAction(action: RouteBlockAction) {
    return (req: Request, res: Response): void => {
        const route = extractRoute(req);
        const subRoute = extractSubRoute(route, action);
        applyRouteAction(subRoute, action);
        res.status(200);
        res.send(`Action ${action} ${subRoute} applied.`);
    };
}

function applyRouteAction(subRoute: string, action: RouteBlockAction): void {
    if (action === RouteBlockAction.ENABLE) {
        routeBlocker.enableRoute(subRoute);
    } else if (action === RouteBlockAction.DISABLE) {
        routeBlocker.disableRoute(subRoute);
    }
}

export const clearRouteBlocks = (req: Request, res: Response): void => {
    routeBlocker.clearBlockings();
    res.status(200);
    res.send(`All route blocks cleared!`);
};

export function myRouteFunction(myRoute: string) {
    return (req: Request, res: Response): void => {
        res.status(200);
        res.send(`Route: ${myRoute} responding. 😃`);
    };
}

function extractRoute(req: Request): string {
    const { originalUrl } = req;
    return originalUrl;
}

function extractSubRoute(route: string, action: RouteBlockAction): string {
    return route.substring(
        route.indexOf("/api") + 5,
        route.lastIndexOf(`/${action}`)
    );
}
