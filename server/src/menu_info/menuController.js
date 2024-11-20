const menuModel = require("./menuModel")

module.exports = {
    async getAllMenus(req, res){
        const menuData = await menuModel.all()
        if(menuData.length !== 0){
            res.status(200).send(menuData)
        }else{
            res.status(400).json("Could not get menu's data.")
        }
    }
}