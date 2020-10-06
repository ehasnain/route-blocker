declare class Logger {
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    debug(message: string): void;
    private decorate;
}
declare const log: Logger;
export default log;
