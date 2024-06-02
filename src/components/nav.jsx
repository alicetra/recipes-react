import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Navtest = () => {

  const nav = useNavigate();

  const handleNavigateToCreatePost = () => {
    nav("/");
  }
  return (
    <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>

        <a
          role='button'
          className={'navbar-burger burger'}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <div className="hamburger-menu">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/rongyiguang/navigation-home-3.png" alt="Home logo" onClick={handleNavigateToCreatePost} />
          </div>

        </a>
      </div>
      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <button onClick={handleNavigateToCreatePost} className='navbar-item'>
            <h1   className="subtitle is-3">
              Home
              </h1 >
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navtest;