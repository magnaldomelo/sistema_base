'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('core_pessoa_fisicas', 'rg_orgao_emissao_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'core_rg_orgaos',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('core_pessoa_fisicas', 'rg_orgao_emissao_id');
    },
};
