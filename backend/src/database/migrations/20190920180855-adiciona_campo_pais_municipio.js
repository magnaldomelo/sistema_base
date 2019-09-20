'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('municipios', 'pais_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'pais',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('municipios', 'pais_id');
    },
};
