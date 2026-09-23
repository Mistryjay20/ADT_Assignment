const { DataTypes } = require('sequelize');

module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('EmployeeProjects', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            employeeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },

            projectId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Projects',
                    key: 'id',
                },
                onDelete: 'CASCADE',
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

            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },

            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        });

        await queryInterface.addConstraint('EmployeeProjects', {
            fields: ['employeeId', 'projectId'],
            type: 'unique',
            name: 'unique_employee_project',
        });
    },

    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('EmployeeProjects');
    },
};
