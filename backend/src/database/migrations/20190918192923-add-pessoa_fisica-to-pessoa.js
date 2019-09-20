module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('pessoa_fisicas', 'pessoa_id', {
            type: Sequelize.INTEGER,
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
        return queryInterface.removeColumn('pessoa_fisicas', 'pessoa_id');
    },
};
