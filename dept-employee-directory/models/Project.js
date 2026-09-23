const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    deadline: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
});

Project.associate = (models) => {
    Project.belongsToMany(models.Employee, {
        through: models.EmployeeProject,
        foreignKey: 'projectId',
        otherKey: 'employeeId'
    });
};
module.exports = Project;
