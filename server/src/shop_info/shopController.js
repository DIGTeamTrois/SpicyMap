const shopModel = require("./shopModel")

module.exports = {
    async getAllShops(req, res){
        const shopData = await shopModel.all()
        if(menuData.length !== 0){
            res.status(200).send(shopData)
        }else{
            res.status(400).json("Could not get shop's data.")
        }
    }
}