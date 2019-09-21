'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('core_users', 'avatar_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'core_files',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('core_users', 'avatar_id');
    },
};
