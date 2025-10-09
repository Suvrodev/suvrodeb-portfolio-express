"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth/auth"));
const authGuard_1 = require("../../utils/myAuth/authGuard");
const email_controller_1 = require("./email.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", email_controller_1.MessageControllers.createMessage);
router.get("/", (0, auth_1.default)(authGuard_1.rolesGuard.admin), email_controller_1.MessageControllers.getAllMessage);
router.delete("/:id", (0, auth_1.default)(authGuard_1.rolesGuard.admin), email_controller_1.MessageControllers.deleteMessage);
router.patch("/update/:id", (0, auth_1.default)(authGuard_1.rolesGuard.admin), email_controller_1.MessageControllers.updateMessage);
exports.MessageRoutes = router;
