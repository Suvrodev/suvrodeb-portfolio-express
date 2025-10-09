"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageControllers = void 0;
const messageservice_1 = require("./messageservice");
//Create Message
const createMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = req.body;
        console.log("Come Message: ", message);
        const result = yield messageservice_1.messageService.createEMessageIntoDB(message);
        //Send Response
        res.status(200).json({
            message: "Email Sent successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get All Message
const getAllMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield messageservice_1.messageService.getAllMessageFromDB();
        // Send response with the results
        res.status(200).json({
            message: "Email retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Message
const deleteMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messageId = req.params.id;
        console.log("Message id: ", messageId);
        const result = yield messageservice_1.messageService.deleteMessageFromDB(messageId);
        //Send Response
        res.status(200).json({
            message: "Email deleted successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Email
const updateMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messageId = req.params.id;
        const messageBody = req === null || req === void 0 ? void 0 : req.body;
        console.log("Message id: ", messageId);
        const result = yield messageservice_1.messageService.updateMessageFromDB(messageId, messageBody);
        //Send Response
        res.status(200).json({
            message: "Email Updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.MessageControllers = {
    createMessage,
    getAllMessage,
    deleteMessage,
    updateMessage,
};
