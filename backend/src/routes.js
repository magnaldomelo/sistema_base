import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import NotificationController from './app/controllers/NotificationController';
import PessoaFisicaController from './app/controllers/PessoaFisicaController';
import PessoaJuridicaController from './app/controllers/PessoaJuridicaController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const uploads = multer(multerConfig);

routes.get('/', async (req, res) => {
    return res.json({ message: 'Foi' });
});

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/pessoa_fisica', PessoaFisicaController.store);
routes.post('/pessoa_juridica', PessoaJuridicaController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', uploads.single('file'), FileController.store);
routes.get('/providers', ProviderController.index);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
