const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/todos', todoController.getAllTodos);
app.post('/todos', todoController.createTodo);

// Serve the HTML file
app.use(express.static('views'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});