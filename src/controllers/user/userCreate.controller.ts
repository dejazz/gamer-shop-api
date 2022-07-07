import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";
import "express-async-errors";

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const newUser = await userCreateService({ name, email, password });

  return res.status(201).send(newUser);
};

export default userCreateController;
