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

router.post('/login', async (req, res)=> {
    try {
        const dbUserData = await Users.findOne({
            where: {
                username: req.body.username,
            }
        });

        if (!dbUserData) {
            res.status(400);
            res.json({ message: 'Incorrect username. Please try again'});
            return;
        }

        const passwordValidate = await dbUserData.checkPassword(req.body.password);

        if(!passwordValidate) {
            res.status(400);
            res.json({ message: 'Incorrect password. Please try again'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200);
            res.json({ user: dbUserData, message: 'Thanks for logging in'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;