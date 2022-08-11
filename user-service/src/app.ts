import express from 'express';
import { registerRoutes } from '@base/user-service/route'
import dbInit from '@base/user-service/db/init';

const app = express();
const port = 3003;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

registerRoutes(app);
dbInit();

try {
  app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`);
  });
} catch (err: any) {
  console.log(`Error occured: ${err.message}`);
}
