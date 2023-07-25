class User {
 constructor(username, user_id, role, is_online) {
    this.username = username;
    this.user_id = user_id;
    this.role = role;
    this.is_online = is_online;
 }

 changeStatus() {
    this.is_online = (!this.is_online);
 }

 deleteUserID() {
    this.user_id = "";
 }

 addUserID(id) {
    this.user_id = id;
 }
}

module.exports = User;