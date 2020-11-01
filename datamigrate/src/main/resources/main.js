"use strict";

var _enums = _interopRequireDefault(require("./lib/enums"));

var _context = require("/lib/xp/context");

var _repository = require("./lib/repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _context.run)({
  user: {
    login: 'su'
  }
}, init);

function init() {
  log.info('Data migrate initialization');
  (0, _repository.createRepository)(_enums["default"].REPOSITORY_ID);
}