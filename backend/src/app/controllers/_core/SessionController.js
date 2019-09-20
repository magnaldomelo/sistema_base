import jwt from 'jsonwebtoken';

import User from '../../models/_core/User';
import File from '../../models/_core/File';
import authConfig from '../../../config/auth';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email },
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['path', 'url', 'id'],
                },
            ],
        });

        if (!user) {
            return res.status(401).json({ status: 'Usuário não encontrado!' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ status: 'Senha não informada!' });
        }

        const { id, nome, avatar, provider } = user;

        return res.json({
            user: {
                id,
                nome,
                email,
                provider,
                avatar,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
