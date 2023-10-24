"use strict";

const usersJSON = require('../../data/users.json')
const users = usersJSON.map(user => {
  return {
    id: user.id,
    name : user.name,
    surname: user.surname,
    email: user.email,
    password : user.password,
    image : user.image,
    birthday : user.birthday,
    genderId : user.genderId,
    roleId:user.roleId,

    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
