import { Router } from "express";
import { studentRoutes } from "../modules/students/student.route";
import { subjectRoutes } from "../modules/subject/subject.route";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { projectsRoutes } from "../modules/projects/project.route";
import { MessageRoutes } from "../modules/Message/message.route";

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
    path: "/subject",
    route: subjectRoutes,
  },
  {
    path: "/message",
    route: MessageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
