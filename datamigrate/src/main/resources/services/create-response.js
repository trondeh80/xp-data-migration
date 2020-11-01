"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createResponse;

var _enums = _interopRequireDefault(require("../lib/enums"));

var _createHeaders = _interopRequireDefault(require("./create-headers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createResponse(response) {
  var httpStatusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _enums["default"].HTTP_STATUS_CODES.OK;
  return {
    status: httpStatusCode,
    body: response,
    contentType: 'application/json',
    headers: (0, _createHeaders["default"])()
  };
}