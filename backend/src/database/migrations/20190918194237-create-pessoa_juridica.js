'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_juridica', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        cnpj: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoa_juridica');
  }
};
