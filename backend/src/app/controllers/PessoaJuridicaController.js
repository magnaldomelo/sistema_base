import Pessoa from '../models/Pessoa';
import PessoaJuridica from '../models/PessoaJuridica';

class PessoaJuridicaController {
    async store(req, res){
        const {nome, cnpj } = req.body;

        const pessoa = await Pessoa.create({nome});

        if(!pessoa){
            return res.status(500).json({erro: "Erro ao tentar criar Pessoa"});
        }

        const { id } = pessoa;

        const pessoaJuridica = await PessoaJuridica.create({
            cnpj,
            pessoa_id: id,
        })

        if(!pessoaJuridica){
            return res.status(500).json({erro: "Erro ao tentar criar Pessoa Jurídica"});
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

        return res.json({
            id,
            nome,
            pessoajuridica,
        });
    }
}

export default new PessoaJuridicaController();
