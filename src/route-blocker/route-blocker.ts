import {
    NextFunction,
    Request,
    Response,
} from "express";
import { RoutesBlockingMap } from ".";

export class RouteBlocker {
    private static instance: RouteBlocker;
    private routesBlockingMap: RoutesBlockingMap = {};

    constructor() {
        if (RouteBlocker.instance instanceof RouteBlocker) {
            return RouteBlocker.instance;
        }
        RouteBlocker.instance = this;
    }

    public middleware(route: string) {
        return (req: Request, res: Response, next: NextFunction) => {
            if (this.isRouteBlocked(route)) {
                return res.status(503).send(`Route - ${route} currently unavailable`);
            }
            next();
        };
    }

    public disableRoute(route: string) {
        console.warn(`Route "${route}": disabled ⛔️`);
        this.routesBlockingMap[route] = true;
    }

    public enableRoute(route: string) {
        console.info(`Route "${route}": enabled ✅`);
        this.routesBlockingMap[route] = false;
    }

    private isRouteBlocked(route: string) {
        if (!this.routeBlockingExists(route)) {
            return false;
        }
        return this.routesBlockingMap[route] === true;
    }

    private routeBlockingExists(route: string) {
        if (this.routesBlockingMap.hasOwnProperty(route)) {
            return true;
        }
        return false;
    }
}
