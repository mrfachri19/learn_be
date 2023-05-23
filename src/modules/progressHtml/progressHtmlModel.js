const connection = require("../../config/mysql");

module.exports = {
  getProgressHtmlById: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM progress WHERE idUser = ?",
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
  PostProgressHtml: (data) =>
    new Promise((resolve, reject) => {
      const query = connection.query(
        "INSERT INTO progress SET ?",
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
  updateProgressHtml: (data, id) =>
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
};
