const router = require('express').Router();
const { Post } = require('../../models');

// THIS ALL CHECKS OUT
// /api/blogs
router.post('/', async (req, res) => {
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

router.put('/:id', async (req, res) => {
    try {
        const updatePost = await Post.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(updatePost)

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(deletePost)
        res.render('homepage')

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;