"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const projectShema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Project name is required"] },
    liveurl: { type: String, required: [true, "Live URL is required"] },
    frontendrepo: {
        type: String,
    },
    backendrepo: {
        type: String,
    },
    image: { type: String, required: [true, "Image URL is required"] },
    descriptions: {
        type: String,
        required: [true, "Project description is required"],
    },
}, { timestamps: true, strict: "throw" } // This will make Mongoose throw an error for unknown fields
);
exports.ProjectModel = (0, mongoose_1.model)("project", projectShema);
