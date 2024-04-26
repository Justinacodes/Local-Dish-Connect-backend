import React from 'react'
import { FaEdit } from 'react-icons/fa'

function VendorName() {
  return (
    <>
        <div id='vendorName'>
            <div>
                <h4>Titi Restaurant</h4>
                <span>No 62, Alapere street, Lagos, Nigeria</span>
            </div>
            <span><FaEdit /></span>
        </div>
    </>
  )
}

export default VendorName