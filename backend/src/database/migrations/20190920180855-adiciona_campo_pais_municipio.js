'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('core_municipios', 'pais_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'core_pais',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('core_municipios', 'pais_id');
    },
};
