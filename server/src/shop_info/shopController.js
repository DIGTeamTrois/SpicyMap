const shopModel = require("./shopModel")

module.exports = {
    async all(req, res) {
        try {
            const shopData = await shopModel.all()
            if (shopData) {
                res.status(200).json(shopData)
            }else {
            res.status(400).json("Could not get shop's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(shop data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    }
}
