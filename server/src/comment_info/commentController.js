const commentModel=require("./commentModel")

module.exports= {
    async all(req, res) {
        try{
            const limit = req.query.limit
            const commentData = await commentModel.all(limit);
            if (commentData) {
                res.status(200).json(commentData)
            } else {
                res.status(400).json("Could not get comment's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(comment data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    async view(req, res) {
        try{
            const id = req.params.limit
            const commentData = await commentModel.find(id);
            if (commentData) {
                res.status(200).json(commentData)
            } else {
                res.status(400).json("Could not get comment's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(comment data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    async save(req, res) {
        try {
            const commentData = req.body;
            const [saveData] = await commentModel.save(commentData)
            res.status(200).json(saveData)

        } catch (error) {
            console.log("Internal Server Error(comment data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    }
