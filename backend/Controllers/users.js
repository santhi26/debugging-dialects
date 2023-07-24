const bcrypt = require("bcrypt");

const User = require('../Models/Users');

async function register(req, res) {
    try {
        const data = req.body;

        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
        data["password"] = await bcrypt.hash(data["password"], salt);

        const result = await User.create(data);
        res.status(201).send(result);

    } catch(err) {
        res.status(400).json({"error": err.message})
    }
}

async function login(req, res) {
    try {
        const data = req.body;

        const user = await User.getOneByUsername(data.username);
        const authenticated = await bcrypt.compare(data.password, user["password"]);

        if (!authenticated) {
            throw new Error("Incorrect credentials.")
        } else {
            res.status(200).send(user)
        }
    } catch(err) {
        res.status(403).json({"error": err.message})
    }
}

module.exports = {register, login};