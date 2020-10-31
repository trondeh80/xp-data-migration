import React, {useContext} from 'react';
import ENUMS from '../../ENUMS';
import './job.scss';
import JobContext from '../../context/job-context';

export default function Job({id, displayName = ''}) {
  const {state, dispatch} = useContext(JobContext);
  const {current} = state;

  const onEditFn = getOnEdit({id, displayName});

  const classes = `${
    current?.id === id ? 'active' : ''
  } job group bg-white hover:bg-green-500`;
  return (
    <div className={classes} onClick={onEditFn}>
      <div className="job-inner group-hover:text-white">
        <h3>{displayName}</h3>
        <button className="activate btn btn-blue" onClick={onEditFn}>
          Edit
        </button>
      </div>
    </div>
  );

  function getOnEdit(job) {
    return () => {
      dispatch({
        type: ENUMS.ACTIONS.ACTIVATE_JOB,
        data: job,
      });
    };
  }
}
