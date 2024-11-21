const categoryModel=require("./categoryModel")

module.exports= {
    async all(req, res) {
        try {
            const limit = req.query.limit
            const categoryData = await categoryModel.all(limit);
            if (categoryData) {
                res.status(200).json(categoryData)
            } else {
                res.status(400).json("Could not get category's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(category data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    async view(req, res) {
        try {
                const id = req.params.id
            const categoryData = await categoryModel.find(id);
            if (categoryData) {
                res.status(200).json(categoryData)
            } else {
                res.status(400).json("Could not get category's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(category data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    async save(req, res) {
        try {
            const categoryData = req.body;
            const saveData = categoryModel.save(categoryData)
            if (categoryData.category === saveData.category) {
                res.status(200).json(saveData)
            } else {
                res.status(400).json("Could not save category's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(category data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    }
}
