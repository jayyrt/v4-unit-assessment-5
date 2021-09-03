const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        let { username, password } = req.body;
        let db = req.app.get('db');
        let userFound = await db.user.find_user_by_username([username]);
        if (userFound[0]) {
            return res.status(200).send('Username already exists')
        }
        let salt = bcrypt.getSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let createdUser = await db.create_user([username, hash])
        req.session.helo_users = { id: createdUser[0].id, username: createUser[0].username }
        res.status(200).send(req.session.helo_users)      
    },
    login: async (req, res) => {
        let { username, password } = req.body;
        let db = req.app.get('db');
        let userFound = await db.user.find_user_by_username([username]);
        if(!userFound[0]) {
            return res.status(200).send('Incorrect email or password! Please try again');
        }
        let result = bcrypt.compareSync(password, userFound[0].password);
        if (result) {
           req.session.user = { id: createdUser[0].id, username: createdUser[0].username }
           res.status(200).send('Incorrect email/password') 
        }
    },
    logout: async(req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: async(req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('please log in')
        }
    }
}