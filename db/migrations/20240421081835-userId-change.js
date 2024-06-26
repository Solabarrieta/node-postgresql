'use strict';

const { CUSTOMER_TABLE } = require('./../models/customer.model');
const { DataTypes } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER
    })
  },
  async down(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: true,
      unique: false,
      type: DataTypes.INTEGER // También puedes usar Sequelize en lugar de DataTypes aquí
    });
  }
};
