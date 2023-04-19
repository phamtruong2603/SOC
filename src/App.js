import React from "react";
import './App.css';
import routes from "./routes";
import ProjectContext from "./api/ProjectContext";
import UserContext from "./api/UserContext";

function App() {
  return (
    <UserContext>
      <ProjectContext>
        {routes}
      </ProjectContext>
    </UserContext>
  );
}

export default App;
