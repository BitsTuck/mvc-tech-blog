const { Post } = require('../models');

const blogData = [
    {
        title: 'blogs are neat',
        content: 'my favorite blog is Defector',
        author_id: 'bits_t'
    },
    {
        title: 'javascript is fun',
        content: 'javascript is nice if you like banging your head against a desk',
        author_id: 'susie_t'
    },
    {
        title: 'i like databases',
        content: 'databases remind me that I am secretly a librarian',
        author_id: 'bits_t'
    }
]

const seedPosts = () => Post.bulkCreate(blogData)
module.exports = seedPosts;