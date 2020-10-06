"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeBlocker = void 0;
const validator_1 = require("./utils/validator");
const logger_1 = __importDefault(require("./utils/logger"));
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
        if (validator_1.isValidString(route)) {
            this.routesBlockingMap[route] = true;
            logger_1.default.warn(`Route "${route}": disabled ⛔️`);
        }
        else {
            logger_1.default.error("Invalid route key 🤡!");
        }
    }
    enableRoute(route) {
        if (validator_1.isValidString(route)) {
            logger_1.default.info(`Route "${route}": enabled ✅`);
            this.routesBlockingMap[route] = false;
        }
        else {
            logger_1.default.error("Invalid route key 🤡!");
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
