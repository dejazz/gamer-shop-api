import { Request, Response } from 'express'

import cartAddProdService from '../../services/cart/cartAddProd.service'

const cartAddProdController = async (req: Request, res: Response) => {

   

        const { userEmail } = req

        const { product_id } = req.body

        const cartAdd = await cartAddProdService(product_id, userEmail)

        res.json(cartAdd)

   

   

}

export default cartAddProdController