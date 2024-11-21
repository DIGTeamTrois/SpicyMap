require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
console.log(environment)
const config = require("../knexfile")[environment];
const db = require("knex")(config)

const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupServer } = require("../src/server.js");
const menuModel = require("../src/menu_info/menuModel");

const app = setupServer();
const expect = chai.expect;
chai.use(chaiHttp);

describe("/menus ", () => {
    let request;

    before(async () => {
        await db.migrate
            .forceFreeMigrationsLock()
            .then(() => db.migrate.rollback({ all: true }))
            .then(() => db.migrate.latest())
            .then(() => db.seed.run())
            .catch(console.error);

        request = chai.request(app).keepOpen();
    });
    after(() => {
        request.close();
    });

    it("GET /menus   should return array ", async () => {
        const response = await menuModel.all(3);
        console.log("🍎🍎🍎🍎data", response)
        expect(response).to.be.an.instanceOf(Array);
    });

    it("GET /menus/:id  should get single menu data", async () => {
        const response = await menuModel.find(1);
        console.log("🍎🍎🍎🍎data 指定1件", response)
        expect(response.length).to.equal(1);
    });

    it("POST /menus   should change after-data length to before-data length + 1", async () => {
        const menuData = {id: 6, shop_id: 5, menu: "皿台湾", spicy_judge: 5};
        const dataBefore= await menuModel.all(1000);
        await menuModel.save(menuData)
        const dataAfter = await menuModel.all(1000);
        expect(dataBefore.length).to.equal(dataAfter.length - 1);
    });
});

