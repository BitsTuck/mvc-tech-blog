const Users = require('./Users');
const Post = require('./Post');
const Comments = require('./Comments')

Users.hasMany(Post, {
    foreignKey: 'users_username'
});

Post.belongsTo(Users, {
    foreignKey: 'users_username',
});

Post.hasMany(Comments, {
    foreignKey:'post_id',
});

Comments.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = {Users, Post, Comments}
