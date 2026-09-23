const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EmployeeProject = sequelize.define('EmployeeProject', {
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    isPrimary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    hoursAllocated: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

EmployeeProject.associate = (models) => {
    EmployeeProject.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
    });

    EmployeeProject.belongsTo(models.Project, {
        foreignKey: 'projectId',
    });
};                    

module.exports = EmployeeProject;
