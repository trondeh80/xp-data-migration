"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRepository = createRepository;
exports["default"] = createRepoInterface;
exports.getConnection = getConnection;

var _node = _interopRequireDefault(require("/lib/xp/node"));

var _repo = _interopRequireDefault(require("/lib/xp/repo"));

var _enums = _interopRequireDefault(require("./enums"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createRepository(id) {
  if (!_repo["default"].get(id)) {
    log.info('Could not find repo for: ' + id);

    _repo["default"].create({
      id: id
    });

    log.info('Created new repository for data-migration: ' + id);
  }
}

function createRepoInterface(id) {
  var branch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _enums["default"].BRANCHES.MASTER;
  createRepository(id);
  var conn = getConnection(id, branch);
  return {
    create: function create(xpNode) {
      return conn.create(xpNode);
    },
    get: function get(key) {
      return conn.get(key);
    },
    update: function update(path, modifyFn) {
      return conn.modify({
        key: path,
        editor: modifyFn
      });
    },
    query: function query(xpQuery) {
      return conn.query(xpQuery);
    }
  };
}

function getConnection(repoId, branch) {
  return _node["default"].connect({
    branch: branch,
    repoId: repoId,
    principals: ['role:system.admin']
  });
}