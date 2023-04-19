import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const TableComponent = ({ dataTable, click }) => {
    const navigate = useNavigate()
    const dataSource = [...dataTable.data]
    const handleNavigate = (id) => {
        navigate(`${id}`)
    };
    let defaultColumns
    if (click) {
        defaultColumns = [
            ...dataTable.columns,
            {
                title: '',
                dataIndex: '',
                render: (_, record) =>
                    dataSource.length > 0 ? (
                        <button onClick={() => handleNavigate(record.id)}>Chi tiết</button>
                    ) : null,
            }
        ]
    } else {
        defaultColumns = [...dataTable.columns]
    }

    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={defaultColumns}
            />
        </div>
    );
}
export default TableComponent;