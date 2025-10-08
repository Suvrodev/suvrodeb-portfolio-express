import express from "express";
import { ProjectControllers } from "./project.controller";
import auth from "../../middleware/auth/auth";
import { rolesGuard } from "../../utils/myAuth/authGuard";

const router = express.Router();

//will call controller function
router.post("/", auth(rolesGuard.admin), ProjectControllers.createProject);
router.get("/", ProjectControllers.getAllProject);
router.get("/:id", ProjectControllers.getSingleProject);
router.delete("/:id", ProjectControllers.deleteProject);
router.patch("/update/:id", ProjectControllers.updateProject);

export const projectsRoutes = router;
