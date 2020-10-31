import ENUMS from '../ENUMS';
import { jobState } from './job-context';

export default function jobReducer(state, { type, data }) {
  switch (type) {
    case ENUMS.JOB.ACTIONS.UPDATE:
      return {
        ...state,
        ...data,
      };

    default:
      return jobState;
  }
}
