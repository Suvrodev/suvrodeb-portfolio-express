"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRoutes = void 0;
const express_1 = __importDefault(require("express"));
const email_controller_1 = require("./email.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", email_controller_1.EmailControllers.createEmail);
router.get("/", email_controller_1.EmailControllers.getAllEmail);
router.delete("/:id", email_controller_1.EmailControllers.deleteEmail);
router.patch("/update/:id", email_controller_1.EmailControllers.updateEmail);
exports.emailRoutes = router;
