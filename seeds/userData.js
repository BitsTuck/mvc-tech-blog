const { Users } = require('../models');

const userData = [
    {
        username: 'bits_t',
        email: 'bits@me.com',
        password:'archie10',
    },
    {
        username: 'susie_t',
        email: 'susie@me.com',
        password:'pusch1293',
    },
    {
        username: 'sam_t',
        email: 'sam@me.com',
        password:'archieistheworst',
    },
]

const seedUsers = () => Users.bulkCreate(userData)
module.exports = seedUsers;