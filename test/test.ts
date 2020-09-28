import { expect } from "chai";
import { routeBlocker, RoutesBlockingMap } from "../src"

describe("Feature: Route Blocker", () => {

    const route1 = "route-1";
    const route2 = "route-2";
    const route3 = "route-3";

    after("Clean all routes", () => {
        routeBlocker.clearBlockings();
    });

    describe("Scenario: Happy Path", () => {

        before("When: One route is blocked", () => {
            routeBlocker.disableRoute(route1);
        });

        const blockedRoutes = routeBlocker.routeBlocks;

        it(`Then: Only one route is blocked`, () => {
            expect(blockedRoutes[route1]).to.be.true;
        });

        it(`Then: No blocking exist for other routes`, () => {
            expect(blockedRoutes[route2]).to.be.undefined;
            expect(blockedRoutes[route3]).to.be.undefined;
        });

    });

    describe("Scenario: More than one route blocking", () => {

        before("When: More than one routes are blocked", () => {
            routeBlocker.disableRoute(route1);
            routeBlocker.disableRoute(route2);
        });

        const blockedRoutes = routeBlocker.routeBlocks;

        it(`Then: Only two routes are blocked`, () => {
            expect(blockedRoutes[route1]).to.be.true;
            expect(blockedRoutes[route2]).to.be.true;
        });

        it(`Then: No blocking exist for non-blocked route`, () => {
            expect(blockedRoutes[route3]).to.be.undefined;
        });

    });

    describe("Scenario: When one blocked route is unblocked", () => {

        before("When: More than one routes are blocked", () => {
            routeBlocker.disableRoute(route1);
            routeBlocker.disableRoute(route2);
        });

        let blockedRoutes: RoutesBlockingMap;

        it(`When: One route is unblocked
        Then: Then the route is unblocked`, () => {
            routeBlocker.enableRoute(route1);
            blockedRoutes = routeBlocker.routeBlocks;
            expect(blockedRoutes[route1]).to.be.false;
        });

        it(`Then: Other routes are still blocked`, () => {
            expect(blockedRoutes[route2]).to.be.true;
            expect(blockedRoutes[route3]).to.be.undefined;
        });

    });

});
