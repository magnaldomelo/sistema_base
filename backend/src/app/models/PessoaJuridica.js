import Sequelize, { Model } from 'sequelize';

class PessoaJuridica extends Model {
    static init(sequelize) {
        super.init(
            {
                cnpj: Sequelize.STRING,
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

export default PessoaJuridica;
