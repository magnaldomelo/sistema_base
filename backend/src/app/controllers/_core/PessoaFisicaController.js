import * as Yup from 'yup';

import Pessoa from '../../models/_core/Pessoa';
import PessoaFisica from '../../models/_core/PessoaFisica';

class PessoaFisicaController {
    async store(req, res){
        const { nome, cpf } = req.body;

        const pessoa = await Pessoa.create({nome});

        if(!pessoa){
            return res.status(404).json({status: "Dados da Pessoa inconsistentes!"});
        }

        const { id } = pessoa;

        const pessoaFisica = await PessoaFisica.create({
            cpf,
            pessoa_id: id,
        });

        if(!pessoaFisica){
            return res.status(404).json({status: "Dados da Pessoa Jurídica inconsistentes!"});
        }

        const { pessoafisica } = await Pessoa.findByPk(id, {
            include: [
                {
                    model: PessoaFisica,
                    as: 'pessoafisica',
                    attributes: ['cpf'],
                }
            ]
        });

        return res.status(201).json({
            id,
            nome,
            pessoafisica,
        });
    }
}

export default new PessoaFisicaController();
