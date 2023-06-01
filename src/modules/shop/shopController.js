/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const shopModel = require("./shopModel");
const helperWrapper = require("../../helper/wrapper");

module.exports = {
  getShopByidUser: async (req, res) => {
    try {
      const { idUser } = req.params;
      const result = await shopModel.getShopByideUser(idUser);
      if (result.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `data by id ${idUser} not found !`,
          null
        );
      }

      return helperWrapper.response(res, 200, "succes get data by id", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `bad request (${error.message})`,
        null
      );
    }
  },
  postShop: async (req, res) => {
    try {
      const {
        idUser,
        boy01,
        boy02,
        boy03,
        girl01,
        girl02,
        girl03,
      } = req.body;
      const setData = {
        idUser,
        boy01,
        boy02,
        boy03,
        girl01,
        girl02,
        girl03,
      };
      const result = await shopModel.PostShop(setData);
      return helperWrapper.response(res, 200, "Succes create data", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `bad request (${error.message})`,
        null
      );
    }
  },
  UpdateShop: async (req, res) => {
    try {
      const { idUser } = req.params;
      const checkId = await shopModel.getShopByideUser;
      if (checkId.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `data by id ${idUser} not found !`,
          null
        );
      }
      const {
        progress1,
        progress2,
        progress3,
        progress4,
        progress5,
        progress6,
      } = req.body;
      const setData = {
        progress1,
        progress2,
        progress3,
        progress4,
        progress5,
        progress6,
      };
      // untuk mengupdate salah satu field saja
      Object.keys(setData).forEach((data) => {
        if (!setData[data]) {
          delete setData[data];
        }
      });
      const result = await shopModel.updateKarakterShop(
        setData,
        idUser
      );
      return helperWrapper.response(res, 200, "succes update data", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `bad request (${error.message})`,
        null
      );
    }
  },
  UpdateKarakterShop: async (req, res) => {
    try {
      const { idUser } = req.params;
      const checkId = shopModel.getShopByideUser;
      if (checkId.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `data by id ${idUser} not found !`,
          null
        );
      }
      const {
        boy01,
        boy02,
        boy03,
        girl01,
        girl02,
        girl03,
      } = req.body;
      const setData = {
        boy01,
        boy02,
        boy03,
        girl01,
        girl02,
        girl03,
      };
      // untuk mengupdate salah satu field saja
      Object.keys(setData).forEach((data) => {
        if (!setData[data]) {
          delete setData[data];
        }
      });
      const result = await shopModel.updateKarakterShop(
        setData,
        idUser
      );
      return helperWrapper.response(res, 200, "succes update data", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `bad request (${error.message})`,
        null
      );
    }
  },
};
