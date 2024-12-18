const {db} = require("../db.js");

class DBQuery {
  static async createRecord(name, form_data) {
    const query = `
      INSERT INTO records (name, form_data, created_at, updated_at)
      VALUES (?, ?, NOW(), NOW())
    `;
    return db.execute(query, [name, form_data]);
  }

  static async getAllRecords() {
    const query = "SELECT * FROM records";
    return db.execute(query);
  }

  static async getRecordById(id) {
    const query = "SELECT * FROM records WHERE id = ?";
    return db.execute(query, [id]);
  }

  static async updateRecord(id, name, form_data) {
    const query = `
      UPDATE records 
      SET name = ?, form_data = ?, updated_at = NOW() 
      WHERE id = ?
    `;
    return db.execute(query, [name, form_data, id]);
  }

  static async deleteRecord(id) {
    const query = "DELETE FROM records WHERE id = ?";
    return db.execute(query, [id]);
  }
}

module.exports = DBQuery;
