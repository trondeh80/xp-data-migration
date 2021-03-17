import  ENUMS from './lib/enums';
import { run } from '/lib/xp/context';
import { createRepository } from './lib/repository';

run({ user: { login: 'su' } }, init);

function init() {
  log.info('Data migrate initialization');
  createRepository(ENUMS.REPOSITORY_ID);
}