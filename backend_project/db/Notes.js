const Sequelize = require("sequelize");


module.exports = function (sequelize) {
    return sequelize.define("notes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        url: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        timestamp: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    });
}
