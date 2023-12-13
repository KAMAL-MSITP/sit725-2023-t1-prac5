const Todo = require('../models/sampleModel');

// Controller for handling CRUD operations
const todoController = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createTodo: async (req, res) => {
    const { title, description } = req.body;

    try {
      const newTodo = new Todo({ title, description });
      const savedTodo = await newTodo.save();
      res.json(savedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = todoController;
