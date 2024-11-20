const commentModel=require("./commentModel")

module.exports= {
    async all(req, res) {
        const commentData = await commentModel.all();
        res.status(200).send(commentData)
        // if (commentData.length !== 0) {
        //     res.status(200).send(commentData)
        // } else {
        //     res.status(400).json("Could not get comment's data.")
        // }
    }
}