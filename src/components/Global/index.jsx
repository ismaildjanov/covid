import React from 'react';
import "./style.css";
import moment from 'moment';


const Global = (props) => {
  return (

    <div className='global__wrapper'>
      <div className='wrapper__box'>
        <div className='total__cases'>
          <p className='total__cases-text'>{props.heading}</p>   
          <img src={props.icon} alt="" />     
        </div>

        <div className='total__cases-numbers'>
          <p>{props.cases?.toLocaleString()}</p>
        </div>

        <div className='last__update'>
          <p>last updated: <span>{moment(props.time).calendar()}</span></p>
        </div>
      </div>
    </div>
      
  )
}

export default Global