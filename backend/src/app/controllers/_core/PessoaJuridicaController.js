import * as Yup from 'yup';

import Pessoa from '../../models/_core/Pessoa';
import PessoaJuridica from '../../models/_core/PessoaJuridica';

class PessoaJuridicaController {
    async store(req, res){
        const {nome, cnpj } = req.body;

        const pessoa = await Pessoa.create({nome});

        if(!pessoa){
            return res.status(404).json({status: "Dados da Pessoa inconsistentes!"});
        }

        const { id } = pessoa;

        const pessoaJuridica = await PessoaJuridica.create({
            cnpj,
            pessoa_id: id,
        })

        if(!pessoaJuridica){
            return res.status(404).json({status: "Dados da Pessoa Jurídica inconsistentes!"});
        }

        const { pessoajuridica } = await Pessoa.findByPk(id, {
            include: [
                {
                    model: PessoaJuridica,
                    as: 'pessoajuridica',
                    attributes: ['cnpj'],
                }
            ]
        });

        return res.status(201).json({
            id,
            nome,
            pessoajuridica,
        });
    }
}

export default new PessoaJuridicaController();
