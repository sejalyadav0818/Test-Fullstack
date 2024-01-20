const express = require("express");
const router = express.Router();
const {
  createTask,
  getAlltask,
  gettaskById,
  updatetask,
  deletetask,
} = require("../controller/Taskcontroller");


router.post("/task", createTask);
router.get("/task", getAlltask);
router.get("/task/:id", gettaskById);
router.put("/task/:id", updatetask);
router.delete("/task/:id", deletetask);

module.exports = router;
