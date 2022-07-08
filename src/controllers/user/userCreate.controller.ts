import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";
import "express-async-errors";

const userCreateController = async (req: Request, res: Response) => {
  const data = req.body;

  const newUser = await userCreateService(data);

  return res.status(201).send(newUser);
};

export default userCreateController;
