import React from 'react';
import './topnav.scss'
import UserInfo from '../../user-info/UserInfo'
import {data} from '../../constants/data'
import { Icon } from '@iconify/react';
const TopNav = () => {
  const openSidebar =()=>{
    document.body.classList.add('sidebar-open');
  }
  return (
      <div className="topnav">
        <UserInfo user={data.user}/>
        <div className="sidebar-toggle" onClick={openSidebar}>
        <Icon className='i'  icon="bx:bx-menu-alt-right" />
        </div>
      </div>
  )
};

export default TopNav;
