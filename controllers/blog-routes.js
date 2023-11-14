const router = require('express').Router();
const { Post, Comments, Users } = require('../models');

router.get('/', async (req, res) => {
    // try {
    //     const dbPostData = await Post.findAll({
    //         include: [
    //             {
    //                 model: Post,
    //                 attributes: ['title', 'content', 'author_id'],
    //                 model: Comments,
    //                 attributes: ['content', 'author_id']

    //             }
    //         ]
    //     });

    try {
            const postData = await Post.findAll({
              include: [Users],
            });

        const blogPost = postData.map((post) =>
            post.get({ plain: true })
        );
        console.log('this is a blog' + JSON.stringify(postData))
        res.render('post', {
            blogPost
            // loggedIn: req.session.loggedIn,
        }
        );

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