import ENUMS from '../ENUMS';
import { jobState } from './job-context';

export default function jobReducer(state, { type, data }) {
  switch (type) {
    case ENUMS.ACTIONS.UPDATE:
      debugger;
      return {
        ...state,
        ...data
      };

    case ENUMS.ACTIONS.ACTIVATE_JOB:
        return {
            ...state,
            current: {
                ...data
            }
        } 

    default:
      return jobState;
  }
}
