'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('pessoa_fisicas', 'pessoa_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'pessoas',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('pessoa_fisicas', 'pessoa_id');
    },
};
