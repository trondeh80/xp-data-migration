"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _require = require('/lib/xp/portal'),
    assetUrl = _require.assetUrl,
    serviceUrl = _require.serviceUrl;

var _require2 = require('/site/lib/tineikt/freemarker'),
    render = _require2.render;

var view = resolve('data-migrate.ftl');

function get(req) {
  log.info(serviceUrl({
    service: 'job-service'
  }));
  log.info(assetUrl({
    path: 'js/data-migrate.js'
  }));
  var model = {
    assetsUrl: assetUrl({
      path: '/'
    })
  };
  return {
    body: render(view, model)
  };
}