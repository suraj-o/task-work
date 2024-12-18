const express = require("express");
const router = express.Router();
const recordController = require("../controllers/user.js");

router.post("/", recordController.createRecord);
router.get("/", recordController.getAllRecords);
router.get("/:id", recordController.getRecordById);
router.put("/:id", recordController.updateRecord);
router.delete("/:id", recordController.deleteRecord);

module.exports = router;
