const { Comments } = require('../models');

const commentData = [
    {
        content: 'i agree! Defector is great',
        author_id: 1,
        post_id: 1,
    },
    {
        content: 'javascript gives me a headache',
        author_id: 2,
        post_id: 2,
    },
    {
        content: 'librarians will save the world',
        author_id: 3,
        post_id: 3,
    }
]

const seedComments = () => Comments.bulkCreate(commentData)
module.exports = seedComments;