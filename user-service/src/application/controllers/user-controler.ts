import * as express from 'express';
import { createUserRepo, deleteUserRepo, getAllUsersRepo, updateUserRepo } from '@base/repositories';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  await getAllUsersRepo()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
};

export const createUser = async (req: express.Request, res: express.Response) => {
  const { body } = req;

  await createUserRepo({ data: body })
    .then(() => res.status(200).json({ message: 'done' }))
    .catch((err) => res.status(400).json(err));
};

export const updateUser = async (req: express.Request, res: express.Response) => {
  const { body } = req;

  await updateUserRepo({ data: body })
    .then(() => res.status(200).json({ message: 'done' }))
    .catch((err) => res.status(400).json(err));
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  if (id && isNaN(+id)) res.status(400).json({ message: 'invalid id' });

  await deleteUserRepo(+id)
    .then(() => res.status(200).json({ message: 'done' }))
    .catch((err) => res.status(400).json(err));
};
