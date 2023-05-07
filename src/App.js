import React from "react";
import './App.css';
import routes from "./routes";
import ProjectContext from "./api/ProjectContext";
import UserContext from "./api/UserContext";
import Message from "./components/Message/Message";

function App() {
  return (
    <UserContext>
      <ProjectContext>
        <Message>
          {routes}
        </Message>
      </ProjectContext>
    </UserContext>
  );
}

export default App;
