import { Table } from 'antd';

const TableComponent = ({ dataTable }) => {
    return (
        <Table className='Table_component'
            columns={dataTable.columns}
            dataSource={dataTable.data}
        />
    )
}
export default TableComponent;