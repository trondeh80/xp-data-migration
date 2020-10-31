import node from '/lib/xp/node';
import repo from '/lib/xp/repo';
import { BRANCHES } from './enums';

export function createRepository(id) {
  if (!repo.get(id)) {
    repo.create({
      id
    });
    log.info('==== Created new repository for data-migration: ' + id);
  }
}

export default function createRepoInterface(id, branch = BRANCHES.MASTER) {
  const conn = getConnection(id, branch);
  return  {
    create: (xpNode) => conn.create(xpNode),
    get: (key) => conn.get(key),
    update: (path, modifyFn) => conn.modify({ key: path, editor: modifyFn }),
    query: (xpQuery) => conn.query(xpQuery)
  };
}

export function getConnection(repoId, branch) {
  return node.connect({
    branch,
    repoId,
    principals: ['role:system.admin']
  });
}

