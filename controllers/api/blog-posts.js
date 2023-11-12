const router = require('express').Router();
const { Post } = require('../../models');

router.post('/post', async (req, res) => {
    try {
        const dbBlogData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author_id: req.body.author_id,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbBlogData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/post:id', (req, res) => {
    try {
        Post.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: {
                    post_id: req.params.post_id
                }
            })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.delete('/post', async (req, res) => {
    try {
        Post.destroy({
            where: {
                id: req.body.id,
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;