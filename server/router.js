import Router from 'express';
import TodoController from './TodoController.js';

const router = new Router();

router.post('/', TodoController.deleteMany);
router.post('/todos', TodoController.create);
router.get('/todos', TodoController.getAll);
router.put('/todos', TodoController.update);
router.delete('/todos/:id', TodoController.delete);

export default router;
