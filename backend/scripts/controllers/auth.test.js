const authController = require("./auth");

describe("Auth controller test", () => {
    describe("checkAuthorized(auth, admin)", () => {
        test("throws an error if not authorized", () => {
            expect(() => authController.checkAuthorized({
                verified: false,
                admin: false
            })).toThrow();
        });
        test("throws an error if not admin", () => {
            expect(() => authController.checkAuthorized({
                verified: true,
                admin: false
            }, true)).toThrow();
        });
        test("returns true successfully if verified", () => {
            expect(authController.checkAuthorized({
                verified: true,
                admin: true
            }, true)).toBe(true);
        });
    });

    describe("currentOrAdmin(auth, id)", () => {
        test("throws an error if not authorized", () => {
            expect(() => authController.currentOrAdmin({
                verified: false,
                admin: false,
                user: null
            }, "id5")).toThrow();
        });
        test("throws an error if not admin and other id", () => {
            expect(() => authController.currentOrAdmin({
                verified: true,
                admin: false,
                user: {
                    _id: "id5"
                }
            }, "id6")).toThrow();
        });
        test("returns true successfully if same id", () => {
            expect(authController.currentOrAdmin({
                verified: true,
                admin: false,
                user: {
                    _id: "id5"
                }
            }, "id5")).toBe(true);
        });
        test("returns true successfully if admin", () => {
            expect(authController.currentOrAdmin({
                verified: true,
                admin: true,
                user: {
                    _id: "id5"
                }
            }, "id8")).toBe(true);
        });
    });
});
