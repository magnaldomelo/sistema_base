'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_juridicas', {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        cnpj: {
            type: Sequelize.STRING(14),
            allowNull: false,
        },
        inscricao_estadual: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'ISENTO',
        },
        inscricao_estadual_uf: {
            type: Sequelize.STRING(2),
            allowNull: true,
        },
        inscricao_municipal: {
            type: Sequelize.STRING(20),
            allowNull: true,
            defaultValue: 'NÃO POSSUI',
        },
        inscricao_municipal_municipio_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        ramo_atividade: {
            type: Sequelize.STRING(60),
            allowNull: true,
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
    return queryInterface.dropTable('pessoa_juridicas');
  }
};
