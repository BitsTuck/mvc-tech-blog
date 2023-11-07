const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init({
    id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    
})

module.exports = Users;

