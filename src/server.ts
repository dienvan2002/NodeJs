import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';

const app = express();

const customLogger = (message) => (req, res, next) => {
  console.log(`hello from ${message}`);
  next();
  
}

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger('custom logger'));

app.use((req, res, next) => {
  req.shhhh_secret = 'doggy';
  next();
})


app.get('/', (req, res) => {
  console.log('hello from server');
  res.status(200)
  res.json({ message: 'hello from server' });
});

app.use('/api',protect, router);

export default app;
