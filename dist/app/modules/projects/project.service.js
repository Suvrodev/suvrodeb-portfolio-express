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
exports.ProjectServices = void 0;
const project_model_1 = require("./project.model");
//create Project By Admin
const createProjectIntoDB = (projectData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.ProjectModel.create(projectData);
    return result;
});
///Get All Project
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield project_model_1.ProjectModel.find();
    return res;
});
//Get Single Project
const getSingleProjectFromDB = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_model_1.ProjectModel.findOne({ _id: projectId });
        return result;
    }
    catch (error) {
        throw new Error("Project Not Found");
    }
});
//delete Project
const deletProjectFromDB = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    const result = yield project_model_1.ProjectModel.findByIdAndDelete({ _id: projectId });
    return result;
});
//Update Project
const updateProjectFromDB = (projectId, projectData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.ProjectModel.findByIdAndUpdate({ _id: projectId }, projectData, {
        new: true,
    });
    return result;
});
exports.ProjectServices = {
    createProjectIntoDB,
    getAllProject,
    getSingleProjectFromDB,
    deletProjectFromDB,
    updateProjectFromDB,
};
