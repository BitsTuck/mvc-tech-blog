const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-posts');
const commentRoutes = require('./comment-routes')

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/blogs/:id/comments', commentRoutes)

module.exports = router;