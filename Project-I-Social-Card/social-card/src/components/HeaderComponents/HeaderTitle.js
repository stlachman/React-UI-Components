import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <span className="full-name">Lambda School</span>
      <span className="username">@LambdaSchool</span>
      <span className="date"> {moment().format("Do MMM")} </span>
    </div>
  )
};

export default HeaderTitle;