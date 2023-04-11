import React from 'react';
import './Statistical.css';
import TableComponent from '../../../components/Table/Table';
// import { CardOverview, CardPrice } from '../../../components/Card/card';
import CardOverview from '../../../components/Card/CardOverview.js'
import CardPrice from '../../../components/Card/CardPrice.js'
import { Card } from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  MinusCircleOutlined
} from '@ant-design/icons';
const backgroundColor = "#f5f5f5"
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
const Statistical = () => {
  return (
    <div>
      <div className='statistical_overview statistical_align'>
        <CardOverview number={5} text="Dự án" icon="project" />
        <CardOverview number={9} text="Task" icon="task" />
        <CardOverview number={7} text="Thành viên" icon="member" />
      </div>
      <div className='statistical_revenue statistical_align'>
        <CardPrice
          number='500000VND' text="Tổng thu"
          backgroundColor={backgroundColor} colorText="#3ff04e"
        />
        <CardPrice
          number='500000VND' text="Tổng chi"
          backgroundColor={backgroundColor} colorText="#f34242"
        />
      </div>
      <div className='statistical_statistica statistical_align'>
        <div className='statistical_statistica-Task'>
          <span style={{ fontWeight: '600' }}>Thống kê task</span>
          <div className='HT_card statistical_align'>
            <Card style={{ width: '48%', textAlign: 'center' }}>
              <div>
                <span style={{ display: 'block' }}>Tổng</span>
                <span style={{ display: 'block' }}>0</span>
              </div>
            </Card>
            <Card style={{ width: '48%', textAlign: 'center' }}>
              <div>
                <span style={{ display: 'block' }}>Tổng</span>
                <span style={{ display: 'block' }}>0</span>
              </div>
            </Card>
          </div>
          <div className='managementProcess'>
            <div className='statistical_align'>
              <span><InfoCircleOutlined style={{ color: "#f03fe7", marginRight: 10 }} />Đang chờ xác nhận</span>
              <span>0</span>
            </div>
            <div className='statistical_align'>
              <span><MinusCircleOutlined style={{ color: "#f0d03f", marginRight: 10 }} />Đang làm</span>
              <span>0</span>
            </div>
            <div className='statistical_align'>
              <span><CheckCircleOutlined style={{ color: "#3ff04e", marginRight: 10 }} />Hoàn thành</span>
              <span>0</span>
            </div>
            <div className='statistical_align'>
              <span><CloseCircleOutlined style={{ color: "#f34242", marginRight: 10 }} />Lỗi</span>
              <span>0</span>
            </div>
          </div>
        </div>
        <div className='statistical_statistica-Table'>
          <div style={{ fontWeight: '600' }}>
            Hóa đơn
          </div>
          <TableComponent
            dataTable={dataTable}
          />
        </div>
      </div>

    </div>
  )
}

export default Statistical