const connection = require("../../config/mysql");

module.exports = {
  getShopByideUser: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM shop WHERE idUser = ?",
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(`SQL : ${err.sqlMessage}`));
          }
        }
      );
    }),
  PostShop: (data) =>
    new Promise((resolve, reject) => {
      const query = connection.query(
        "INSERT INTO shop SET ?",
        data,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...data,
            };
            resolve(newResult);
          } else {
            reject(new Error(`SQL : ${error.sqlMessage}`));
          }
        }
      );
      // eslint-disable-next-line no-console
      console.log(query.sql);
    }),
  updateShop: (data, id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "UPDATE progress SET ? WHERE idUser = ?",
        [data, id],
        (error) => {
          if (!error) {
            const newResult = {
              id,
              ...data,
            };
            resolve(newResult);
          } else {
            reject(new Error(`SQL : ${error.sqlMessage}`));
          }
        }
      );
    }),
    updateKarakterShop: (data, id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "UPDATE shop SET ? WHERE idUser = ?",
        [data, id],
        (error) => {
          if (!error) {
            const newResult = {
              id,
              ...data,
            };
            resolve(newResult);
          } else {
            reject(new Error(`SQL : ${error.sqlMessage}`));
          }
        }
      );
    }),
};
