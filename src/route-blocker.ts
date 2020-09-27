import {
    NextFunction,
    Request,
    Response,
} from "express";
import { RoutesBlockingMap } from ".";

class RouteBlocker {
    private static instance: RouteBlocker;
    private routesBlockingMap: RoutesBlockingMap = {};

    constructor() {
        if (RouteBlocker.instance instanceof RouteBlocker) {
            return RouteBlocker.instance;
        }
        RouteBlocker.instance = this;
    }

    public get routeBlocks(): RoutesBlockingMap {
        return this.routesBlockingMap;
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

    public clearBlockings(): void {
        this.routesBlockingMap = {};
    }

    private isRouteBlocked(route: string) {
        if (!this.routeBlockingExists(route)) {
            return false;
        }
        return this.routesBlockingMap[route] === true;
    }

    private routeBlockingExists(route: string) {
        if (route in this.routesBlockingMap) {
            return true;
        }
        return false;
    }
}

export const routeBlocker = new RouteBlocker();
