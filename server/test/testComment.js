require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
console.log(environment)
const config = require("../knexfile")[environment];
const db = require("knex")(config)

// const shopModel=require("../src/shop_info/shopModel")

const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupServer } = require("../src/server.js");

const app = setupServer();
const commentModel = require("../src/comment_info/commentModel");
const expect = chai.expect;
chai.use(chaiHttp);

describe("/comments", () => {
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

    it("GET /comments   should return array ", async () => {
        const response = await commentModel.all(3);
        console.log("🍎🍎🍎🍎data", response)
        expect(response).to.be.an.instanceOf(Array);
    });

    it("GET /comments/:id   should return 1 data array ", async () => {
        const response = await commentModel.find(1);
        console.log("🍎🍎🍎🍎data", response)
        expect(response.length).to.equal(1);
    });

    it("POST /comments   should change after-data length to before-data length + 1", async () => {
        const commentData =
            {
                id: 6,
                shop_id:1,
                menu_id: 3,
                user_id:2,
                spicy_judge: 5,
                post_datetime: new Date(),
                post_contents: "凄く辛い"
            };
        const dataBefore= await commentModel.all(1000);
        await commentModel.save(commentData)
        const dataAfter = await commentModel.all(1000);
        expect(dataBefore.length).to.equal(dataAfter.length - 1);
    });
});