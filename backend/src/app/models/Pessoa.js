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
        this.hasOne(models.PessoaFisica, { foreignKey: 'pessoa_id', as: 'pessoafisica' });
        this.hasOne(models.PessoaJuridica, { foreignKey: 'pessoa_id', as: 'pessoajuridica' });
    }
}

export default Pessoa;
