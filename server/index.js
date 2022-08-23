import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';

const port = 5000;
const DB_URL =
  'mongodb+srv://qwerty:12345@cluster0.ah84y0e.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', router);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(port, () => {
      console.log('Server started on port ' + port);
    });
  } catch (e) {
    console.log(e);
  }
}
startApp();
