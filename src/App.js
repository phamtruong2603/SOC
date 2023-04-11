import React from "react";
import './App.css';
import routes from "./routes";
import ProjectContext from "./api/ProjectContext";

function App() {
  return (
    <ProjectContext>
      {routes}
    </ProjectContext>
  );
}

export default App;
