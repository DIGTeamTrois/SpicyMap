const menuModel = require("./menuModel")

module.exports = {
    async all(req, res){
        try{
            const limit = req.query.limit
                const menuData = await menuModel.all(limit)
                if(menuData){
                    res.status(200).json(menuData)
                }else{
                    res.status(400).json("Could not get menu's data.")
                }
        } catch (error) {
                console.log("Internal Server Error(menu data)", error)
                res.status(500).json({error: "Internal Server Error"});
        }
    },
    async view(req, res) {
        try {
            const id = req.params.id
            const menuData = await menuModel.find(id);
            if (menuData) {
                res.status(200).json(menuData)
            } else {
                res.status(400).json("Could not get menu's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(menu data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    async save(req, res) {
        try {
            const menuData = req.body;
            const [saveData] = await menuModel.save(menuData)
            if (menuData.menu === saveData.menu) {
                res.status(200).json(saveData)
            } else {
                res.status(400).json("Could not save menu's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(menu data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
}
