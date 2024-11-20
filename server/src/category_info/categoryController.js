const categoryModel=require("./categoryModel")

module.exports= {
    async all(req, res) {
        const categoryData = await commentModel.all();
        res.status(200).send(categoryData)
        // if (categoryData.length !== 0) {
        //     res.status(200).send(categoryData)
        // } else {
        //     res.status(400).json("Could not get category's data.")
        // }
    }
}