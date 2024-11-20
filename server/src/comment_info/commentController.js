const commentModel=require("./commentModel")

module.exports= {
    async getAllComments(req, res) {
        const commentData = await commentModel.all();
        if (commentData.length !== 0) {
            res.status(200).send(commentData)
        } else {
            res.status(400).json("Could not get comment's data.")
        }
    }
}