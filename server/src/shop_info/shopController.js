const shopModel = require("./shopModel")

module.exports = {
    async all(req, res) {
        try {
            const limit = req.query.limit
            const shopData = await shopModel.all(limit)
            if (shopData) {
                res.status(200).json(shopData)
            }else {
            res.status(400).json("Could not get shop's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(shop data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
        async view(req, res) {
        try {
            const id = req.params.id
            console.log("🍏🍏🍏🍏id",  id )
            const shopData = await shopModel.find(id);
            if (shopData) {
                res.status(200).json(shopData)
            } else {
                res.status(400).json("Could not get shop's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(shop data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    async save(req, res) {
        try {
            const shopData = req.body;
            const [saveData] = await shopModel.save(shopData)
            res.status(200).json(saveData)
        } catch (error) {
            console.log("Internal Server Error(shop data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
}
