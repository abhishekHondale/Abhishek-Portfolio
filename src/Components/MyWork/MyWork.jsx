import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const handleClick = (work) => {
    window.open(work.live_url, '_blank');  // Open the live project in a new tab
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-format">
            <img
              key={index}
              src={work.w_img}
              alt={work.title || `Work ${index + 1}`}
              onClick={() => handleClick(work)}
              className="clickable-img"
            />
             </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Show more" />
      </div>
    </div>
  );
};

export default MyWork;
