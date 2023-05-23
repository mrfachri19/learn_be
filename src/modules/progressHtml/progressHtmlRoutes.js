const express = require("express");

const Router = express.Router();
const progressHtmlController = require("./progressHtmlController");

Router.get("/:idUser", progressHtmlController.getProgressHtmlById);
Router.post("/", progressHtmlController.PostProgressHtml);
Router.patch("/:idUser", progressHtmlController.updateProgressHtml);

module.exports = Router;
