import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <span className="full-name">Lambda School</span>
      <span className="username">@LambdaSchool</span>
      <span className="date"> 26 jan</span>
    </div>
  )
};

export default HeaderTitle;