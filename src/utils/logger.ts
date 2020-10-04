enum LogType {
    ERROR = "error",
    WARN = "warn",
    INFO = "info",
    DEBUG = "debug",
}

class Logger {

    public info(message: string): void {
        console.info(this.decorate(message, LogType.INFO));
    }

    public warn(message: string): void {
        console.warn(this.decorate(message, LogType.WARN));
    }

    public error(message: string): void {
        console.error(this.decorate(message, LogType.ERROR));
    }

    public debug(message: string): void {
        console.debug(this.decorate(message, LogType.DEBUG));
    }

    private decorate(message: string, logType: LogType) {
        const timestamp = new Date().toISOString();
        return `${timestamp}: [Route blocker: ${logType}] ${message}`;
    }

}

const log = new Logger();

export default log;
