import { NextFunction, Request, Response } from "express";
import { RoutesBlockingMap } from ".";
declare class RouteBlocker {
    private static instance;
    private routesBlockingMap;
    constructor();
    get routeBlocks(): RoutesBlockingMap;
    middleware(route: string): (req: Request, res: Response, next: NextFunction) => Response<any> | undefined;
    disableRoute(route: string): void;
    enableRoute(route: string): void;
    clearBlockings(): void;
    private isRouteBlocked;
    private routeBlockingExists;
}
export declare const routeBlocker: RouteBlocker;
export {};
