/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const progressCssModel = require("./progressCssModel");
const helperWrapper = require("../../helper/wrapper");

module.exports = {
  getProgressCssById: async (req, res) => {
    try {
      const { idUser } = req.params;
      const result = await progressCssModel.getProgressCssById(idUser);
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
  PostProgressCss: async (req, res) => {
    try {
      const { idUser, progress1, progress2, progress3 } = req.body;
      const setData = {
        idUser,
        progress1,
        progress2,
        progress3,
      };
      const result = await progressCssModel.PostProgressCss(setData);
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
  updateProgressCss: async (req, res) => {
    try {
      const { idUser } = req.params;
      const checkId = await progressCssModel.getProgressCssById;
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

      } = req.body;
      const setData = {
        progress1,
        progress2,
        progress3,
      };
      // untuk mengupdate salah satu field saja
      Object.keys(setData).forEach((data) => {
        if (!setData[data]) {
          delete setData[data];
        }
      });
      const result = await progressCssModel.updateProgressCss(setData, idUser);
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
