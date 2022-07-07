import { Request, Response } from 'express'
import buyCreateService from '../../services/buy/buyCreate.service'

const buyCreateController = async (req: Request, res: Response) => {



        const { userEmail } = req

        const buy = await buyCreateService(userEmail)

        return res.status(201).json(buy)

}

export default buyCreateController