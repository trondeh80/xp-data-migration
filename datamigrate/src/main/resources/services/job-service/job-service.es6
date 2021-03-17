import ENUMS from '../../lib/enums';
import createRepoInterface from '../../lib/repository';
import createResponse from '../create-response';

export function get({ params: { id = null, start, count }}) {
  if (!id) {
    return createResponse(getJobs({ start, count }));
  }
  return createResponse(getJob({ id }));
}

export function post({ params }) {
  // Todo: Add new
}

export function put({ params }) {
  // Todo: update
}

function getJobs({ start = 0, count = 24 }) {
  const { hits, total } = createRepoInterface(ENUMS.REPOSITORY_ID).query({
    start,
    count,
  });

  return { hits: [].concat(hits), total };
}

function getJob({ id }) {
  return createRepoInterface(ENUMS.REPOSITORY_ID).get({ id })
}