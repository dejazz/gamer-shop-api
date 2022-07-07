import { Router } from "express";


import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller"
import userListOneController from "../controllers/user/userListOne.controller"
import userLoginController from "../controllers/user/userLogin.controller"
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller"
import userUpdateController from "../controllers/user/userUpdatePassword.controller"

const routes = Router()

export const userRoutes = () => {
    
    routes.post('/', userCreateController)
    routes.post('/login', userLoginController)
    routes.get('/',  userListController)
    routes.get('/me',  userListOneController)
    routes.delete('/me',  userDeleteSelfController)
    routes.patch('/me/updatePassword',  userUpdateController)

    return routes
}

