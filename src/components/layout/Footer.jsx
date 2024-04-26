import React from 'react'

function Footer() {
  return (
    <>
        <div id="footer">
            <div id="footer-msg">
                <h3>LocalDishCorner</h3>
                <p className="footer-message">We provide complete culinary experience with carefully crafted recipes for all your dining occasions and dishes that keep your plate delighted.</p>
                <div className="footer-icons">
                    <img className="footer-icon" src="\images\Instagramfooter.png" alt="instagram" />
                    <img className="footer-icon" src="\images\Facebookfooter.png" alt="facebook" />
                    <img className="footer-icon" src="\images\Twitterfooter.png" alt="twitter" />
                </div>
            </div> 
            <ul className="company">
                <h6>COMPANY</h6>
                <li><a href='#'>Vendors</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Offers</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <ul className="help">
                <h6>HELP</h6>
                <li><a href='#'>Customer Support</a></li>
                <li><a href='#'>Delivery Detail</a></li>
                <li><a href='#'>Terms & Conditions</a></li>
                <li><a href='#'>Privacy Policy</a></li>
            </ul>
            <ul className="resources">
                <h6>RESOURCES</h6>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Baking Training</a></li>
                <li><a href='#'>Quick Connects</a></li>
                <li><a href='#'>Trendy Groups</a></li>
            </ul> 
        </div>
        <hr /><br />
        <p className="copyright">© Copyright 2024, All Rights Reserved by Local Dish Corner</p>
        
    </>
  )
}

export default Footer