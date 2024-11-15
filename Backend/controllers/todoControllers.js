const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

exports.addTodo = async (req, res) => {
    const { description, status } = req.body;
    const newTodo = new Todo({ description, status });
    await newTodo.save();
    res.status(201).json(newTodo);
};

exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).end();
};

exports.updateTodoStatus = async (req, res) => {
    const { status } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
    );
    res.json(updatedTodo);
};
