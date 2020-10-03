import { PORT } from "./test-server";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const BASE_URL = `127.0.0.1:${PORT}`;

export async function getRoute(subRoute: string): Promise<ChaiHttp.Response> {
    const api = `/api/${subRoute}`;
    return chai.request(BASE_URL)
        .get(api);
}

export async function enableRoute(subRoute: string): Promise<ChaiHttp.Response> {
    const apiEnable = `${subRoute}/enable`;
    return getRoute(apiEnable);
}

export async function disableRoute(subRoute: string): Promise<ChaiHttp.Response> {
    const apiDisable = `${subRoute}/disable`;
    return getRoute(apiDisable);
}

export async function clearRouteBlocks(): Promise<ChaiHttp.Response> {
    const apiClearAll = "clear-route-blocks";
    return getRoute(apiClearAll);
}

