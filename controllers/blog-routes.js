const router = require('express').Router();
const { Post, Comments } = require('../models');

router.get('/post', async (req, res) => {
    try {
        const dbUserData = await Post.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['title', 'content', 'author_id'],
                    model: Comments,
                    attributes: ['content', 'author_id']

                }
            ]
        });

        const blogPost = dbPostData.map((post) =>
            post.get({ plain: true })
        );

        res.render('blogposts', {
            blogPost,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    attributes: ['title', 'content', 'author_id'],
                    model: Comments,
                    attributes: ['content', 'author_id']

                }
            ]
        });
        const blogPost = dbPostData.get({ plain: true });

    res.render('post', {
        blogPost,
        loggedIn: req.session.loggedIn,
    });

} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
        }
        
        res.render('login')
    });


module.exports = router;