const express = require("express");

const Router = express.Router();
const shopController = require("./shopController");

Router.get("/:idUser", shopController.getShopByidUser);
Router.post("/", shopController.postShop);
Router.patch("/:idUser", shopController.UpdateKarakterShop);

module.exports = Router;
