import React from 'react';
import Table_component from '../../components/Table/Table';
import { CardOverview, CardPrice } from '../../components/Card/card';
const dataTable = {
  columns: [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Khách hàng',
      dataIndex: 'clien',
      key: 'clien',
    },
    {
      title: 'Loại hóa đơn',
      dataIndex: 'type_bills',
      key: 'type_bills',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total_money',
      key: 'total_money',
    },
  ],
  data: [
    {
      key: '1',
      id: '1',
      clien: 'Công ty bất động sản Đà nẵng',
      type_bills: 'Thu',
      time: '15/03/2023',
      total_money: '500.000VND'
    },
    {
      key: '2',
      id: '2',
      clien: 42,
      type_bills: 'Chi',
      time: '15/03/2023',
      total_money: '500.000VND'
    },
    {
      key: '3',
      id: '3',
      clien: 32,
      type_bills: 'Thu',
      time: '15/03/2023',
      total_money: '500.000VND'
    },
  ]
}
const Home = () => {
  return (
    <div>
      <div className='overview'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <CardOverview number={5} text="Dự án" />
        <CardOverview number={9} text="Task" />
        <CardOverview number={7} text="Thành viên" />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', marginTop: 25 }}
      >
        <CardPrice number={500000} text="Tổng thu" />
        <CardPrice number={500000} text="Tổng chi" />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', marginTop: 25 }}
      >
        <div
          style={{backgroundColor:'', width:'35%'}}
        ></div>
        <Table_component
          dataTable={dataTable}
        />
      </div>

    </div>
  )
}

export default Home