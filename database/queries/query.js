const {db} = require("../db.js");

class DBQuery {
  static async createUser(name, email) {
    const query = `
      INSERT INTO user (name, email, created_at, updated_at)
      VALUES (?, ?, NOW(), NOW())
    `;
    return db.execute(query, [name, email]);
  }

  static async getAllUser() {
    const query = "SELECT * FROM user";
    return db.execute(query);
  }

  static async getUserById(id) {
    const query = "SELECT * FROM user WHERE id = ?";
    return db.execute(query, [id]);
  }

  static async updateUser(id, name, form_data) {
    const query = `
      UPDATE user 
      SET name = ?, updated_at = NOW() 
      WHERE id = ?
    `;
    return db.execute(query, [name, id]);
  }

  static async deleteUser(id) {
    const query = "DELETE FROM user WHERE id = ?";
    return db.execute(query, [id]);
  }
}


module.exports = DBQuery;