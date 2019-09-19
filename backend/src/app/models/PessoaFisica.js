import Sequelize, { Model } from 'sequelize';

class PessoaFisica extends Model {
    static init(sequelize) {
        super.init(
            {
                cpf: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' });
    }
}

export default PessoaFisica;
