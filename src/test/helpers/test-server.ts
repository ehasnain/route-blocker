import { Server } from "http";
import app from "../../../example/app";

export const PORT = 8080;
process.env.NODE_ENV = "development";

export const testServer = (): Server => {
    return app.listen(PORT, function () {
        console.log("Test server started at port %s", PORT);
    });
};
