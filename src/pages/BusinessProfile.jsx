import React from 'react'
import Buttons from '../components/layout/Buttons'
import Aside from '../components/vendors dashboard/Aside'
import VendorsDashboardNavbar from '../components/vendors dashboard/VendorsDashboardNavbar'

// Vendors can navigate to theri business profile through the Aside to view or edit their profiles 
// This page can also contain verification tools (in future versions)

function RestaurantInformation() {
  return (
    <>
        <div>
            <VendorsDashboardNavbar />
            <Aside />
            <div className='businessProfile'>
                <h4>Restaurant Information</h4> <span><Buttons>Edit</Buttons></span>
                <img src="\images\Navbar profile pic.png" alt="" width='60px' height='60px' />
                <br /><hr />
                <div>
                    <p>Vendor ID: LD-23456</p>
                    <hr />
                    <p>Name: Titi Alate</p>
                    <hr />
                    <p>Status: Completed</p>
                    <hr />
                    <p>Description: Offers all kinds of  local meals</p>
                    <hr />
                    <p>Email: titialate24@gmail.com</p>
                    <hr />
                    <p>Phone no: +2349030817012</p>
                    <hr />
                    <p>City: Lagos</p>
                    <hr />
                    <p>Opening: 9:00am</p>
                    <hr />
                    <p>Closing: 9:00pm</p>
                    <hr />
                    <p>Type: Restaurant</p>
                    <hr />
                    <p>Created: 18-04-2024</p>
                    <hr />
                </div>
            </div>
        </div>
    </>
  )
}

export default RestaurantInformation