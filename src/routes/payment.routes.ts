import { Router } from "express";
import { paymentController } from "../controllers/payment/payment.controller";

const router = Router();
export const paymentRoute = () => {
  router.get("/checkout/:id/:email/:description/:amount", paymentController)
  router.get("/success", (req, res) => {
    return res.render("success_screen");
  });
  
  router.get("/pending", (req, res) => {
    return res.render("pending_screen");
  });
  
  router.get("/failure", (req, res) => {
    return res.render("failure_screen");
  });
  
  return router;
};
