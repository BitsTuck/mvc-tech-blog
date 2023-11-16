const router = require('express').Router();
const { Post, Comments, Users } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {   model: Users,
                    attributes: ['username'],
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

        res.render('homepage', {
            blogPost
            // loggedIn: req.session.loggedIn,
        }
        );

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'content', 'author_id'],
                    model: Comments,
                    attributes: ['content', 'author_id']

                }
            ]
        });
        const blogPost = dbPostData.get({ plain: true });

    res.render('post', {
        blogPost,
        // loggedIn: req.session.loggedIn,
    });

} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

router.post('/post/new', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            username: req.body.username
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(newPost)
        });
        const blogPost = newPost.get ({ plain: true })

        res.render('/', {
            blogPost
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.render('/');
        return;
        }
        
    });


module.exports = router;