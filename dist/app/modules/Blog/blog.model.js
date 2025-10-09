"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: { type: String, required: [true, "Title is required"] },
    content: { type: String, required: [true, "Content is required"] },
    image: { type: String, required: [true, "Image is required"] },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: {
            values: [
                "Frontend Development",
                "Backend Development",
                "Full-Stack Development",
                "UI/UX Design",
                "Database Management",
                "DevOps & Deployment",
                "API Development",
                "Web Security",
                "Performance Optimization",
                "Testing & Debugging",
                "Mobile Responsive Design",
                "SEO & Web Analytics",
                "Content Management Systems (CMS)",
                "E-commerce Development",
                "Web3 & Blockchain Development",
            ],
            message: "{VALUE} is not a valid category.",
        },
    },
}, { timestamps: true });
exports.BlogModel = (0, mongoose_1.model)("blogs", blogSchema);
