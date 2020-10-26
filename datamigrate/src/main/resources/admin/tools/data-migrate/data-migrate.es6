const { assetUrl } = require('/lib/xp/portal');
const { render } = require('/site/lib/tineikt/freemarker');

const view = resolve('data-migrate.ftl');

export function get(req) {
  const model = {
    assetsUrl: assetUrl({ path: '/' })
  };

  return {
    body: render(view, model)
  };
}
