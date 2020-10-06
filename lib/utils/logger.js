"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogType;
(function (LogType) {
    LogType["ERROR"] = "error";
    LogType["WARN"] = "warn";
    LogType["INFO"] = "info";
    LogType["DEBUG"] = "debug";
})(LogType || (LogType = {}));
class Logger {
    info(message) {
        console.info(this.decorate(message, LogType.INFO));
    }
    warn(message) {
        console.warn(this.decorate(message, LogType.WARN));
    }
    error(message) {
        console.error(this.decorate(message, LogType.ERROR));
    }
    debug(message) {
        console.debug(this.decorate(message, LogType.DEBUG));
    }
    decorate(message, logType) {
        const timestamp = new Date().toISOString();
        return `${timestamp}: [Route blocker: ${logType}] ${message}`;
    }
}
const log = new Logger();
exports.default = log;
