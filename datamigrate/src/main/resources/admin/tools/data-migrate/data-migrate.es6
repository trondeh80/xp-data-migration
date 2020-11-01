const { assetUrl, serviceUrl } = require('/lib/xp/portal');
const { render } = require('/site/lib/tineikt/freemarker');

const view = resolve('data-migrate.ftl');

export function get(req) {
  log.info(serviceUrl({ service: 'job-service' }));
  log.info(assetUrl({ path: 'js/data-migrate.js' }))

  const model = {
    assetsUrl: assetUrl({ path: '/' })
  };

  return {
    body: render(view, model)
  };
}
