import { NextFunction, Request, RequestHandler, Response } from "express";
import { resumeServices } from "./resume.service";
import catchAsync from "../../utils/catchAsync";

///Add Resume
const addResume: RequestHandler = catchAsync(async (req, res, next) => {
  const serviceData = req.body;
  const result = await resumeServices.addResumeIntoDB(serviceData);
  res.status(201).json({
    success: true,
    message: "Resume Added successfully",
    statusCode: 201,
    data: result,
  });
});

//Get All Resume
const getAllResume: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await resumeServices.getAllResumeFromDB();
  res.status(201).json({
    success: true,
    message: "Resume Retrived successfully",
    statusCode: 201,
    data: result,
  });
});
//Get Specific Resume
const getSpecificResume: RequestHandler = catchAsync(async (req, res, next) => {
  const resumeId = req?.params?.resumeId;
  console.log("Resume id: ", resumeId);
  const result = await resumeServices.getSpecificResumeFromDB(resumeId);
  console.log("Result: ", result);
  res.status(201).json({
    success: true,
    message: "Service Retrived successfully",
    statusCode: 201,
    data: result,
  });
});

//Delete Resume
const deleteResume: RequestHandler = catchAsync(async (req, res, next) => {
  const resumeId = req?.params?.resumeId;
  console.log("Resume id: ", resumeId);
  const result = await resumeServices.deleteResumeFromDB(resumeId);
  console.log("Result: ", result);
  res.status(201).json({
    success: true,
    message: "Resume Deleted successfully",
    statusCode: 201,
    data: result,
  });
});

//Update Resume
const updateResume: RequestHandler = catchAsync(async (req, res, next) => {
  console.log("Come Here: ========================================");
  const resumeId = req.params.resumeId;
  const resume = req.body;
  console.log("Resume id: ", resumeId);
  console.log("Resume body: ", resume);

  const result = await resumeServices.updateResumeIntoDB(resumeId, resume);

  //Send Response
  res.status(200).json({
    message: "Resume updated successfully",
    status: true,
    data: result,
  });
});

export const ResumeController = {
  addResume,
  getAllResume,
  getSpecificResume,
  deleteResume,
  updateResume,
};
