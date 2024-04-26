import React from 'react'
import { FaAngleRight } from 'react-icons/fa'


// Initially named Order reports
function CustomersReports() {
  return (
    <>
      <div id='orderReports'>
        <div className='orderTitle'>
          <h4>Customers' Reports</h4>
          <p>Most popular dishes this week</p><span className='moreCustomers'>View More <FaAngleRight /> </span>
        </div>
        <div>
          <div className='customers'>
            <div className='column1'>
              <div>
                <h6>Customer</h6>
              </div>
              <div className='customer1'>
                <img src="\images\Customer1.svg" />
                <p>Ayo Dudu</p>
              </div>
              <div>
                <img src="\images\Customer2.svg" />
                <p>Ayo Dudu</p>
              </div>
            </div>
            <div className='column2'>
              <div>
                <h6>User ID</h6>
              </div>
              <div>
                <p>223344556677</p>
              </div>
              <div>
                <p>223344556677</p>
              </div>
            </div>
            <div className='column3'>
              <div>
                <h6>Address</h6>
              </div>
              <div>
                <p>Oja Oba</p>
              </div>
              <div>
                <p>Oja Oba</p>
              </div>
            </div>
            <div className='column4'>
              <div>
                <h6>Phone No</h6>
              </div>
              <div>
                <p>0901234567</p>
              </div>
              <div>
                <p>0901234567</p>
              </div>
            </div>
            <div className='column5'>
              <div>
                <h6>Status</h6>
              </div>
              <div>
                <p>Reviewed</p>
              </div>
              <div>
                <p>Visited</p>
              </div>
            </div>
          </div>
        </div>
            
      </div>
    </>
  )
}

export default CustomersReports