const { Comments } = require('../models');

const commentData = [
    {
        content: 'i agree! Defector is great',
        author_id: 'bits_t',
        post_id:'',
    },
    {
        content: 'javascript gives me a headache',
        author_id: 'susie_t',
        post_id: '',
    },
    {
        content: 'librarians will save the world',
        author_id: 'bits_t',
        post_id: '',
    }
]

const seedComments = () => Comments.bulkCreate(commentData)
module.exports = seedComments;