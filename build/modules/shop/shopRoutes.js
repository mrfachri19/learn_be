const express = require("express");
const Router = express.Router();
const shopController = require("./shopController");
Router.get("/:idUser", shopController.getShopByidUser);
Router.post("/", shopController.postShop);
Router.patch("/:id_auth", shopController.UpdateShop);
module.exports = Router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsIlJvdXRlciIsInNob3BDb250cm9sbGVyIiwiZ2V0IiwiZ2V0U2hvcEJ5aWRVc2VyIiwicG9zdCIsInBvc3RTaG9wIiwicGF0Y2giLCJVcGRhdGVTaG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3Avc2hvcFJvdXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcblxyXG5jb25zdCBSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCBzaG9wQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL3Nob3BDb250cm9sbGVyXCIpO1xyXG5cclxuUm91dGVyLmdldChcIi86aWRVc2VyXCIsIHNob3BDb250cm9sbGVyLmdldFNob3BCeWlkVXNlcik7XHJcblJvdXRlci5wb3N0KFwiL1wiLCBzaG9wQ29udHJvbGxlci5wb3N0U2hvcCk7XHJcblJvdXRlci5wYXRjaChcIi86aWRfYXV0aFwiLCBzaG9wQ29udHJvbGxlci5VcGRhdGVTaG9wKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUm91dGVyO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUVsQyxNQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0UsTUFBTSxFQUFFO0FBQy9CLE1BQU1DLGNBQWMsR0FBR0YsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0FBRWxEQyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxVQUFVLEVBQUVELGNBQWMsQ0FBQ0UsZUFBZSxDQUFDO0FBQ3RESCxNQUFNLENBQUNJLElBQUksQ0FBQyxHQUFHLEVBQUVILGNBQWMsQ0FBQ0ksUUFBUSxDQUFDO0FBQ3pDTCxNQUFNLENBQUNNLEtBQUssQ0FBQyxXQUFXLEVBQUVMLGNBQWMsQ0FBQ00sVUFBVSxDQUFDO0FBRXBEQyxNQUFNLENBQUNDLE9BQU8sR0FBR1QsTUFBTSJ9