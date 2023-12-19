"use strict";

const { hashSync } = require('bcryptjs');
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

const userEric = {
  id : 5,
  name : "Eric",
    surname: "Mena",
    email: "eric@gmail.com",
    password : hashSync("123123",10),
    image : "eric_foto.png",
    birthday : null,
    genderId : null,
    roleId: 1,
    createdAt : new Date,
    updatedAt : new Date
}

const regularUser = {
  id : 6,
  name : "Usuario",
    surname: "Regular",
    email: "user@gmail.com",
    password : hashSync("123123",10),
    image : "user_image_default.png",
    birthday : null,
    genderId : null,
    roleId: 2,
    createdAt : new Date,
    updatedAt : new Date
}

users.push(userEric)
users.push(regularUser)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
