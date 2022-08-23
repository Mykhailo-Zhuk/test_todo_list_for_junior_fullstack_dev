import Todo from './Todo.js';

class TodoService {
  async create(todo) {
    const createdTodo = await Todo.create(todo);
    return createdTodo;
  }
  async getAll() {
    const todos = await Todo.find();
    return todos;
  }
  async update(todo) {
    if (!todo._id) {
      throw new Error('Id are not used');
    }
    const updateTodo = await Todo.findByIdAndUpdate(todo._id, todo, { new: true });
    return updateTodo;
  }
  async delete(id) {
    if (!id) {
      throw new Error('Id are not used');
    }
    const todo = await Todo.findByIdAndDelete(id);
    return todo;
  }
  async deleteMany(boolean) {
    if (boolean) {
      const todos = await Todo.deleteMany({});
      return todos;
    }
  }
}
export default new TodoService();
