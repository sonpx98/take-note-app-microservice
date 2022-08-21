import express from 'express';

import dotenv from 'dotenv';
dotenv.config({ path: process.cwd() + '/.env' });

import { registerRoutes } from '@base/user-service/route';
import dbInit from '@base/user-service/db/init';

const app = express();
const port = 3003;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
  });

  dbInit().then(() => registerRoutes(app));
} catch (err: any) {
  console.log(`Error occured: ${err.message}`);
}
