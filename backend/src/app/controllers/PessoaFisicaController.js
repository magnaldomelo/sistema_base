import Pessoa from '../models/Pessoa';
import PessoaFisica from '../models/PessoaFisica';

class PessoaFisicaController {
    async store(req, res){
        const { nome, cpf } = req.body;

        const pessoa = await Pessoa.create({nome});

        if(!pessoa){
            return res.status(500).json({erro: "Erro ao tentar criar Pessoa"});
        }

        const { id } = pessoa;

        const pessoaFisica = await PessoaFisica.create({
            cpf,
            pessoa_id: id,
        });

        if(!pessoaFisica){
            return res.status(500).json({erro: "Erro ao tentar criar Pessoa Física"});
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

        return res.json({
            id,
            nome,
            pessoafisica,
        });
    }
}

export default new PessoaFisicaController();
