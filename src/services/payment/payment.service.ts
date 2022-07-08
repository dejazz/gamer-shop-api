import { AppError } from "../../errors/appError.ts"

export const paymentService = (id:string,email:string,description:string,amount:string) => {


    if(!id || !email || !description || !amount){
        throw new AppError(404, "Product is not in the cart")
    }

    const item = {
        orderId: id,
        title: description,
        description: description,
        quantity: 1,
        currency_id: "BRL",
        unit_price: parseFloat(amount),
      }

      return item

}