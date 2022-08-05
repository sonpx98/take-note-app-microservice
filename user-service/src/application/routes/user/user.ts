import * as express from 'express'

const router = express.Router();
router.get('/test', (req: express.Request, res: express.Response) => {
    res.json({success: true, message: 'successfully request from test'})
})

export default router

