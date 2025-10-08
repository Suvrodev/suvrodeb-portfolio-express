import { Schema, model, connect, Types } from "mongoose";
import { TProject } from "./project.interface";

const projectShema = new Schema<TProject>(
  {
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
  },
  { timestamps: true, strict: "throw" } // This will make Mongoose throw an error for unknown fields
);

export const ProjectModel = model<TProject>("project", projectShema);
