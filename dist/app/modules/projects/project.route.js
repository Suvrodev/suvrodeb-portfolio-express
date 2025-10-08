"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const auth_1 = __importDefault(require("../../middleware/auth/auth"));
const authGuard_1 = require("../../utils/myAuth/authGuard");
const router = express_1.default.Router();
//will call controller function
router.post("/", (0, auth_1.default)(authGuard_1.rolesGuard.admin), project_controller_1.ProjectControllers.createProject);
router.get("/", project_controller_1.ProjectControllers.getAllProject);
router.get("/:id", project_controller_1.ProjectControllers.getSingleProject);
router.delete("/:id", project_controller_1.ProjectControllers.deleteProject);
router.patch("/update/:id", project_controller_1.ProjectControllers.updateProject);
exports.projectsRoutes = router;
