import React from 'react'
import { FaStar } from 'react-icons/fa'
import Buttons from '../layout/Buttons'

function RecommendedRestautants() {

    const button = {
        position: 'absolute',
        backgroundColor: '#006B61',
        border: 'none',
        bottom: '-16px',
        left: '88px',
        borderRadius: '100px'
    }
  return (
    <>
        <div id='recommended-restaurants'>
            <h1 className='recommended-header'><span>Recommended<br/>Categories of </span><span style={{color:"#FDC55E"}}> Restaurants</span></h1>
            <div className='recommendedRestaurantsContainer'>
                <div className='restaurant1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none" className='arc'>
                        {/* Circle with gradient stroke */}
                        <circle cx="125.035" cy="120.965" r="116.153" transform="rotate(178.687 125.035 124.965)" stroke="url(#paint0_linear_315_3727)" strokeWidth="16" />
                        {/* Image clipped inside the circle */}
                        <image xlinkHref="\images\Restaurant1.svg" x="24.882" y="30.882" width="232.306" height="232.306" clipPath="url(#circleClip)" className="recImage" />
                        {/* Clipping path for the circle */}
                        <defs>
                            <clipPath id="circleClip">
                                <circle cx="125.035" cy="124.965" r="116.153" transform="rotate(178.687 125.035 124.965)" />
                            </clipPath>
                            {/* Linear gradient definition */}
                            <linearGradient id="paint0_linear_315_3727" x1="131.787" y1="144.132" x2="131.787" y2="280.047" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F54748" stopOpacity="0"/>
                                <stop offset="1" stopColor="#FDC55E"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="restaurant-container">
                        <div className='reviewer-profile'>
                            <img className='img1' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img2' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img3' src="\images\user-profiles.png" alt="user-profile" /> <span style={{color: "#FFB800"}}><FaStar /></span> <span>(4.5)</span>
                        </div>
                        <h4 className='restaurant-name'>Kebab</h4>
                        <p className='restaurant-description'>Will contain a description of the menu</p>
                        <Buttons variant='primary' style={button}>Order Now</Buttons>
                        <svg className='tag' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="29.999" cy="29.9997" r="28" fill="#FDC55E" stroke="white" stroke-width="4"/>
                        </svg>
                        <p className='price'>$10</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none" className='arc'>
                        {/* Circle with gradient stroke */}
                        <circle cx="125.035" cy="120.965" r="116.153" transform="rotate(178.687 125.035 124.965)" stroke="url(#paint0_linear_315_3727)" strokeWidth="16" />
                        {/* Image clipped inside the circle */}
                        <image xlinkHref="\images\Restaurant1.svg" x="24.882" y="30.882" width="232.306" height="232.306" clipPath="url(#circleClip)" className="recImage" />
                        {/* Clipping path for the circle */}
                        <defs>
                            <clipPath id="circleClip">
                                <circle cx="125.035" cy="124.965" r="116.153" transform="rotate(178.687 125.035 124.965)" />
                            </clipPath>
                            {/* Linear gradient definition */}
                            <linearGradient id="paint0_linear_315_3727" x1="131.787" y1="144.132" x2="131.787" y2="280.047" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F54748" stopOpacity="0"/>
                                <stop offset="1" stopColor="#FDC55E"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="restaurant-container">
                        <div className='reviewer-profile'>
                            <img className='img1' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img2' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img3' src="\images\user-profiles.png" alt="user-profile" /> <span style={{color: "#FFB800"}}><FaStar /></span> <span>(4.5)</span>
                        </div>
                        <h4 className='restaurant-name'>Kebab</h4>
                        <p className='restaurant-description'>Will contain a description of the menu</p>
                        <Buttons variant='primary' style={button}>Order Now</Buttons>
                        <svg className='tag' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="29.999" cy="29.9997" r="28" fill="#FDC55E" stroke="white" stroke-width="4"/>
                        </svg>
                        <p className='price'>$10</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none" className='arc'>
                        {/* Circle with gradient stroke */}
                        <circle cx="125.035" cy="120.965" r="116.153" transform="rotate(178.687 125.035 124.965)" stroke="url(#paint0_linear_315_3727)" strokeWidth="16" />
                        {/* Image clipped inside the circle */}
                        <image xlinkHref="\images\Restaurant1.svg" x="24.882" y="30.882" width="232.306" height="232.306" clipPath="url(#circleClip)" className="recImage" />
                        {/* Clipping path for the circle */}
                        <defs>
                            <clipPath id="circleClip">
                                <circle cx="125.035" cy="124.965" r="116.153" transform="rotate(178.687 125.035 124.965)" />
                            </clipPath>
                            {/* Linear gradient definition */}
                            <linearGradient id="paint0_linear_315_3727" x1="131.787" y1="144.132" x2="131.787" y2="280.047" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F54748" stopOpacity="0"/>
                                <stop offset="1" stopColor="#FDC55E"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="restaurant-container">
                        <div className='reviewer-profile'>
                            <img className='img1' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img2' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img3' src="\images\user-profiles.png" alt="user-profile" /> <span style={{color: "#FFB800"}}><FaStar /></span> <span>(4.5)</span>
                        </div>
                        <h4 className='restaurant-name'>Kebab</h4>
                        <p className='restaurant-description'>Will contain a description of the menu</p>
                        <Buttons variant='primary' style={button}>Order Now</Buttons>
                        <svg className='tag' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="29.999" cy="29.9997" r="28" fill="#FDC55E" stroke="white" stroke-width="4"/>
                        </svg>
                        <p className='price'>$10</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none" className='arc'>
                        {/* Circle with gradient stroke */}
                        <circle cx="125.035" cy="120.965" r="116.153" transform="rotate(178.687 125.035 124.965)" stroke="url(#paint0_linear_315_3727)" strokeWidth="16" />
                        {/* Image clipped inside the circle */}
                        <image xlinkHref="\images\Restaurant1.svg" x="24.882" y="30.882" width="232.306" height="232.306" clipPath="url(#circleClip)" className="recImage" />
                        {/* Clipping path for the circle */}
                        <defs>
                            <clipPath id="circleClip">
                                <circle cx="125.035" cy="124.965" r="116.153" transform="rotate(178.687 125.035 124.965)" />
                            </clipPath>
                            {/* Linear gradient definition */}
                            <linearGradient id="paint0_linear_315_3727" x1="131.787" y1="144.132" x2="131.787" y2="280.047" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F54748" stopOpacity="0"/>
                                <stop offset="1" stopColor="#FDC55E"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="restaurant-container">
                        <div className='reviewer-profile'>
                            <img className='img1' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img2' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img3' src="\images\user-profiles.png" alt="user-profile" /> <span style={{color: "#FFB800"}}><FaStar /></span> <span>(4.5)</span>
                        </div>
                        <h4 className='restaurant-name'>Kebab</h4>
                        <p className='restaurant-description'>Will contain a description of the menu</p>
                        <Buttons variant='primary' style={button}>Order Now</Buttons>
                        <svg className='tag' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="29.999" cy="29.9997" r="28" fill="#FDC55E" stroke="white" stroke-width="4"/>
                        </svg>
                        <p className='price'>$10</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none" className='arc'>
                        {/* Circle with gradient stroke */}
                        <circle cx="125.035" cy="120.965" r="116.153" transform="rotate(178.687 125.035 124.965)" stroke="url(#paint0_linear_315_3727)" strokeWidth="16" />
                        {/* Image clipped inside the circle */}
                        <image xlinkHref="\images\Restaurant1.svg" x="24.882" y="30.882" width="232.306" height="232.306" clipPath="url(#circleClip)" className="recImage" />
                        {/* Clipping path for the circle */}
                        <defs>
                            <clipPath id="circleClip">
                                <circle cx="125.035" cy="124.965" r="116.153" transform="rotate(178.687 125.035 124.965)" />
                            </clipPath>
                            {/* Linear gradient definition */}
                            <linearGradient id="paint0_linear_315_3727" x1="131.787" y1="144.132" x2="131.787" y2="280.047" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F54748" stopOpacity="0"/>
                                <stop offset="1" stopColor="#FDC55E"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="restaurant-container">
                        <div className='reviewer-profile'>
                            <img className='img1' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img2' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img3' src="\images\user-profiles.png" alt="user-profile" /> <span style={{color: "#FFB800"}}><FaStar /></span> <span>(4.5)</span>
                        </div>
                        <h4 className='restaurant-name'>Kebab</h4>
                        <p className='restaurant-description'>Will contain a description of the menu</p>
                        <Buttons variant='primary' style={button}>Order Now</Buttons>
                        <svg className='tag' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="29.999" cy="29.9997" r="28" fill="#FDC55E" stroke="white" stroke-width="4"/>
                        </svg>
                        <p className='price'>$10</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none" className='arc'>
                        {/* Circle with gradient stroke */}
                        <circle cx="125.035" cy="120.965" r="116.153" transform="rotate(178.687 125.035 124.965)" stroke="url(#paint0_linear_315_3727)" strokeWidth="16" />
                        {/* Image clipped inside the circle */}
                        <image xlinkHref="\images\Restaurant1.svg" x="24.882" y="30.882" width="232.306" height="232.306" clipPath="url(#circleClip)" className="recImage" />
                        {/* Clipping path for the circle */}
                        <defs>
                            <clipPath id="circleClip">
                                <circle cx="125.035" cy="124.965" r="116.153" transform="rotate(178.687 125.035 124.965)" />
                            </clipPath>
                            {/* Linear gradient definition */}
                            <linearGradient id="paint0_linear_315_3727" x1="131.787" y1="144.132" x2="131.787" y2="280.047" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F54748" stopOpacity="0"/>
                                <stop offset="1" stopColor="#FDC55E"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="restaurant-container">
                        <div className='reviewer-profile'>
                            <img className='img1' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img2' src="\images\user-profiles.png" alt="user-profile" />
                            <img className='img3' src="\images\user-profiles.png" alt="user-profile" /> <span style={{color: "#FFB800"}}><FaStar /></span> <span>(4.5)</span>
                        </div>
                        <h4 className='restaurant-name'>Kebab</h4>
                        <p className='restaurant-description'>Will contain a description of the menu</p>
                        <Buttons variant='primary' style={button}>Order Now</Buttons>
                        <svg className='tag' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="29.999" cy="29.9997" r="28" fill="#FDC55E" stroke="white" stroke-width="4"/>
                        </svg>
                        <p className='price'>$10</p>
                    </div>
                </div>
            </div>
            
           
        </div>
        
    </>
  )
}

export default RecommendedRestautants