const knex = require("../../knex");

const TABLE_NAME = "user_info";

async function findById(userId) {
    const user = await where({id: userId});
    if (user === null) {
        throw new Error("User not found")
    }
    return {...user};
}

async function findUser(username) {
    return await where({user_name : username});
}

async function where(condition) {
    return await knex(TABLE_NAME)
        .where(condition)
        .then((results) => {
            if (results.length === 0) {
                return null;
            }
            console.log("findById > where : ",results[0]);
            return results[0];
        });
}

module.exports = {
    findById,
    findUser
};