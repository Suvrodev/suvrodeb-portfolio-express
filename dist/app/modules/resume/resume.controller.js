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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeController = void 0;
const resume_service_1 = require("./resume.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
///Add Resume
const addResume = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceData = req.body;
    const result = yield resume_service_1.resumeServices.addResumeIntoDB(serviceData);
    res.status(201).json({
        success: true,
        message: "Resume Added successfully",
        statusCode: 201,
        data: result,
    });
}));
//Get All Resume
const getAllResume = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield resume_service_1.resumeServices.getAllResumeFromDB();
    res.status(201).json({
        success: true,
        message: "Resume Retrived successfully",
        statusCode: 201,
        data: result,
    });
}));
//Get Specific Resume
const getSpecificResume = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const resumeId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.resumeId;
    console.log("Resume id: ", resumeId);
    const result = yield resume_service_1.resumeServices.getSpecificResumeFromDB(resumeId);
    console.log("Result: ", result);
    res.status(201).json({
        success: true,
        message: "Service Retrived successfully",
        statusCode: 201,
        data: result,
    });
}));
//Delete Resume
const deleteResume = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const resumeId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.resumeId;
    console.log("Resume id: ", resumeId);
    const result = yield resume_service_1.resumeServices.deleteResumeFromDB(resumeId);
    console.log("Result: ", result);
    res.status(201).json({
        success: true,
        message: "Resume Deleted successfully",
        statusCode: 201,
        data: result,
    });
}));
//Update Resume
const updateResume = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Come Here: ========================================");
    const resumeId = req.params.resumeId;
    const resume = req.body;
    console.log("Resume id: ", resumeId);
    console.log("Resume body: ", resume);
    const result = yield resume_service_1.resumeServices.updateResumeIntoDB(resumeId, resume);
    //Send Response
    res.status(200).json({
        message: "Resume updated successfully",
        status: true,
        data: result,
    });
}));
exports.ResumeController = {
    addResume,
    getAllResume,
    getSpecificResume,
    deleteResume,
    updateResume,
};
