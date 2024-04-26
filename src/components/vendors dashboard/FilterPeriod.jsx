import React from 'react'
import {  FaCalendar } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa6'

function FilterPeriod() {
  return (
    <>
        <div id='filterPeriodContainer'>
            <span className='filterPeriodIcon'><FaCalendar /></span>
            <div>
                <h6>Filter Period</h6> 
                <p>21 Feb 2023-20 Mar 2024</p>
            </div>
            <span><FaChevronDown /></span>
        </div>
    </>
  )
}

export default FilterPeriod