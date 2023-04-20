import React, { useContext, useEffect, useState } from 'react';
import './ProfileMain.css';
import Avatar from '../Avatar/Avatar';
import { UserContexts } from '../../api/UserContext';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { memberData } from '../../api/testData';

const ProfileMain = () => {
  let { id } = useParams()
  const { user } = useContext(UserContexts);
  const [data, setData] = useState();
  const navigate = useNavigate()
  useEffect(() => {
    if (id) {
      const newData = memberData.filter(value => {
        return value.id === Number(id)
      })
      setData(...newData)
    } else {
      setData(user)
    }
  }, [id, user])
  const updateData = (id) => {
    navigate(`update/${id}`)
  }
  if (!data) return
  return (
    <div>
      <div className='ProfileMain'>
        <div className='ProfileMain_header'>
          <Avatar circle={'100px'} />
          <div className='ProfileMain_name'>
            <span>{data.name}</span>
            <span>{data.dateOfBirth || '01/01/1010'}</span>
          </div>
        </div>
        {/* <div className={`${(!user.isAdmin && data.id === user.id) ? 'hidden' : 'editButton'}`}> */}
        <div className={`${(!user.isAdmin) ? 'hidden' : 'editButton'}`}>
          <button><EditOutlined />Edit</button>
        </div>
      </div>

      <div className='ProfileMain'>
        <div className='PersionalInformation'>
          <div className='PersionalInformation_left'>
            <div className='PersionalInformation_detail'>
              <span>Name</span>
              <span>{data.name || 'name'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Email</span>
              <span>{data.email || '...@gmail.com'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Contry</span>
              <span>{data.contry || 'Viet Nam'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Team</span>
              <span>{data.team || 'Lập trình hướng dịch vụ'}</span>
            </div>
          </div>
          <div className='PersionalInformation_right'>
            <div className='PersionalInformation_detail'>
              <span>Full Name</span>
              <span>{data.fullName || 'full name'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Phone</span>
              <span>{data.phone || '12345678'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Date Of Birth</span>
              <span>{data.dateOfBirth || '01/01/1010'}</span>
            </div>
          </div>
        </div>
        <div className={`${!user.isAdmin ? 'hidden' : 'editDetailButton'}`}>
          <button onClick={() => updateData(data.id)}><EditOutlined />Edit</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain