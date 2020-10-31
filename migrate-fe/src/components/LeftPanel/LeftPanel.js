import React, {useContext} from 'react';
import JobContext from '../../context/job-context';
import Job from './Job';

export default function LeftPanel(props) {
  const {state, dispatch} = useContext(JobContext);
  const {jobs} = state;

  return (
    <div className="left-panel">
      {jobs.map(({id, displayName}) => (
        <Job key={id} id={id} displayName={displayName} />
      ))}
    </div>
  );
}
