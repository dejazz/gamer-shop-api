import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";


const userListOneController = async (req: Request, res: Response) => {
  const email = req.userEmail;

  const user = await userListOneService(email);

  return res.status(200).send(user);
};

export default userListOneController;
