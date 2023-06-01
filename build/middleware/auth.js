const jwt = require("jsonwebtoken");
const helperWrapper = require("../helper/wrapper");
// const redis = require("../config/redis");

module.exports = {
  authentication: (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
      return helperWrapper.response(res, 403, "Please login first");
    }
    token = token.split(" ")[1];
    // redis.get(`accessToken:${token}`, (error, result) => {
    //   if (!error && result !== null) {
    //     return helperWrapper.response(
    //       res,
    //       403,
    //       "Your token is destroyed please login again"
    //     );
    //   }

    //   // eslint-disable-next-line no-shadow
    //   jwt.verify(token, "RAHASIA", (error, result) => {
    //     if (error) {
    //       return helperWrapper.response(res, 403, error.message);
    //     }
    //     req.decodeToken = result;
    //     next();
    //   });
    // });
  },

  isAdmin: (req, res, next) => {
    const {
      role
    } = req.decodeToken;
    if (role !== "admin") {
      return helperWrapper.response(res, 400, `Role user must be admin`, null);
    }
    next();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwiaGVscGVyV3JhcHBlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJhdXRoZW50aWNhdGlvbiIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzcGxpdCIsImlzQWRtaW4iLCJyb2xlIiwiZGVjb2RlVG9rZW4iXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9hdXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7XHJcbmNvbnN0IGhlbHBlcldyYXBwZXIgPSByZXF1aXJlKFwiLi4vaGVscGVyL3dyYXBwZXJcIik7XHJcbi8vIGNvbnN0IHJlZGlzID0gcmVxdWlyZShcIi4uL2NvbmZpZy9yZWRpc1wiKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGF1dGhlbnRpY2F0aW9uOiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGxldCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBoZWxwZXJXcmFwcGVyLnJlc3BvbnNlKHJlcywgNDAzLCBcIlBsZWFzZSBsb2dpbiBmaXJzdFwiKTtcclxuICAgIH1cclxuICAgIHRva2VuID0gdG9rZW4uc3BsaXQoXCIgXCIpWzFdO1xyXG4gICAgLy8gcmVkaXMuZ2V0KGBhY2Nlc3NUb2tlbjoke3Rva2VufWAsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgIGlmICghZXJyb3IgJiYgcmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGhlbHBlcldyYXBwZXIucmVzcG9uc2UoXHJcbiAgICAvLyAgICAgICByZXMsXHJcbiAgICAvLyAgICAgICA0MDMsXHJcbiAgICAvLyAgICAgICBcIllvdXIgdG9rZW4gaXMgZGVzdHJveWVkIHBsZWFzZSBsb2dpbiBhZ2FpblwiXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xyXG4gICAgLy8gICBqd3QudmVyaWZ5KHRva2VuLCBcIlJBSEFTSUFcIiwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBpZiAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgIHJldHVybiBoZWxwZXJXcmFwcGVyLnJlc3BvbnNlKHJlcywgNDAzLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmVxLmRlY29kZVRva2VuID0gcmVzdWx0O1xyXG4gICAgLy8gICAgIG5leHQoKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9KTtcclxuICB9LFxyXG4gIGlzQWRtaW46IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyByb2xlIH0gPSByZXEuZGVjb2RlVG9rZW47XHJcbiAgICBpZiAocm9sZSAhPT0gXCJhZG1pblwiKSB7XHJcbiAgICAgIHJldHVybiBoZWxwZXJXcmFwcGVyLnJlc3BvbnNlKHJlcywgNDAwLCBgUm9sZSB1c2VyIG11c3QgYmUgYWRtaW5gLCBudWxsKTtcclxuICAgIH1cclxuICAgIG5leHQoKTtcclxuICB9LFxyXG59OyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsY0FBYyxDQUFDO0FBQ25DLE1BQU1DLGFBQWEsR0FBR0QsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0FBQ2xEOztBQUVBRSxNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNmQyxjQUFjLEVBQUUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksS0FBSztJQUNsQyxJQUFJQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxhQUFhO0lBQ3JDLElBQUksQ0FBQ0YsS0FBSyxFQUFFO01BQ1YsT0FBT1AsYUFBYSxDQUFDVSxRQUFRLENBQUNMLEdBQUcsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLENBQUM7SUFDL0Q7SUFDQUUsS0FBSyxHQUFHQSxLQUFLLENBQUNJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRixDQUFDOztFQUNEQyxPQUFPLEVBQUUsQ0FBQ1IsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksS0FBSztJQUMzQixNQUFNO01BQUVPO0lBQUssQ0FBQyxHQUFHVCxHQUFHLENBQUNVLFdBQVc7SUFDaEMsSUFBSUQsSUFBSSxLQUFLLE9BQU8sRUFBRTtNQUNwQixPQUFPYixhQUFhLENBQUNVLFFBQVEsQ0FBQ0wsR0FBRyxFQUFFLEdBQUcsRUFBRyx5QkFBd0IsRUFBRSxJQUFJLENBQUM7SUFDMUU7SUFDQUMsSUFBSSxFQUFFO0VBQ1I7QUFDRixDQUFDIn0=