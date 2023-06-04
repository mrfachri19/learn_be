const express = require("express");

const Router = express.Router();
const progressCssController = require("./progressCssController");

Router.get("/:idUser", progressCssController.getProgressCssById);
Router.post("/", progressCssController.PostProgressCss);
Router.patch("/:idUser", progressCssController.updateProgressCss);

module.exports = Router;
