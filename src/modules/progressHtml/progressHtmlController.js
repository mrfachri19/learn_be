/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const progressHtmlModel = require("./progressHtmlModel");
const helperWrapper = require("../../helper/wrapper");

module.exports = {
  getProgressHtmlById: async (req, res) => {
    try {
      const { idUser } = req.params;
      const result = await progressHtmlModel.getProgressHtmlById(idUser);
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
  PostProgressHtml: async (req, res) => {
    try {
      const {
        idUser,
        progress1,
        progress2,
        progress3,
        progress4,
        progress5,
        progress6,
      } = req.body;
      const setData = {
        idUser,
        progress1,
        progress2,
        progress3,
        progress4,
        progress5,
        progress6,
      };
      const result = await progressHtmlModel.PostProgressHtml(setData);
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
  updateProgressHtml: async (req, res) => {
    try {
      const { idUser } = req.params;
      const checkId = await progressHtmlModel.getProgressHtmlById;
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
      const result = await progressHtmlModel.updateProgressHtml(
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
