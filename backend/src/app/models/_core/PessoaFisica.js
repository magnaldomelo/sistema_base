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
}

export default PessoaFisica;
