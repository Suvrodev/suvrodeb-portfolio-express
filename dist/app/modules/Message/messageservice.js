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
exports.messageService = void 0;
const message_model_1 = require("./message.model");
//Insert Message
const createEMessageIntoDB = (messageData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Message Data: ", messageData);
    const result = yield message_model_1.MessageModel.create(messageData);
    return result;
});
// Get all Message
const getAllMessageFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.MessageModel.find().sort({ createdAt: -1 });
    return result;
});
//delete Message
const deleteMessageFromDB = (messageId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Come Message id in Service: ", messageId);
    const result = yield message_model_1.MessageModel.findByIdAndDelete({ _id: messageId });
    return result;
});
//update Message
const updateMessageFromDB = (messageId, messageData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Come Message id in Service: ", messageId);
    console.log("Come Message Data in Service: ", messageId);
    //   const result = await EmailModel.findByIdAndDelete({ _id: emailId });
    const result = yield message_model_1.MessageModel.findByIdAndUpdate({ _id: messageId }, messageData, {
        new: true,
    });
    return result;
});
exports.messageService = {
    createEMessageIntoDB,
    getAllMessageFromDB,
    deleteMessageFromDB,
    updateMessageFromDB,
};
