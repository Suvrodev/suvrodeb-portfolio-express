import { NextFunction, Request, RequestHandler, Response } from "express";

import { BlogServices } from "./blog.service";
import catchAsync from "../../utils/catchAsync";

//Create Blog
const createBlog: RequestHandler = catchAsync(async (req, res, next) => {
  const blog = req.body;

  //will call service function to send data in db
  const result = await BlogServices.createBlogIntoDB(blog);

  //Send Response
  res.status(200).json({
    message: "Blog Added successfully",
    success: true,
    data: result,
  });
});

// Get All Blog
const getAllBlog: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await BlogServices.getAllBlog();

  // Send response with the results
  res.status(200).json({
    message: "Blog retrieved successfully",
    status: true,
    data: result,
  });
});
// Get Single Blog
const getSingleBlog: RequestHandler = catchAsync(async (req, res, next) => {
  const blogId = req?.params?.id;
  const result = await BlogServices.getSingleBlogFromDB(blogId);

  // Send response with the results
  res.status(200).json({
    message: "Blog retrieved successfully",
    status: true,
    data: result,
  });
});
//Delete Blog
const deleteBlog: RequestHandler = catchAsync(async (req, res, next) => {
  const blogId = req.params.id;
  const result = await BlogServices.deleteBlogFromDB(blogId);

  //Send Response
  res.status(200).json({
    message: "Blog deleted successfully ",
    status: true,
    data: result,
  });
});

//Update Blog
const updateBlog: RequestHandler = catchAsync(async (req, res, next) => {
  const blogId = req.params.id;
  const blogBody = req?.body;
  const result = await BlogServices.updateBlogFromDB(blogId, blogBody);

  //Send Response
  res.status(200).json({
    message: "Blog updated successfully",
    status: true,
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
