const express = require('express')

const router = express.Router()

//Controllers
const { getAllTodos, createNewTodo, updateTodo, deleteTodo } = require('../controllers/todos.controllers')

router.get('/', getAllTodos)

router.post('/', createNewTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = {todoRouter: router}