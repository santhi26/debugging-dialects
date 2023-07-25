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
        console.log("🚀 ~ file: users.js:23 ~ login ~ data:", data)

        const user = await User.getOneByUsername(data.username);
        console.log("🚀 ~ file: users.js:26 ~ login ~ user:", user)
        const authenticated = await bcrypt.compare(data.password, user["password"]);
        console.log("🚀 ~ file: users.js:28 ~ login ~ authenticated:", authenticated)

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
