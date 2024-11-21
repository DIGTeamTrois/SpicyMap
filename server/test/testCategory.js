require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
console.log(environment)
const config = require("../knexfile")[environment];
const db = require("knex")(config)

const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupServer } = require("../src/server.js");
const categoryModel = require("../src/category_info/categoryModel")


const app = setupServer();
const expect = chai.expect;
chai.use(chaiHttp);

describe("/categories ", () => {
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

    it("GET /categories   should return array ", async () => {
        const response = await categoryModel.all(5);
        console.log("🍎🍎🍎🍎data", response)
        expect(response).to.be.an.instanceOf(Array);
    });

    it("GET /categories/:id   should return single data array ", async () => {
        const response = await categoryModel.find(1);
        console.log("🍎🍎🍎🍎data", response)
        expect(response.length).to.equal(1);
    });

    it("POST /categories   should change after-data length to before-data length + 1", async () => {
        const categoryData = {id: 6, category: "スペイン料理"};
        const dataBefore= await categoryModel.all(1000);
        await categoryModel.save(categoryData)
        const dataAfter = await categoryModel.all(1000);
        expect(dataBefore.length).to.equal(dataAfter.length - 1);
    });
});




