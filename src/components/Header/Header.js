import React, { useContext } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { UserContexts } from '../../api/UserContext';
import Avatar from '../Avatar/Avatar';

function HeaderMain() {
  const { setUser } = useContext(UserContexts)
  const navigate = useNavigate()
  const submit = () => {
    localStorage.removeItem('token');
    setUser()
    navigate('/')
  }
  const dashboard = () => {
    navigate('dashboard')
  }
  return (
    <div className='headerHome'>
      <nav>
        <ul className="homeNav homeToolbarNav">
          <li>
            <h2>Team Work</h2>
          </li>
        </ul>

        <ul className="homeToolbarNav">
          <li onClick={dashboard} className='avatarHeader'><Avatar circle={"50px"} /></li>
          <li onClick={submit}><span className="signin in">LogOut</span></li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMain;