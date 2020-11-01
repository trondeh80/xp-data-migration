"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
exports.put = put;

var _enums = _interopRequireDefault(require("../../lib/enums"));

var _repository = _interopRequireDefault(require("../../lib/repository"));

var _createResponse = _interopRequireDefault(require("../create-response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function get(_ref) {
  var _ref$params = _ref.params,
      _ref$params$id = _ref$params.id,
      id = _ref$params$id === void 0 ? null : _ref$params$id,
      start = _ref$params.start,
      count = _ref$params.count;

  if (!id) {
    return (0, _createResponse["default"])(getJobs({
      start: start,
      count: count
    }));
  }

  return (0, _createResponse["default"])(getJob({
    id: id
  }));
}

function post(_ref2) {// Todo: Add new

  var params = _ref2.params;
}

function put(_ref3) {// Todo: update

  var params = _ref3.params;
}

function getJobs(_ref4) {
  var _ref4$start = _ref4.start,
      start = _ref4$start === void 0 ? 0 : _ref4$start,
      _ref4$count = _ref4.count,
      count = _ref4$count === void 0 ? 24 : _ref4$count;

  var _createRepoInterface$ = (0, _repository["default"])(_enums["default"].REPOSITORY_ID).query({
    start: start,
    count: count
  }),
      hits = _createRepoInterface$.hits,
      total = _createRepoInterface$.total;

  return {
    hits: [].concat(hits),
    total: total
  };
}

function getJob(_ref5) {
  var id = _ref5.id;
  return (0, _repository["default"])(_enums["default"].REPOSITORY_ID).get({
    id: id
  });
}