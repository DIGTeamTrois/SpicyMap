const categoryModel=require("./categoryModel")

module.exports= {
    async getAllCategories(req, res) {
        const categoryData = await commentModel.all();
        if (categoryData.length !== 0) {
            res.status(200).send(categoryData)
        } else {
            res.status(400).json("Could not get category's data.")
        }
    }
}