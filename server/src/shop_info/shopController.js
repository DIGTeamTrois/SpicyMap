const shopModel = require("./shopModel")

module.exports = {
    async all(req, res){
        const shopData = await shopModel.all()
        res.status(200).send(shopData)
        // if(!shopData){
        //     res.status(200).send(shopData)
        // }else{
        //     res.status(400).json("Could not get shop's data.")
        // }
    }
}