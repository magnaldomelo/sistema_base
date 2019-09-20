'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('municipios', 'uf_id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'uf',
                key: 'uf_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('municipios', 'uf_id');
    },
};
