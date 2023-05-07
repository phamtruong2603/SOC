import React, { useState } from 'react';

export const ProjectContexts = React.createContext()

const ProjectContext = ({ children }) => {
    const [project, setProject] = useState([])
    const data = { project, setProject }
    return (
        <ProjectContexts.Provider value={data}>
            {children}
        </ProjectContexts.Provider>
    )
}

export default ProjectContext