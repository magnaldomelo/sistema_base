module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('pessoas', 'pessoa_id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'pessoa_fisica',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('pessoas ', 'pessoa_id');
    },
};
