import React, {useContext} from 'react';
import ENUMS from '../../ENUMS';
import './job.scss';
import JobContext from '../../context/job-context';

export default function Job({className, id, displayName = '', ...rest }) {
  const {state, dispatch} = useContext(JobContext);
  const {current} = state;
  
  const classes = ['job group bg-white hover:bg-green-500'];
  if (className) {
    classes.push(className);
  }

  if (current?.id === id) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')} onClick={onEdit}>
      <div className="job-inner group-hover:text-white">
        <h3>{displayName}</h3>
        <button className="activate btn btn-blue" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );

  function onEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // if (current?.id !== id) {
    //   console.log('Not the same id');
    //   return dispatch({
    //     type: ENUMS.ACTIONS.CONFIRM_ACTIVATE_JOB,
    //     data: { id, displayName }
    //   });
    // }
    
    dispatch({
      type: ENUMS.ACTIONS.ACTIVATE_JOB, 
      data: { id, displayName },
    });
  }
}
