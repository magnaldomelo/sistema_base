'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('enderecos', 'municipio_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'municipios',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('enderecos', 'municipio_id');
    },
};
