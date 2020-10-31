import React, { useReducer } from "react";
import JobContext, { jobState } from './context/job-context';
import jobReducer from './context/job-reducers';
import LeftPanel from './components/LeftPanel/LeftPanel';
import './App.scss';
import MainPanel from "./components/MainPanel/MainPanel";
import RightPanel from "./components/RightPanel/RightPanel";


function App() {
  const [state, dispatch] = useReducer(jobReducer, jobState);

  return (
    <JobContext.Provider value={{state, dispatch}}>
      <div className="App">
        <header className="App-header">
          <h1>XP Data Migration Tool</h1>
        </header>
        <div className="alert wide-alert hidden"></div>
        <main>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <LeftPanel />
            </div>
            <div className="col-span-6">
              <MainPanel />
            </div>
            <div className="col-span-3">
              <RightPanel />
            </div>
          </div>
        </main>
        <footer>
          
        </footer>
      </div>
    </JobContext.Provider>
  );
}

export default App;
