const Task = require("../Models/TaskSchema");
const Constants = require("../utils/constants");

const createTask = async (req, res, next) => {
  const { name, description, price } = req.body;
  try {
    const newTask = new Task({
      name,
      description,
      price,
    });
    await newTask.save();
    res.status(201).json({
      data: newTask,
      message: Constants.Task_CREATED_SUCCESSFULLY,
    });
  } catch (error) {
    next(error);
  }
};

const getAlltask = async (req, res, next) => {
  try {
    const tasksData = await Task.find({isdeleted : false});
    res.status(200).json({ data: tasksData });
  } catch (error) {
    next(error);
  }
};

const gettaskById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const singletaskData = await Task.findById(id);
    singletaskData
      ? res.status(200).json({ data: singletaskData })
      : res.status(400).json({ error: Constants.Task_NOT_FOUND });
  } catch (error) {
    next(error);
  }
};

const updatetask = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, price } = req.body;  // Add this line to extract fields from req.body
console.log(req.body);
  try {
    const updatedtaskData = await Task.findByIdAndUpdate(
      id,
      { name, description, price },  // Specify the fields you want to update
      { new: true }
    );

    updatedtaskData
      ? res.status(200).json({
          data: updatedtaskData,
          message: Constants.task_UPDATED_SUCCESSFULLY,
        })
      : res.status(400).json({ error: Constants.task_NOT_FOUND });
  } catch (error) {
    next(error);
  }
};


// const updatetask = async (req, res, next) => {
//   const { id } = req.params;

//   try {
//     const updatedtaskData = await Task.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     updatedtaskData
//       ? res.status(200).json({
//           data: updatedtaskData,
//           message: Constants.task_UPDATED_SUCCESSFULLY,
//         })
//       : res.status(400).json({ error: Constants.task_NOT_FOUND });
//   } catch (error) {
//     next(error);
//   }
// };

const deletetask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletetask = await Task.findByIdAndUpdate(
      id,
      { isdeleted: true },
      { new: true }
    );

    if (!deletetask) {
      return res.status(404).json({ error: Constants.Task_NOT_FOUND });
    }
    res.status(200).json({ message: Constants.Task_DELETED_SUCCESSFULLY });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getAlltask,
  gettaskById,
  updatetask,
  deletetask,
};
