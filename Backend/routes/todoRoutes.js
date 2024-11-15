const express = require('express');
const { getTodos, addTodo, deleteTodo, updateTodoStatus } = require('../controllers/todoController');

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodoStatus);

module.exports = router;
