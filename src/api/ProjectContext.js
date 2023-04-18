import React, { useState } from 'react';

export const ProjectContexts = React.createContext()
const test = [
    {
        id: 1,
        name: "Project name 1",
        deadline: "22/07/2001",
        leader: {
            id: 10,
            name: "Nguyen Van A",
            avatar: ""
        },
        member: [
            {
                id: 11,
                name: "Nguyen Van A",
                avatar: ""
            },
            {
                id: 12,
                name: "Nguyen Van A",
                avatar: ""
            },
            {
                id: 13,
                name: "Nguyen Van A",
                avatar: ""
            }
        ],
        progress: "25%",
        running: 0,
        complete: 0
    },
    {
        id: 2,
        name: "Project name 2",
        deadline: "22/07/2001",
        leader: {
            id: 20,
            name: "Nguyen Van B",
            avatar: ""
        },
        member: [
            {
                id: 21,
                name: "Nguyen Van B",
                avatar: ""
            },
            {
                id: 22,
                name: "Nguyen Van B",
                avatar: ""
            }
        ],
        progress: "50%",
        running: 0,
        complete: 0
    },
    {
        id: 3,
        name: "Project name 3",
        deadline: "22/07/2001",
        leader: {
            id: 30,
            name: "Nguyen Van C",
            avatar: ""
        },
        member: [
            {
                id: 31,
                name: "Nguyen Van C",
                avatar: ""
            }, {
                id: 32,
                name: "Nguyen Van C",
                avatar: ""
            },{
                id: 33,
                name: "Nguyen Van C",
                avatar: ""
            },
            {
                id: 34,
                name: "Nguyen Van C",
                avatar: ""
            }
        ],
        progress: "10%",
        running: 0,
        complete: 0
    },
    {
        id: 4,
        name: "Project name 3",
        deadline: "22/07/2001",
        leader: {
            id: 30,
            name: "Nguyen Van C",
            avatar: ""
        },
        member: [
            {
                id: 31,
                name: "Nguyen Van C",
                avatar: ""
            }, {
                id: 32,
                name: "Nguyen Van C",
                avatar: ""
            },{
                id: 33,
                name: "Nguyen Van C",
                avatar: ""
            },
            {
                id: 34,
                name: "Nguyen Van C",
                avatar: ""
            }
        ],
        progress: "10%",
        running: 0,
        complete: 0
    },
]
const ProjectContext = ({ children }) => {
    const [project, setProject] = useState(test)
    const data = { project, setProject }
    return (
        <ProjectContexts.Provider value={data}>
            {children}
        </ProjectContexts.Provider>
    )
}

export default ProjectContext