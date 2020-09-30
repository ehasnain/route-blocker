import {
    NextFunction,
    Request,
    Response,
} from "express";
import { RoutesBlockingMap } from ".";
import { isValidString } from "./utils";

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
        if (isValidString(route)) {
            this.routesBlockingMap[route] = true;
            console.warn(`Route "${route}": disabled ⛔️`);
        } else {
            console.error("Invalid route key 🤡!");
        }
    }
    
    public enableRoute(route: string) {
        if (isValidString(route)) {
            console.info(`Route "${route}": enabled ✅`);
            this.routesBlockingMap[route] = false;
        } else {
            console.error("Invalid route key 🤡!");
        }
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
