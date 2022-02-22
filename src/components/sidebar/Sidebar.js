import React, { useEffect, useState } from 'react';
import './sidebar.scss'
import {Link,useLocation} from 'react-router-dom'
import images from '../../constants/images'
import sidebarNav from '../../configs/sidebarNav'
import { Icon } from '@iconify/react';
const Sidebar = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const location = useLocation()
    useEffect(()=>{
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item=>item.section===curPath)
        setActiveIndex(curPath.length ===0?0:activeIndex)
    },[location])
    const closeSidebar =()=>{
         document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
         setTimeout(()=>{
             document.body.classList.remove('sidebar-open')
             document.querySelector('.main__content').style = ''
         },500)
    }
  return (
      <div className="sidebar">
          <div className="sidebar__logo">
              
              <img src={images.logo} alt=""/>
              <div className="sidebar-close" onClick={closeSidebar}>
                <Icon className="i" icon="bi:x-circle" />
              </div>

          </div>
          <div className="sidebar__menu">
                  {
                      sidebarNav.map((nav,index)=>{
                          return(
                              <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item $
                              {activeIndex===index &&'active'}`} onClick={closeSidebar}>
                                  <div className="sidebar__menu__item__icon">
                                      {nav.icon}
                                  </div>
                                  <div className="sidebar__menu__item__txt">
                                      {nav.text}
                                  </div>
                              </Link>
                          )
                      })
                  }
                  <div  className="sidebar__menu__item">
                      <div className="sidebar__menu__item__icon">
                      <Icon className='i' icon="carbon:logout" />
                      </div>
                      <div className="sidebar__menu__item__txt">
                          Logout
                      </div>
                  </div>
              </div>

      </div>
  )
};

export default Sidebar;
