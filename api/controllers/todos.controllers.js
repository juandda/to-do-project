//Models
const { Todo } = require('../models/todo.model')

const { filterObj } = require('../util/filterObj')

exports.getAllTodos = async (req, res) => { 
    try {
        const todos = await Todo.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                todos,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

exports.createNewTodo = async (req, res) => {
    try {
        const { description } = req.body;

        const newTodo = await Todo.create({
            description
        });

        res.status(201).json({
            status:'success',
            data: {newTodo},
        });
    } catch (error) {
        console.log(error);
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const data = filterObj(req.body, 'description');
    
        const todo = await Todo.findOne({where: {id:id}});
    
        if(!todo){
            res.status(404).json({
                status: 'error',
                message: 'Cant update todo, invalid ID',
            });
            return;
        };
    
        await todo.update({...data});
    
        res.status(204).json({
            status: 'success',
        });
    } catch (error) {
        console.log(error);
    }
}

exports.deleteTodo = async (req,res) => {
    try {
        const { id } = req.params;
    
        const todo = await Todo.findOne({where: {id:id}});
    
        if(!todo){
            res.status(404).json({
                status: 'error',
                message: 'Cant update todo, invalid ID',
            });
            return;
        };
        await todo.destroy()
    
        res.status(204).json({
            status: 'success',
        });
    } catch (error) {
        console.log(error);
    }
}