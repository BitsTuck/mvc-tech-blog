const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbUserData = await Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});