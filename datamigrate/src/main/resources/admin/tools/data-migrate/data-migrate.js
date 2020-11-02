"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _portal = require("/lib/xp/portal");

var _freemarker = require("/site/lib/tineikt/freemarker");

var view = resolve('data-migrate.ftl');

function get() {
  var model = {
    assetsUrl: (0, _portal.assetUrl)({
      path: '/'
    }),
    jobServiceUrl: (0, _portal.serviceUrl)({
      service: 'job-service'
    })
  };
  log.info(JSON.stringify(model, null, 4));
  return {
    body: (0, _freemarker.render)(view, model)
  };
}