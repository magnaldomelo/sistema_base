import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
    static associate(models) {
        this.hasOne(models.PessoaFisica, { foreignKey: 'pessoa_id', as: 'pessoa_fisica' });
    }
}

export default Pessoa;
