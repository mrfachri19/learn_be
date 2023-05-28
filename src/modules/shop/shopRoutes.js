const express = require("express");

const Router = express.Router();
const shopController = require("./shopController");

Router.get("/:idUser", shopController.getShopByidUser);
Router.post("/", shopController.postShop);
Router.patch("/:id_auth", shopController.UpdateShop);

module.exports = Router;
