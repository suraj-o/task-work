const DBQuery = require("../database/queries/query.js");

exports.createRecord = async (req, res) => {
  try {
    const { name, form_data } = req.body;
    console.log(req.body)
    if (!name || !form_data) {
      return res.status(400).json({ message: "Name and form_data are required" });
    }
    await DBQuery.createRecord(name, JSON.stringify(form_data));
    res.status(201).json({ message: "Record created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllRecords = async (req, res) => {
  try {
    const [rows] = await DBQuery.getAllRecords();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await DBQuery.getRecordById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, form_data } = req.body;
    if (!name || !form_data) {
      return res.status(400).json({ message: "Name and form_data are required" });
    }
    await DBQuery.updateRecord(id, name, JSON.stringify(form_data));
    res.status(200).json({ message: "Record updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    await DBQuery.deleteRecord(id);
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
