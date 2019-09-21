'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('core_pessoa_fisicas', 'rg_uf_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'core_uf',
                key: 'uf_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('core_pessoa_fisicas', 'rg_uf_id');
    },
};
