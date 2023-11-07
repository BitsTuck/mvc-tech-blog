const router = require('express').Router();
const { Post, Users } = require('../models');

router.get('/', async (req, res) => {
    try {
        const getBlogs = await Post.findAll ({
            include: [
                {
                    model: Post,
                    attributes: ['title', 'author', 'content', 'comment']
                }
            ]
        });

        const blogs = dbBlogData.map((blog) => 
        blog.get({plain:true})
        );

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})