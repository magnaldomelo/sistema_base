import Pessoa from '../models/Pessoa';
import PessoaFisica from '../models/PessoaFisica';

class PessoaFisicaController {
    async store(req, res){
        const { nome, cpf } = req.body;

        const pessoaFisica = await PessoaFisica.create({
            cpf,
            pessoa: {
                nome,
            }
        });

            /*if(!pessoa){
                return res.status(500).json({erro: "Erro ao tentar criar Pessoa"});
            }

            const pessoaFisica = await PessoaFisica.create({
                cpf,
            });

            if(!pessoaFisica){
                return res.status(500).json({erro: "Erro ao tentar criar Pessoa Física"});
            }

            pessoaFisica.belongsTo(pessoa);

            return res.json(pessoaFisica);*/
        console.log('foi')
        return res.json(pessoaFisica)
    }
}

export default new PessoaFisicaController();
