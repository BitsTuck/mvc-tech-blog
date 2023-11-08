const Users = require('./Users');
const Post = require('./Post');

Users.hasMany(Post, {
    foreignKey: 'users_id'
});

Post.belongsTo(Users, {
    foreignKey: 'users_id',
})

module.exports = {Users, Post}
