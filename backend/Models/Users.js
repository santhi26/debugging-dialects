const db = require('../database/db');
const {v4: uuidv4} = require("uuid");

class User {
    constructor({user_id, username, password, token, email, role, joined_date}) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.token = token;
        this.email = email;
        this.role = role;
        this.joined_date = joined_date;
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM users WHERE user_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getOneByUsername(username) {
        const response = await db.query("SELECT * FROM users WHERE username = $1", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async create(data) {
        const { username, password, email, role, joined_date } = data;
        const token = uuidv4();
        let response = await db.query("INSERT INTO users (username, password, token, email, role, joined_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id;",
            [username, password, token, email, role, joined_date]);
        const newId = response.rows[0].user_id;
        const newUser = await User.getOneById(newId);
        return newUser;
    }
}
module.exports = User;