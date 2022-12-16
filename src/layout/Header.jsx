import React from 'react'

import logo from '../images/logo.png'



const Header = () => {
    return (
        <>
            <div className="container">
                <div className="nav-bar">
                    <div className='logo-wrapper'>
                        <div className="logo">
                            <img src={logo} alt="Logo" />

                        </div>
                        <div className="nav-item">
                            <ul>
                                <li><a href="">About </a></li>
                                <li><a href="">Why</a></li>
                                <li><a href="">Benifits</a></li>
                                <li><a href="">Token Sale</a></li>
                                <li><a href="">FAQs</a></li>
                                <li><a href="">Contact</a></li>

                            </ul>
                        </div>
                    </div>


                    <div className="nav-button">
                        <select>
                            <option value="English">English</option>
                        </select>
                        <button className='fill-button'>Connect Wallet</button>
                        <button className='tran-button'>PRE-SALE</button>
                    </div>

                </div>
                <div className="hero-section">
                    <h1>The 1st Social Network where
                        likes have value</h1>
                    <p>LEMON provides a unique way for Users to create, post & profit from their content. Based on
                        other users opinion. Your opinion matters
                    </p>
                    <div className="hero-button">
                        <button>LEMON PRE-SALE
                        </button>
                        <button>WHITE PAPER </button>
                    </div>
                </div>

                <div className="social-wrapper">
                    <div className='icon'>fb</div>
                    <div className='icon'>twit</div>
                    <div className='icon'>fb</div>
                    <div className='icon'>twit</div>
                    <div className='icon'>fb</div>
                    <div className='icon'>twit</div>

                </div>


            </div>




        </>
    )
}

export default Header