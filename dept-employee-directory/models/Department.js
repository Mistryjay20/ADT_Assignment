const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Department = sequelize.define('Department', {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Department.associate = (models) => {
    Department.hasMany(models.Employee, {
        foreignKey: 'departmentId',
    });
};

module.exports = Department;
