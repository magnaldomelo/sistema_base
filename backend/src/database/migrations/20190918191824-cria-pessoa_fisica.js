'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_fisicas', {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        cpf: {
            type: Sequelize.STRING(11),
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'Inativo',
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
    return queryInterface.dropTable('pessoa_fisicas');
  }
};
