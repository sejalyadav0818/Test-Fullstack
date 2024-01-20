const express = require("express");
const router = express.Router();

router.post("/task", createTask);
router.get("/task", getAlltask);
router.get("/task/:id", gettaskById);
router.put("/task/:id", updatetask);
router.delete("/task/:id", deletetask);


module.exports = router;
    