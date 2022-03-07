const { DataTypes} = require('sequelize')

const { sequelize } = require('../util/database')

const Todo = sequelize.define('todos', {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,    
        autoIncrement:true,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

module.exports = { Todo }