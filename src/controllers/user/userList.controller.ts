import { Request, Response } from "express";
import listUsersService from "../../services/user/userList.service";


const userListController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.send(users);
};

export default userListController;
