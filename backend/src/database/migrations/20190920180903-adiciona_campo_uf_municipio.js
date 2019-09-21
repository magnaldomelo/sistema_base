'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('core_municipios', 'uf_id', {
            type: Sequelize.INTEGER,
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
        return queryInterface.removeColumn('core_municipios', 'uf_id');
    },
};
