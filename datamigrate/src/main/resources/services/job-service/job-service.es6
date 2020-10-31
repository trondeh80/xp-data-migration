import { REPOSITORY_ID } from '../../lib/enums';
import createRepoInterface from '../../lib/repository';

export function get({ params: { id = null, start, count }}) {
  if (!id) {
    return response(getJobs({ start, count }));
  }
  return response(getJob({ id }));
}

export function post({ params }) {
  // Todo: Add new / update
}

function getJobs({ start, count = 24 }) {
  const { hits, total } = createRepoInterface(REPOSITORY_ID).query({
    start: 0,
    count: 25,
  })
}

function getJob({ id }) {
  return createRepoInterface(REPOSITORY_ID).get({ id })
}

function response(data) {
  return {
    body: JSON.stringify(data),
    contentType: 'application/json'
  };
}