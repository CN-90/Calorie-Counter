import React from "react";
import './ProgressBar.css';

const ProgressBar = () => {
  let month = getCurrentDate() 
  return (
    <div className='progress-container'>
      <h3 className='progressbar-date'>{month}</h3>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: '60%'}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
        <div className='progress-count'>420 / 2000 Calories</div>
    </div>
  );
};

const getCurrentDate = () => {
  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('en-us', { month: 'long' });
  const year = dateObj.getFullYear();
  return `${month} ${day}, ${year}`;
}

export default ProgressBar;