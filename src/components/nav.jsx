import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'; 


const Navtest = () => {

  const nav = useNavigate();

  const handleNavigateToCreatePost = () => {
		nav("/");
	}
    return (
<nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>

        <a
          role='button'
          className={'navbar-burger burger'}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
            
          <span aria-hidden='true' onClick={handleNavigateToCreatePost} ></span>
          <span aria-hidden='true' onClick={handleNavigateToCreatePost}></span>
          <span aria-hidden='true' onClick={handleNavigateToCreatePost}></span>
        </a>
      </div>
      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <button onClick={handleNavigateToCreatePost} className='navbar-item'>
              Home
            </button>

          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navtest;