import express from "express";
import { UserControllers } from "./user.controller";
import auth from "../../middleware/auth/auth";
import { rolesGuard } from "../../utils/myAuth/authGuard";

const router = express.Router();

router.post("/reg", UserControllers.registrationUser);
router.get("/", UserControllers.getAllUser);
router.get("/:email", UserControllers.getSingleUser);
router.delete("/:email", UserControllers.deleteUser);
router.put("/:email", UserControllers.deleteUser);
router.patch("/:email", UserControllers.updateUser);

export const UserRoutes = router;
