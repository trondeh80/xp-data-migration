import React from 'react';

export const jobState = {
  current: null,
  jobs: [
    {
      id: 1,
      displayName: 'My first migration',
      tasks: [],
    },
    {
      id: 2,
      displayName: 'My real migration',
      tasks: [],
    },
  ],
  tasks: [],
  queries: [],
  modifyFunctions: [],
};

const JobContext = React.createContext();
export default JobContext;
