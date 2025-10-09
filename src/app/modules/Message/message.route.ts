import express from "express";

import auth from "../../middleware/auth/auth";
import { rolesGuard } from "../../utils/myAuth/authGuard";
import { MessageControllers } from "./email.controller";

const router = express.Router();

//will call controller function
router.post("/", MessageControllers.createMessage);
router.get("/", auth(rolesGuard.admin), MessageControllers.getAllMessage);
router.delete("/:id", auth(rolesGuard.admin), MessageControllers.deleteMessage);
router.patch(
  "/update/:id",
  auth(rolesGuard.admin),
  MessageControllers.updateMessage
);

export const MessageRoutes = router;
