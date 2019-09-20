import Pessoa from '../models/Pessoa';
import PessoaFisica from '../models/PessoaFisica';

class PessoaFisicaController {
    async store(req, res){
        try{
            const { nome, cpf } = req.body;

            const pessoa = await Pessoa.create({
                nome,
            });

            return res.json(pessoa)
        }catch(err){
            return res.status(400).json({ok: true})
        }


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
    }
}

export default new PessoaFisicaController();
