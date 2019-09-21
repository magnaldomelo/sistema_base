'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('core_pessoa_juridicas', 'representante_legal_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'core_pessoas',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('core_pessoa_juridicas', 'representante_legal_id');
    },
};
