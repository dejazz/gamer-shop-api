import { Request, Response } from "express";
import { AppError } from "../../errors/appError.ts";
import { paymentService } from "../../services/payment/payment.service";
const mercadopago = require("mercadopago");
export const paymentController = async (req: Request, res: Response) => {
  
  const { id, email, description, amount } = req.params;

  const getFullUrl = (req: Request) => {
    const url = req.protocol + "://" + req.get("host");
    return url;
  };

  const item = paymentService(id, email, description, amount);

  mercadopago.configure({
    sandbox: process.env.SANDBOX == "true" ? true : false,
    access_token: process.env.MP_ACCESS_TOKEN,
  })

  const purchaseOrder = {
    items: [item],
    payer: {
      email: email,
    },
    auto_return: "all",
    external_reference: id,
    back_urls: {
      success: getFullUrl(req) + "/payments/success",
      pending: getFullUrl(req) + "/payments/pending",
      failure: getFullUrl(req) + "/payments/failure",
    },
  };
  console.log(purchaseOrder)
  try {
    const preference = await mercadopago.preferences.create(purchaseOrder);
    console.log(preference)
    return res.json(`${preference.body. sandbox_init_point}`);
  } catch (err) {
    if (err instanceof AppError) {
       
        return res.send(err.message);
    }
  }

  
}
