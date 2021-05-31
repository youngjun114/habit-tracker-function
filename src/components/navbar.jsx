import React, { memo } from 'react';

const Navbar = memo(({ totalCount }) => {
  return (
    <div className='navbar'>
      <i className='fab fa-stack-exchange navbar-logo'></i>
      <span>Habit Tracker</span>
      <span className='navbar-count'>{totalCount}</span>
    </div>
  );
});

export default Navbar;
