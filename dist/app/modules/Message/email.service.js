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
exports.emailService = void 0;
const email_model_1 = require("./email.model");
//Insert Email
const createEmailIntoDB = (emailData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Email Data: ", emailData);
    const result = yield email_model_1.EmailModel.create(emailData);
    return result;
});
// Get all Email
const getAllEmailFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield email_model_1.EmailModel.find().sort({ createdAt: -1 });
    return result;
});
//delete Email
const deleteEmailFromDB = (emailId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Come Email id in Service: ", emailId);
    const result = yield email_model_1.EmailModel.findByIdAndDelete({ _id: emailId });
    return result;
});
//update Email
const updateEmailFromDB = (emailId, emailData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Come Email id in Service: ", emailId);
    console.log("Come Email Data in Service: ", emailData);
    //   const result = await EmailModel.findByIdAndDelete({ _id: emailId });
    const result = yield email_model_1.EmailModel.findByIdAndUpdate({ _id: emailId }, emailData, {
        new: true,
    });
    return result;
});
exports.emailService = {
    createEmailIntoDB,
    getAllEmailFromDB,
    deleteEmailFromDB,
    updateEmailFromDB,
};
