import { Table } from 'antd';
import React from 'react';

const App = () => {
  const dataSource = [
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    },
  ];
  const handleNavigate = (key) => {
    console.log(key)
    // const newData = dataSource.filter((item) => item.key !== key);
    // setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length > 0 ? (
          <button onClick={() => handleNavigate(record.key)}>Chi tiết</button>
        ) : null,
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={defaultColumns}
      />
    </div>
  );
};
export default App;