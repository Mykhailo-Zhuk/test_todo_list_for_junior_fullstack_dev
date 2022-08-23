import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: String, required: true },
});

export default mongoose.model('Todo', Todo);
