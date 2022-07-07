import { Request, Response } from "express";
import userUpdatePasswordService from "../../services/user/userUpdatePassword.service";

const userUpdatePasswordController = async (req: Request, res: Response) => {
  const email = req.userEmail;

  const { password } = req.body;

  const user = await userUpdatePasswordService(email, password);

  return res.status(201).json({ message: "Password updated!" });
};

export default userUpdatePasswordController;
