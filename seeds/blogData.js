const { Post } = require('../models');

const blogData = [
    {
        title: 'blogs are neat',
        content: 'my favorite blog is Defector',
        author_id: 1

    },
    {
        title: 'javascript is fun',
        content: 'javascript is nice if you like banging your head against a desk',
        author_id: 2

    },
    {
        title: 'i like databases',
        content: 'databases remind me that I am secretly a librarian',
        author_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(blogData)
module.exports = seedPosts;