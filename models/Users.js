const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {
    checkPassword(loginpw) {
        return bcrypt.compareSync(loginpw, this.password);
    }
}

Users.init(
    {
    id:{
            type: DataTypes.INTEGER,
            allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
},
{
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
})

module.exports = Users;

