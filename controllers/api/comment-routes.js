const router = require('express').Router();
const { Comments } = require('../../models');

//THIS ALL CHECKS OUT
// /api/blogs/:id/comments
router.post('/', async (req, res) => {
    try {
        const dbCommentData = await Comments.create({
            content: req.body.content,
            author_id: req.body.author_id,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbCommentData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.delete('/', async (req, res) => {
    try {
        const deleteComment = await Comments.destroy({
            where: {
                id: req.body.id,
            }
        });
        res.status(200).json(deleteComment)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;