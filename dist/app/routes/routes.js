"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const project_route_1 = require("../modules/projects/project.route");
const message_route_1 = require("../modules/Message/message.route");
const resume_route_1 = require("../modules/resume/resume.route");
const blog_route_1 = require("../modules/Blog/blog.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/projects",
        route: project_route_1.projectsRoutes,
    },
    {
        path: "/blog",
        route: blog_route_1.blogRoutes,
    },
    {
        path: "/message",
        route: message_route_1.MessageRoutes,
    },
    {
        path: "/resume",
        route: resume_route_1.resumeRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
