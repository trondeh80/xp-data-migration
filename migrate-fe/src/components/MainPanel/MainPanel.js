import React, {useContext} from 'react';
import JobContext from '../../context/job-context';
import ENUMS from '../../ENUMS';

export default function MainPanel() {
  const {state, dispatch} = useContext(JobContext);
  const {current} = state;
  if (!current) {
    return <></>;
  }
  console.log('rendering current job', current);
  const {id, displayName, activeTask} = current;

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 sm:col-span-2">
          <label
            htmlFor="jobName"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Navn
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              id="jobName"
              onChange={getOnChangeProp('displayName')}
              value={displayName}
              className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Name of job"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="editor"
          className="block text-sm leading-5 font-medium text-gray-700"
        >
          Query editor
        </label>
        <div className="rounded-md shadow-sm">
          <textarea
            id="editor"
            rows="3"
            className="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            placeholder="{}"
          ></textarea>
        </div>
      </div>

      <div className="editor"></div>
      <div className="results"></div>
    </>
  );

  function getOnChangeProp(name) {
    return ({target: {value}}) => {
      dispatch({
        type: ENUMS.ACTIONS.ACTIVATE_JOB,
        data: {
          id,
          displayName,
          [name]: value,
        },
      });
    };
  }
}
