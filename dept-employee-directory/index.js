const sequelize = require('./config/database');
const {
    Department,
    Employee,
    Project,
    EmployeeProject
} = require('./models');

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection established.');

        await sequelize.sync();

        // Create Department
        // // Find existing department or create it
            const [department] = await Department.findOrCreate({
                where: {
                    name: 'EV'
                },
                defaults: {
                    location: 'Vesu'
                }
            });

            console.log('Department ID:', department.id);

            // Create Employee
            const employee = await Employee.create({
                name: 'Bhavin',
                email: 'Bhavin22@gmail.com',
                salary: 500000,
                departmentId: department.id
            });

            console.log('Employee created:', employee.id);

        // console.log('Employee created:', employee.id);

        // Create Project
        const project = await Project.create({
            name: 'Project A',
            deadline: '2024-12-31'
        });

        console.log('Project created:', project.id);

        // Add employee to project
        await employee.addProject(project, {
            through: {
                role: 'Consultant',
                hoursAllocated: 5
            }
        });

        console.log('Employee assigned to project successfully!');

    } catch (err) {
        console.error('Unable to connect or query:', err);
    } finally {
        await sequelize.close();
    }
}

main();