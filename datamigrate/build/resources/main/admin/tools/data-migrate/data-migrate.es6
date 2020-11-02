const { assetUrl, serviceUrl } = require('/lib/xp/portal');
const { render } = require('/site/lib/tineikt/freemarker');

const view = resolve('data-migrate.ftl');

export function get() {
  const model = {
    assetsUrl: assetUrl({ path: '/' }),
    jobServiceUrl: serviceUrl({ service: 'job-service' })
  };

  log.info(JSON.stringify(model, null, 4));

  return {
    body: render(view, model)
  };
}
