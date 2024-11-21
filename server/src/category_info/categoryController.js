const categoryModel=require("./categoryModel")

module.exports= {
    async all(req, res) {
        try {
            const categoryData = await commentModel.all();
            if (categoryData) {
                res.status(200).json(categoryData)
            } else {
                res.status(400).json("Could not get category's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(category data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    }
}
