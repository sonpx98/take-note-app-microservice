import * as express from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from '@base/user-service/controllers';
import { wrapper } from '@base/user-service/routes/utils';

const router = express.Router();

router.post('/create-user', wrapper(createUser));
router.get('/get-all-users', wrapper(getAllUsers));
router.put('/update-user', wrapper(updateUser));
router.delete('/delete-user/:id', wrapper(deleteUser));

export default router;
