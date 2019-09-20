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
}

export default PessoaJuridica;
