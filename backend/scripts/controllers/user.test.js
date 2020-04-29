const mongoose = require("mongoose");
require("dotenv").config();

const userController = require("./user");
const User = require("../models/user");

// Testing needs to be done using the command "npm test user", using IDE tests doesn't trigger imports
describe("User controller test", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.TEST_DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        await User.deleteMany({});
    });

    beforeEach(async () => {
        await User.deleteMany({});
    });

    afterAll(async () => {
        await User.deleteMany({});
        await mongoose.connection.close();
    });

    const createTestUser = async (password = "password") => await userController.createUser("John",
        "Doe",
        "test@test.test",
        password);
    const validateTestUser = (user) => {
        expect(user).toMatchObject({
            firstName: "John",
            lastName: "Doe",
        });
    };

    describe("createUser(firstName, lastName, email, password)", () => {
        test("throws an error due to no arguments", async () => {
            await expect(userController.createUser())
                .rejects
                .toThrow();
        });
        test("throws an error due to invalid arguments", async () => {
            await expect(userController.createUser(87, "7.Sep.2002", {}, "cat"))
                .rejects
                .toThrow();
        });
        test("throws an error due to short password", async () => {
            await expect(createTestUser("short"))
                .rejects
                .toThrow();
        });
        test("throws an error due to email already registered", async () => {
            const createSameUsers = async () => {
                await createTestUser();
                await createTestUser();
            };
            await expect(createSameUsers())
                .rejects
                .toThrow();
        });
        test("creates and returns user successfully", async () => {
            const user = await createTestUser();
            validateTestUser(user);
        });
    });

    describe("getUser(id)", () => {
        test("throws an error due to no arguments", async () => {
            await expect(userController.getUser())
                .rejects
                .toThrow();
        });
        test("throws an error due to invalid ID", async () => {
            await expect(userController.getUser("fasbasiofb"))
                .rejects
                .toThrow();
        });
        test("correctly returns a user", async () => {
            const createdUser = await createTestUser();
            const returnedUser = await userController.getUser(createdUser._id);
            validateTestUser(returnedUser);
        });
    });

    describe("deleteUser(id)", () => {
        test("correctly deletes and returns a user", async () => {
            const createdUser = await createTestUser();
            const deletedUser = await userController.deleteUser(createdUser._id);
            validateTestUser(deletedUser);
            await expect(userController.getUser(deletedUser._id))
                .rejects
                .toThrow();
        });
        test("does not return password or salt fields", async () => {
            const createdUser = await createTestUser();
            const deletedUser = await userController.deleteUser(createdUser._id);
            expect(deletedUser.password).toBe(undefined);
            expect(deletedUser.salt).toBe(undefined);
        })
    });

    describe("updateUser(id, properties)", () => {
        test("correctly updates firstName and returns a user", async () => {
            const createdUser = await createTestUser();
            const updatedUser = await userController.updateUser(createdUser._id, {
                firstName: "Marcus"
            });
            expect(updatedUser.firstName).toMatch("Marcus");
            const returnedUser = await userController.getUser(createdUser._id);
            expect(returnedUser.firstName).toMatch("Marcus");
        });
        test("correctly updates password", async () => {
            const createdUser = await createTestUser();
            expect.assertions(1);
            await expect(userController.updateUser(createdUser._id, {
                password: "newpassword"
            })).resolves.not.toThrow();
        });
        test("does not return password or salt fields", async () => {
            const createdUser = await createTestUser();
            const updatedUser = await userController.updateUser(createdUser._id, {
                firstName: "Marcus"
            });
            expect(updatedUser.password).toBe(undefined);
            expect(updatedUser.salt).toBe(undefined);
        });
    });

    describe("loginUser(email, password)", () => {
        test("throws an error due to invalid credentials", async () => {
            await expect((async () => {
                const createdUser = await createTestUser();
                await userController.loginUser(createdUser.email, "notvalid");
            })())
                .rejects
                .toThrow();
        });
        test("throws an error due to user not being registered", async () => {
            await expect((async () => {
                await userController.loginUser("test@test.test", "password");
            })())
                .rejects
                .toThrow();
        });
        test("correctly returns a token", async () => {
            const user = await createTestUser("password");
            const token = await userController.loginUser(user.email, "password");
            expect(token.length).toBeGreaterThan(10);
            expect(typeof token).toBe("string");
        });
    });

});
