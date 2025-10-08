import { NextFunction, Request, RequestHandler, Response } from "express";
import { ProjectServices } from "./project.service";
import catchAsync from "../../utils/catchAsync";

//Create Project
const createProject: RequestHandler = async (req, res, next) => {
  try {
    const project = req.body;
    console.log("Project Body-------------------------------------: ", project);
    //will call service function to send data in db
    const result = await ProjectServices.createProjectIntoDB(project);

    //Send Response
    res.status(200).json({
      message: "Project Added successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All project
const getAllProject: RequestHandler = async (req, res, next) => {
  try {
    const result = await ProjectServices.getAllProject();

    // Send response with the results
    res.status(200).json({
      message: "Project retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get Single project
const getSingleProject: RequestHandler = catchAsync(async (req, res, next) => {
  const projectId = req?.params?.id;
  const result = await ProjectServices.getSingleProjectFromDB(projectId);

  // Send response with the results
  res.status(200).json({
    message: "Project retrieved successfully",
    status: true,
    data: result,
  });
});

//Delete Project
const deleteProject: RequestHandler = catchAsync(async (req, res, next) => {
  const projectId = req.params.id;
  const result = await ProjectServices.deletProjectFromDB(projectId);

  //Send Response
  res.status(200).json({
    message: "Project deleted successfully ",
    status: true,
    data: result,
  });
});

//Update Project
const updateProject: RequestHandler = catchAsync(async (req, res, next) => {
  const blogId = req.params.id;
  const blogBody = req?.body;
  const result = await ProjectServices.updateProjectFromDB(blogId, blogBody);

  //Send Response
  res.status(200).json({
    message: "Project updated successfully",
    status: true,
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProject,
  getSingleProject,
  deleteProject,
  updateProject,
};
