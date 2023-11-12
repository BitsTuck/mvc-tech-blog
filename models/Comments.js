const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.STRING,
            references: {
                model: 'users',
                key: 'username',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            },
        },

    },

    {
     sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
    }
)

module.exports = Comments;