import React from 'react';
import './overall-list.scss'
import {data} from '../../constants/data'
import { Icon } from '@iconify/react';
const icons =[
    <Icon className='i'  icon="icon-park-outline:transaction-order"/>,
    <Icon className='i'   icon="raphael:customer" />,
    <Icon className='i'  icon="icon-park:ad-product" />,
    <Icon className='i'  icon="emojione-v1:money-bag"/>
]
const OverallList = () => {
  return(
      <ul className='overall-list'>
          {data.overall.map((item,index)=>{
              return (
                  <li className='overall-list__item' key={`overall-${index}`}>
                      <div className='overall-list__item__icon'>
                        {icons[index]}
                      </div>
                      <div className='overall-list__item__info'>
                        <div className='title'>
                            {item.value}
                        </div>
                        <span>{item.title}</span>
                      </div>
                      
                      
                      </li>
              )
          })}
      </ul>
  )
};

export default OverallList;
