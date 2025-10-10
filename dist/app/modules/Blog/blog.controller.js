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
exports.BlogControllers = void 0;
const blog_service_1 = require("./blog.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
//Create Blog
const createBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = req.body;
    //will call service function to send data in db
    const result = yield blog_service_1.BlogServices.createBlogIntoDB(blog);
    //Send Response
    res.status(200).json({
        message: "Blog Added successfully",
        success: true,
        data: result,
    });
}));
// Get All Blog
const getAllBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogServices.getAllBlog();
    // Send response with the results
    res.status(200).json({
        message: "Blog retrieved successfully",
        status: true,
        data: result,
    });
}));
// Get Single Blog
const getSingleBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const blogId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    const result = yield blog_service_1.BlogServices.getSingleBlogFromDB(blogId);
    // Send response with the results
    res.status(200).json({
        message: "Blog retrieved successfully",
        status: true,
        data: result,
    });
}));
//Delete Blog
const deleteBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const result = yield blog_service_1.BlogServices.deleteBlogFromDB(blogId);
    //Send Response
    res.status(200).json({
        message: "Blog deleted successfully ",
        status: true,
        data: result,
    });
}));
//Update Blog
const updateBlog = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const blogBody = req === null || req === void 0 ? void 0 : req.body;
    const result = yield blog_service_1.BlogServices.updateBlogFromDB(blogId, blogBody);
    //Send Response
    res.status(200).json({
        message: "Blog updated successfully From Cart",
        status: true,
        data: result,
    });
}));
exports.BlogControllers = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog,
};
