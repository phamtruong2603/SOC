import React, { useContext, useEffect, useState } from 'react';
import { ProjectContexts } from '../../api/ProjectContext.js';
import { useParams } from 'react-router-dom';

const Project = () => {
    let { id } = useParams()
    const { project } = useContext(ProjectContexts);
    const [data, setData] = useState()
    useEffect(() => {
        const proj = project.filter((value) => Number(id) === value.id)
        setData(proj)
    },[id, project])
    console.log(data)
    return (
        <div>Project</div>
    )
}

export default Project