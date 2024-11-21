require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
console.log(environment)
const config = require("../knexfile")[environment];
const db = require("knex")(config)

const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupServer } = require("../src/server.js");

const app = setupServer();
const expect = chai.expect;
chai.use(chaiHttp);

const shopModel = require("../src/shop_info/shopModel")

describe("/shops ", () => {
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

    it("GET /shops  shops should return all array ", async () => {
        // const response = await request.get("/shops");
        const response = await shopModel.all(3);
        console.log("🍎🍎🍎🍎data all", response)
        expect(response).to.be.an.instanceOf(Array);
    });

    it("GET /shops/:id  shops should return 1 array ", async () => {
        const response = await shopModel.find(1);
        // console.log("🍎🍎🍎🍎data 指定1件", response)
        expect(response).to.be.an.instanceOf(Array);
    });

    it("POST /shops   should be able to create a new shop", async () => {
        const newShop ={
            id: 6,
            shop: "TEST SHOP",
            average_spicy: 5.5,
            category_id: 5,
            latitude: 34.254,
            longitude: 138.1234
        }
        const response = await shopModel.save(newShop);
        // console.log("🍎🍎🍎🍎data POST", response)
        expect(response).to.be.an.instanceOf(Array);
    });
});

