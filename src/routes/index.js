const express = require("express");

const Router = express.Router();
const authRoutes  = require("../modules/user/userRoutes");
const progressHtmlRoutes  = require("../modules/progressHtml/progressHtmlRoutes");
const progressCssroutes  = require("../modules/progresscss/progressCssRoutes");
const shopRoutes  = require("../modules/shop/shopRoutes");

Router.use("/auth", authRoutes);
Router.use("/progress-html", progressHtmlRoutes);
Router.use("/progress-css", progressCssroutes);
Router.use("/shop", shopRoutes);

module.exports = Router;
