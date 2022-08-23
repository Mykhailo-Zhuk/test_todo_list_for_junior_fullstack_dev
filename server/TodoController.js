import TodoService from './TodoService.js';

class TodoController {
  async create(req, res) {
    try {
      const todo = await TodoService.create(req.body);
      res.json(todo);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const updatedTodo = await TodoService.update(req.body);
      return res.json(updatedTodo);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const todo = await TodoService.delete(req.params.id);
      return res.json(todo);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async deleteMany(req, res) {
    try {
      const todos = await TodoService.deleteMany(req.body);
      return res.json(todos);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new TodoController();
