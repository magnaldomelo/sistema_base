import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/_core/User';
import File from '../app/models/_core/File';
import Pessoa from '../app/models/_core/Pessoa';
import PessoaFisica from '../app/models/_core/PessoaFisica';
import PessoaJuridica from '../app/models/_core/PessoaJuridica';

const models = [User, File, Pessoa, PessoaFisica, PessoaJuridica];

class Database {
    constructor() {
        this.init();
        //this.mongo();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://localhost:27017/gobarber',
            { useNewUrlParser: true, useFindAndModify: true }
        );
    }
}

export default new Database();
