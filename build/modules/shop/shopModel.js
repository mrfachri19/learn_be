const connection = require("../../config/mysql");
module.exports = {
  getShopByideUser: id => new Promise((resolve, reject) => {
    connection.query("SELECT * FROM shop WHERE idUser = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(`SQL : ${err.sqlMessage}`));
      }
    });
  }),
  PostShop: data => new Promise((resolve, reject) => {
    const query = connection.query("INSERT INTO shop SET ?", data, (error, result) => {
      if (!error) {
        const newResult = {
          id: result.insertId,
          ...data
        };
        resolve(newResult);
      } else {
        reject(new Error(`SQL : ${error.sqlMessage}`));
      }
    });
    // eslint-disable-next-line no-console
    console.log(query.sql);
  }),
  updateShop: (data, id) => new Promise((resolve, reject) => {
    connection.query("UPDATE progress SET ? WHERE id_auth = ?", [data, id], error => {
      if (!error) {
        const newResult = {
          id,
          ...data
        };
        resolve(newResult);
      } else {
        reject(new Error(`SQL : ${error.sqlMessage}`));
      }
    });
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRTaG9wQnlpZGVVc2VyIiwiaWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0IiwiRXJyb3IiLCJzcWxNZXNzYWdlIiwiUG9zdFNob3AiLCJkYXRhIiwiZXJyb3IiLCJuZXdSZXN1bHQiLCJpbnNlcnRJZCIsImNvbnNvbGUiLCJsb2ciLCJzcWwiLCJ1cGRhdGVTaG9wIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9zaG9wTW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29ubmVjdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWcvbXlzcWxcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRTaG9wQnlpZGVVc2VyOiAoaWQpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICAgICAgXCJTRUxFQ1QgKiBGUk9NIHNob3AgV0hFUkUgaWRVc2VyID0gP1wiLFxyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgU1FMIDogJHtlcnIuc3FsTWVzc2FnZX1gKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSksXHJcbiAgUG9zdFNob3A6IChkYXRhKSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IGNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBzaG9wIFNFVCA/XCIsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5pbnNlcnRJZCxcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKG5ld1Jlc3VsdCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBTUUwgOiAke2Vycm9yLnNxbE1lc3NhZ2V9YCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgY29uc29sZS5sb2cocXVlcnkuc3FsKTtcclxuICAgIH0pLFxyXG4gIHVwZGF0ZVNob3A6IChkYXRhLCBpZCkgPT5cclxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29ubmVjdGlvbi5xdWVyeShcclxuICAgICAgICBcIlVQREFURSBwcm9ncmVzcyBTRVQgPyBXSEVSRSBpZF9hdXRoID0gP1wiLFxyXG4gICAgICAgIFtkYXRhLCBpZF0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKG5ld1Jlc3VsdCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBTUUwgOiAke2Vycm9yLnNxbE1lc3NhZ2V9YCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pLFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBRWhEQyxNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNmQyxnQkFBZ0IsRUFBR0MsRUFBRSxJQUNuQixJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEtBQUs7SUFDL0JSLFVBQVUsQ0FBQ1MsS0FBSyxDQUNkLHFDQUFxQyxFQUNyQ0osRUFBRSxFQUNGLENBQUNLLEdBQUcsRUFBRUMsTUFBTSxLQUFLO01BQ2YsSUFBSSxDQUFDRCxHQUFHLEVBQUU7UUFDUkgsT0FBTyxDQUFDSSxNQUFNLENBQUM7TUFDakIsQ0FBQyxNQUFNO1FBQ0xILE1BQU0sQ0FBQyxJQUFJSSxLQUFLLENBQUUsU0FBUUYsR0FBRyxDQUFDRyxVQUFXLEVBQUMsQ0FBQyxDQUFDO01BQzlDO0lBQ0YsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDO0VBQ0pDLFFBQVEsRUFBR0MsSUFBSSxJQUNiLElBQUlULE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sS0FBSztJQUMvQixNQUFNQyxLQUFLLEdBQUdULFVBQVUsQ0FBQ1MsS0FBSyxDQUM1Qix3QkFBd0IsRUFDeEJNLElBQUksRUFDSixDQUFDQyxLQUFLLEVBQUVMLE1BQU0sS0FBSztNQUNqQixJQUFJLENBQUNLLEtBQUssRUFBRTtRQUNWLE1BQU1DLFNBQVMsR0FBRztVQUNoQlosRUFBRSxFQUFFTSxNQUFNLENBQUNPLFFBQVE7VUFDbkIsR0FBR0g7UUFDTCxDQUFDO1FBQ0RSLE9BQU8sQ0FBQ1UsU0FBUyxDQUFDO01BQ3BCLENBQUMsTUFBTTtRQUNMVCxNQUFNLENBQUMsSUFBSUksS0FBSyxDQUFFLFNBQVFJLEtBQUssQ0FBQ0gsVUFBVyxFQUFDLENBQUMsQ0FBQztNQUNoRDtJQUNGLENBQUMsQ0FDRjtJQUNEO0lBQ0FNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxLQUFLLENBQUNZLEdBQUcsQ0FBQztFQUN4QixDQUFDLENBQUM7RUFDSkMsVUFBVSxFQUFFLENBQUNQLElBQUksRUFBRVYsRUFBRSxLQUNuQixJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEtBQUs7SUFDL0JSLFVBQVUsQ0FBQ1MsS0FBSyxDQUNkLHlDQUF5QyxFQUN6QyxDQUFDTSxJQUFJLEVBQUVWLEVBQUUsQ0FBQyxFQUNUVyxLQUFLLElBQUs7TUFDVCxJQUFJLENBQUNBLEtBQUssRUFBRTtRQUNWLE1BQU1DLFNBQVMsR0FBRztVQUNoQlosRUFBRTtVQUNGLEdBQUdVO1FBQ0wsQ0FBQztRQUNEUixPQUFPLENBQUNVLFNBQVMsQ0FBQztNQUNwQixDQUFDLE1BQU07UUFDTFQsTUFBTSxDQUFDLElBQUlJLEtBQUssQ0FBRSxTQUFRSSxLQUFLLENBQUNILFVBQVcsRUFBQyxDQUFDLENBQUM7TUFDaEQ7SUFDRixDQUFDLENBQ0Y7RUFDSCxDQUFDO0FBQ0wsQ0FBQyJ9