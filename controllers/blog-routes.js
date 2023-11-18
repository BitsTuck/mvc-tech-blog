const router = require('express').Router();
const { Post, Comments, Users } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: Users,
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
            blogPost,
            loggedIn: req.session.loggedIn,
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
        console.log(blogPost)
        res.render('post', {
            blogPost,
            // loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/newpost', (req, res) => {
    console.log('this is working!')
    if (req.session.loggedIn) {
        res.render('newpost');
        return;
    } else {
        res.render('login')
    }


});

router.get('/updatepost', (req, res) => {
    if (req.session.loggedIn) {
        res.render('updatepost');
        return;
    } else {
        res.render('login')
    }

});

router.put('/updatepost', async (req, res) => {
    try {
        const updatePost = await Post.update({
            title: req.body.title,
            content: req.body.content
        },
        {   
            where: {
                post_id: req.params.post_id
            }
        })
        res.status(200).json(updatePost)
        res.render('post')
    } catch (err) {
            console.log(err);
            res.json(err)
        };

});


router.post('/newpost', async (req, res) => {
    console.log(req.body)

    try {
        const newPost = await Post.create({
            title: req.body.blogTitle,
            content: req.body.blogContent,
            author_id: req.session.user_id
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(newPost)
        });


        res.render('homepage')



    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {

    if (!req.session.loggedIn) {
        res.render('login');
        return;
    }

});


module.exports = router;