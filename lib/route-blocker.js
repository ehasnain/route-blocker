"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeBlocker = void 0;
const utils_1 = require("./utils");
class RouteBlocker {
    constructor() {
        this.routesBlockingMap = {};
        if (RouteBlocker.instance instanceof RouteBlocker) {
            return RouteBlocker.instance;
        }
        RouteBlocker.instance = this;
    }
    get routeBlocks() {
        return this.routesBlockingMap;
    }
    middleware(route) {
        return (req, res, next) => {
            if (this.isRouteBlocked(route)) {
                return res.status(503).send(`Route - ${route} currently unavailable`);
            }
            next();
        };
    }
    disableRoute(route) {
        if (utils_1.isValidString(route)) {
            this.routesBlockingMap[route] = true;
            console.warn(`Route "${route}": disabled ⛔️`);
        }
        else {
            console.error("Invalid route key 🤡!");
        }
    }
    enableRoute(route) {
        if (utils_1.isValidString(route)) {
            console.info(`Route "${route}": enabled ✅`);
            this.routesBlockingMap[route] = false;
        }
        else {
            console.error("Invalid route key 🤡!");
        }
    }
    clearBlockings() {
        this.routesBlockingMap = {};
    }
    isRouteBlocked(route) {
        if (!this.routeBlockingExists(route)) {
            return false;
        }
        return this.routesBlockingMap[route] === true;
    }
    routeBlockingExists(route) {
        if (route in this.routesBlockingMap) {
            return true;
        }
        return false;
    }
}
exports.routeBlocker = new RouteBlocker();
