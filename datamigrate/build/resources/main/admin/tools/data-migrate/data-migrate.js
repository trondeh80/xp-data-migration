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

function get() {
  var model = {
    assetsUrl: assetUrl({
      path: '/'
    }),
    jobServiceUrl: serviceUrl({
      service: 'job-service'
    })
  };
  log.info(JSON.stringify(model, null, 4));
  return {
    body: render(view, model)
  };
}