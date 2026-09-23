const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const EmployeeProject = require('./EmployeeProject');

const Employee = sequelize.define('Employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Employee.associate = (models) => {
    Employee.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        as: 'department'
    });
    Employee.belongsToMany(models.Project, {
        through: models.EmployeeProject,
        foreignKey: 'employeeId',
        otherKey: 'projectId'
    });
}


module.exports = Employee;
