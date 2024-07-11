import logo from './logo.png';
import './nav.css';
import React, { useState } from 'react';


function Nav(){
    const [activeIndex, setActiveIndex] = useState(0); 

    const handleItemClick = (index) => {
        setActiveIndex(index); 
    };
    return(
        
        <>
            <div className="navigation">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h3>ARA company</h3>
                </div>
                <input type="checkbox" id="check"></input>
                <label for="check" class="icons">
                    <i class='bx bx-menu' id="menu-icon"></i>
                    <i class='bx bx-x' id="close-icon"></i>
                </label>
        
                <div className="nav">
                    <ul>
                        <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                            <a href="#">
                                <span className="icon">
                                    <i class='bx bx-home-alt-2'></i>
                                </span>
                                <span className="text">HOME</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
                            <a href="#">
                                <span className="icon">
                                    <i class='bx bx-group'></i>
                                </span>
                                <span className="text">ABOUT</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
                            <a href="#">
                                <span className="icon">
                                    <i className='bx bx-receipt'></i>
                                </span>
                                <span className="text">SERVICES</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
                             <a href="#">
                                <span className="icon">
                                    <i className='bx bx-face'></i>
                                </span>
                                <span className="text">CLIENTS</span>
                                <span className="circle"></span>
                            </a>
                         </li>
                        <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
                            <a href="#">
                                <span className="icon">
                                    <i className='bx bx-message-rounded-dots'></i>
                                </span>
                                <span className="text">CONTACT</span>
                                <span className="circle"></span>
                            </a>
                        </li>

                        <div className="indicator"></div>
                    </ul>

                </div>
        
            </div>


        </>
    );
}

export default Nav;