const commentModel=require("./commentModel")

module.exports= {
    async all(req, res) {
        try{
            const commentData = await commentModel.all();
            if (commentData) {
                res.status(200).json(commentData)
            } else {
                res.status(400).json("Could not get comment's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(comment data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    }
}
