"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "First name is required",
                    },
                },
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Last name is required",
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "Please provide a valid email address",
                    },
                    notEmpty: {
                        msg: "Email address is required",
                    },
                },
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Password is required",
                    },
                },
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users");
    },
};
