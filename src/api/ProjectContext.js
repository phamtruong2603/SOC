import React, { useState } from 'react';
import { projectData } from './testData';

export const ProjectContexts = React.createContext()

const ProjectContext = ({ children }) => {
    const [project, setProject] = useState(projectData)
    const data = { project, setProject }
    return (
        <ProjectContexts.Provider value={data}>
            {children}
        </ProjectContexts.Provider>
    )
}

export default ProjectContext