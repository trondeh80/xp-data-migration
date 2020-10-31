import React, {useContext} from 'react';
import JobContext from '../../context/job-context';

export default function MainPanel() {
  const {state, dispatch} = useContext(JobContext);
  const {current} = state;
  if (!current) {
    return <></>;
  }
  console.log('rendering current job', current);
  const { id, displayName, activeTask } = current; 

  return (
      <>
        <h2>{displayName}</h2>
        <div className="editor">
            
        </div>
        <div className="results">
            
        </div>
      </>
  )
}
