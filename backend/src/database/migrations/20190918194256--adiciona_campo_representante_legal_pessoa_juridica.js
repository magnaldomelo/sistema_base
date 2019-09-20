'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('pessoa_juridicas', 'representante_legal_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'pessoas',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('pessoa_juridicas', 'representante_legal_id');
    },
};
