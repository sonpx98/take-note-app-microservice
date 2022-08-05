import express from 'express'
import { registerRoutes } from './application/routes';

const app = express()
const port = 3003;

registerRoutes(app)

app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`)
})
