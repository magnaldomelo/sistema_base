'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('core_uf', {
        id :{
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        uf_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
        },
        uf: {
            type: Sequelize.STRING(2),
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
    return queryInterface.dropTable('core_uf');
  }
};
