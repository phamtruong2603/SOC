import React, { useContext, useEffect, useState } from 'react';
import { ProjectContexts } from '../../api/ProjectContext.js';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';

const Children = ({ value, data }) => {
    console.log(data)
    if (value === 'Member') {
        return (
            <div>
                abc
            </div>
        )
    }
}

const Project = () => {
    let { id } = useParams()
    const { project } = useContext(ProjectContexts);
    const [data, setData] = useState()
    useEffect(() => {
        const proj = project.filter((value) => Number(id) === value.id)
        setData(proj)
    }, [id, project])

    const items = ['List', 'Timeline', 'Member'].map((value, index) => {
        return {
            label: `${value}`,
            key: index,
            children:
                <Children
                    value={value}
                    data={data}
                />,
        }
    })

    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                style={{
                    marginBottom: 32,
                }}
                items={items}
            />
        </div>
    );
}

export default Project