import { Router } from "express";

import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { projectsRoutes } from "../modules/projects/project.route";
import { MessageRoutes } from "../modules/Message/message.route";
import { resumeRoutes } from "../modules/resume/resume.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/projects",
    route: projectsRoutes,
  },

  {
    path: "/message",
    route: MessageRoutes,
  },
  {
    path: "/resume",
    route: resumeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
