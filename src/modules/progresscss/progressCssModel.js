const connection = require("../../config/mysql");

module.exports = {
  getProgressCssById: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM progresscss WHERE idUser = ?",
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
  PostProgressCss: (data) =>
    new Promise((resolve, reject) => {
      const query = connection.query(
        "INSERT INTO progresscss SET ?",
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
  updateProgressCss: (data, id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "UPDATE progresscss SET ? WHERE idUser = ?",
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
