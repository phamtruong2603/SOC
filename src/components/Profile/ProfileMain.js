import React, { useContext, useEffect, useState } from 'react';
import './ProfileMain.css';
import Avatar from '../Avatar/Avatar';
import { UserContexts } from '../../api/UserContext';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { MessageContexts } from '../Message/Message';

const ProfileMain = () => {
  const { messageerror } = useContext(MessageContexts)
  let { id } = useParams()
  const { user } = useContext(UserContexts);
  const [data, setData] = useState();
  const navigate = useNavigate()
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const userId = { "userId": id }
          const token = localStorage.getItem('token');
          axios.defaults.headers.common['Auth'] = `${token}`;
          const res = await axios.post("http://localhost:8080/api/user/get-by-id", userId)
          setData(res.data)
        } catch (error) {
          messageerror()
        }
      })()
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
            <span>{data.userName}</span>
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
              <span>{data.userName || 'name'}</span>
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
              <span>Phone</span>
              <span>{data.phone || 'Lập trình hướng dịch vụ'}</span>
            </div>
          </div>
          <div className='PersionalInformation_right'>
            <div className='PersionalInformation_detail'>
              <span>Full Name</span>
              <span>{data.fullname || 'full name'}</span>
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