'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('core_contatos', {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        tipo: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'Telefone Residencial',
        },
        valor: {
            type: Sequelize.STRING(150),
            allowNull: false,
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
    return queryInterface.dropTable('core_contatos');
  }
};
