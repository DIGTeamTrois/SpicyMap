const menuModel = require("./menuModel")

module.exports = {
    async all(req, res){
        try{
                const menuData = await menuModel.all()
                if(menuData){
                    res.status(200).json(menuData)
                }else{
                    res.status(400).json("Could not get menu's data.")
                }
        } catch (error) {
                console.log("Internal Server Error(menu data)", error)
                res.status(500).json({error: "Internal Server Error"});
        }
    }
}
