import { clearRouteBlocks, disableRoute, enableRoute, getRoute } from "./helpers/api";
import { Server } from "http";
import { expect } from "chai";
import { testServer } from "./helpers/test-server";

describe("Feature: Route Blocker", () => {

    const route1 = "my-route-1";
    const route2 = "my-route-2";
    const route3 = "my-route-3";

    let response: ChaiHttp.Response;
    let server: Server;

    before("Start server", async () => {
        server = testServer();
    });

    after("Stop server", async () => {
        await clearRouteBlocks();
        server.close();
    });

    describe("Scenario: Happy Path", () => {

        before("When: One route is blocked", async () => {
            await disableRoute(route1);
        });

        it(`Then: One route is blocked`, async () => {
            response = await getRoute(route1);
            expect(response.status).to.be.equal(503);
        });

        it(`Then: No blocking exist for other routes`, async () => {
            response = await getRoute(route2);
            expect(response.status).to.be.equal(200);
            response = await getRoute(route3);
            expect(response.status).to.be.equal(200);
        });

    });

    describe("Scenario: More than one route blocking", () => {

        before("When: Two routes are blocked", async () => {
            await disableRoute(route1);
            await disableRoute(route2);
        });

        it(`Then: Only two routes are blocked`, async () => {
            response = await getRoute(route1);
            expect(response.status).to.be.equal(503);
            response = await getRoute(route2);
            expect(response.status).to.be.equal(503);
        });

        it(`Then: No blocking exist for non-blocked route`, async () => {
            response = await getRoute(route3);
            expect(response.status).to.be.equal(200);
        });

    });

    describe("Scenario: When one blocked route is unblocked", () => {

        before("When: More than one routes are blocked", async () => {
            await disableRoute(route1);
            await disableRoute(route2);
        });

        it(`When: One route is unblocked
        Then: The route is unblocked`, async () => {
            await enableRoute(route1);
            response = await getRoute(route1);
            expect(response.status).to.be.equal(200);
        });

        it(`Then: Other routes stay as they are`, async () => {
            response = await getRoute(route2);
            expect(response.status).to.be.equal(503);
            response = await getRoute(route3);
            expect(response.status).to.be.equal(200);
        });

    });

});
