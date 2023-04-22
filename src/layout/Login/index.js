import React, { useContext, useState } from 'react';
import './index.css'
import Facebook from '../../public/image/facebook.png'
import Google from '../../public/image/google.png'
import Github from '../../public/image/github.png'
import { UserContexts } from '../../api/UserContext';
import { useNavigate } from 'react-router-dom';
import { memberData } from '../../api/testData';

const Home = () => {
  const [data, setData] = useState();
  const { user, setUser } = useContext(UserContexts);
  const navigate = useNavigate()
  const setPrams = (e) => {
    let name = e.target.name
    let value = e.target.value
    setData({
      ...data,
      [name]: value,
    })
  }
  if (user && user.isAdmin) {
    navigate('/admin')
  }
  if (user && !user.isAdmin) {
    navigate('/dashboard')
  }
  const submit = (e) => {
    e.preventDefault()
    const newData = memberData.filter(value => (value.phone === data.phone))
    if (newData.length) {
      setUser(...newData)
    }
  }

  return (
    <div className='login'>
      <h1 className='titleLogin'>Choose a Login Method</h1>
      <div className='wrapperLogin'>
        <div className='leftLogin'>
          <div className='loginButton google'>
            <img
              src={Google}
              alt='' className='iconLogin'
            />
            Google
          </div>
          <div className='loginButton facebook'>
            <img
              src={Facebook}
              alt='' className='iconLogin'
            />
            Facebook
          </div>
          <div className='loginButton github'>
            <img
              src={Github}
              alt='' className='iconLogin'
            />
            Github
          </div>
        </div>
        <div className='centerLogin'>
          <div className='lineLogin' />
          <div className='orLogin'>OR</div>
        </div>
        <div className='rightLogin'>
          <form onSubmit={submit}>
            <input type='text' placeholder='usename' name="phone" onChange={setPrams} />
            <input type='password' placeholder='password' name='password' onChange={setPrams} />
            <button type="submit" >Login</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Home
