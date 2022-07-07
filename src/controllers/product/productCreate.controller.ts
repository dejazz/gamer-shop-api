import { Request, Response } from 'express'
import productCreateService from '../../services/product/productCreate.service'

const productCreateController = async (req: Request, res: Response) => {



        const data = req.body

        const product = await productCreateService(data)

        return res.status(201).json(product)

 
}

export default productCreateController