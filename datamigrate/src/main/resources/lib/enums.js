"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ENUMS = {
  REPOSITORY_ID: 'bouvet.tool.datamigrate',
  REPO_PATH: {
    JOBS: '/jobs',
    TASKS: '/tasks',
    MIGRATE_FUNCTIONS: '/migrate-functions'
  },
  BRANCHES: {
    MASTER: 'master',
    DRAFT: 'draft'
  },
  HTTP_STATUS_CODES: {
    OK: 200,
    UNAUTHORIZED: 401,
    NOT_ACCEPTABLE: 406,
    INTERNAL_SERVER_ERROR: 500
  }
};
var _default = ENUMS;
exports["default"] = _default;