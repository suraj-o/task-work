const DBQuery = require("../database/queries/query.js");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and form_data are required" });
    }
    await DBQuery.createUser(name, email);
    res.status(201).json({ message: "DBQuery created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const [rows] = await DBQuery.getAllUser();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await DBQuery.getUserById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: "DBQuery not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, form_data } = req.body;
    if (!name || !form_data) {
      return res.status(400).json({ message: "Name and form_data are required" });
    }
    await DBQuery.updateUser(id, name,);
    res.status(200).json({ message: "DBQuery updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await DBQuery.deleteUser(id);
    res.status(200).json({ message: "DBQuery deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
