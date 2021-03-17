import React, {useContext} from 'react';
import JobContext from '../../context/job-context';
import ENUMS from '../../ENUMS';
import Job from './Job';

export default function LeftPanel(props) {
  const {state, dispatch} = useContext(JobContext);
  const {jobs} = state;

  return (
    <div className="left-panel">
      <div className="job-list"> 
      {
        jobs.map(({id, displayName}, index) => (
          <Job 
            key={id}
            id={id}
            displayName={displayName}
            className={index > 0 ? 'mt-2' :''}
          />
        ))
      }
      </div>
      <div className="add-new-job mt-2">
        <button onClick={addNew}>Add new job</button> 
      </div>
    </div>
  );

  function addNew() {
    dispatch(
      {
        type:ENUMS.ACTIONS.ACTIVATE_JOB,
        data: {
          id: null,
          displayName: ''
      }
    });
  }
}
