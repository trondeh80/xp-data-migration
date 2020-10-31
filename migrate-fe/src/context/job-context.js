import React from 'react';

export const jobState = {
  current: null,  
  jobs: [{
      id: null,
      displayName: 'My first migration'
  }],
  tasks: [],
  queries: [],
  modifyFunctions: []
};

const JobContext = React.createContext();
export default JobContext;