import { assetUrl, serviceUrl }  from '/lib/xp/portal';
import { render }  from '/site/lib/tineikt/freemarker';

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
