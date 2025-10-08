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
exports.ProjectControllers = void 0;
const project_service_1 = require("./project.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
//Create Project
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = req.body;
        console.log("Project Body-------------------------------------: ", project);
        //will call service function to send data in db
        const result = yield project_service_1.ProjectServices.createProjectIntoDB(project);
        //Send Response
        res.status(200).json({
            message: "Project Added successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get All project
const getAllProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.ProjectServices.getAllProject();
        // Send response with the results
        res.status(200).json({
            message: "Project retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get Single project
const getSingleProject = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const projectId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    const result = yield project_service_1.ProjectServices.getSingleProjectFromDB(projectId);
    // Send response with the results
    res.status(200).json({
        message: "Project retrieved successfully",
        status: true,
        data: result,
    });
}));
//Delete Project
const deleteProject = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.params.id;
    const result = yield project_service_1.ProjectServices.deletProjectFromDB(projectId);
    //Send Response
    res.status(200).json({
        message: "Project deleted successfully ",
        status: true,
        data: result,
    });
}));
//Update Project
const updateProject = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const blogBody = req === null || req === void 0 ? void 0 : req.body;
    const result = yield project_service_1.ProjectServices.updateProjectFromDB(blogId, blogBody);
    //Send Response
    res.status(200).json({
        message: "Project updated successfully",
        status: true,
        data: result,
    });
}));
exports.ProjectControllers = {
    createProject,
    getAllProject,
    getSingleProject,
    deleteProject,
    updateProject,
};
