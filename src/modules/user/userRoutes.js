const express = require("express");

const Router = express.Router();
const authController = require("./userController");

Router.post("/register",  authController.register);
Router.post("/login", authController.login);
Router.get("/:id", authController.getUserId);
Router.get("/", authController.getAllUser);
Router.patch("/:id", authController.updateUser);


module.exports = Router;