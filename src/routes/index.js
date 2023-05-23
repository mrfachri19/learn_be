const express = require("express");

const Router = express.Router();
const authRoutes  = require("../modules/auth/authRoutes");
const progressHtmlRoutes  = require("../modules/progressHtml/progressHtmlRoutes");

Router.use("/auth", authRoutes);
Router.use("/progress-html", progressHtmlRoutes);

module.exports = Router;
