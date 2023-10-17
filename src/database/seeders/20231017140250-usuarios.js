"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          surname: "Valka",
          email: "admin@gmail.com",
          password:
            "$2a$10$FPoLdX945nudWo19Tpk0X.T.njfYXKQ0sqOG7ioez8.NYfTRAlR3S",
          image: null,
          birthday: null,
          genreId: null,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User",
          surname: "Valka",
          email: "user@gmail.com",
          password:
            "$2a$10$FPoLdX945nudWo19Tpk0X.T.njfYXKQ0sqOG7ioez8.NYfTRAlR3S",
          image: null,
          birthday: null,
          genreId: null,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
