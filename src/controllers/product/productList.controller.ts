import { Request, Response } from "express";

import productListService from "../../services/product/productList.service";

const productListController = async (req: Request, res: Response) => {

    const productList = await productListService()

    return res.json(productList)

}

export default productListController