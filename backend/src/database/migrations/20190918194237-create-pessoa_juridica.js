module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_juridicas', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        cnpj: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoa_juridicas');
  }
};
