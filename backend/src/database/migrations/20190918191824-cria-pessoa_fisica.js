'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('core_pessoa_fisicas', {
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
        rg: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        rg_data_emissao: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        titulo_eleitoral_numero: {
            type: Sequelize.STRING(60),
            allowNull: true,
        },
        titulo_eleitoral_zona: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        titulo_eleitoral_secao: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        reservista_numero: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        certidao_nascimento: {
            type: Sequelize.STRING(60),
            allowNull: true,
        },
        certidao_nascimento_cartorio: {
            type: Sequelize.STRING(120),
            allowNull: true,
        },
        certidao_nascimento_livro: {
            type: Sequelize.STRING(60),
            allowNull: true,
        },
        certidao_nascimento_folha: {
            type: Sequelize.STRING(60),
            allowNull: true,
        },
        data_nascimento: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'Inativo',
            comment: "Os valores são definidos em status.js",
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
    return queryInterface.dropTable('core_pessoa_fisicas');
  }
};
