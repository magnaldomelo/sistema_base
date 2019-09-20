'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecos', {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        logradouro: {
            type: Sequelize.STRING(150),
            allowNull: false,
        },
        numero: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        bairro: {
            type: Sequelize.STRING(150),
            allowNull: true,
        },
        complemento: {
            type: Sequelize.STRING(150),
            allowNull: true,
        },
        referencia: {
            type: Sequelize.STRING(150),
            allowNull: true,
        },
        tipo: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('enderecos');
  }
};
