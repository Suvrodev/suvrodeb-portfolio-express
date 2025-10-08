import { SortOrder } from "mongoose";
import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";

//create Project By Admin
const createProjectIntoDB = async (projectData: TProject) => {
  const result = await ProjectModel.create(projectData);
  return result;
};

///Get All Project
const getAllProject = async () => {
  const res = await ProjectModel.find();
  return res;
};

//Get Single Project
const getSingleProjectFromDB = async (projectId: string) => {
  try {
    const result = await ProjectModel.findOne({ _id: projectId });
    return result;
  } catch (error) {
    throw new Error("Project Not Found");
  }
};

//delete Project
const deletProjectFromDB = async (projectId: string) => {
  //main work
  const result = await ProjectModel.findByIdAndDelete({ _id: projectId });
  return result;
};

//Update Project
const updateProjectFromDB = async (
  projectId: string,
  projectData: TProject
) => {
  const result = await ProjectModel.findByIdAndUpdate(
    { _id: projectId },
    projectData,
    {
      new: true,
    }
  );
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProject,
  getSingleProjectFromDB,
  deletProjectFromDB,
  updateProjectFromDB,
};
