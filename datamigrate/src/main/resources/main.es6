import { createRepository } from './lib/repository';
import { REPOSITORY_ID } from './lib/enums';

init();

function init() {
  log.info('init migrate');
  // Create repository if it does not exists
  createRepository(REPOSITORY_ID);

}