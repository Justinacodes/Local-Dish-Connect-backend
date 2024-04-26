import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

// Initially named Total Revenue
function TotalVisits() {
  return (
    <>
        <div id='revenueContainer'>
            <div className='revenueTitle'>
                <h4>Total No. of Visits</h4>
                <p>Order activity this year</p><span className='month'>Monthly <FaAngleDown /> </span>
            </div>
            <div className='revenue'>
                <div>50k+</div>
                <div>40k+</div>
                <div>30k+</div>
                <div>20k+</div>
                <div>10k+</div>
            </div>
            <div className='revenueBars'>
                <div style={{width: 329.03, height: 0, left: 0, top: 121.04, position: 'absolute', border: '0.50px #9FA7AA solid'}}></div>
                <div style={{width: 329.03, height: 0, left: 0, top: 151, position: 'absolute', border: '0.50px #9FA7AA solid'}}></div>
                <div style={{width: 329.03, height: 0, left: 0, top: 90.84, position: 'absolute', border: '0.50px #9FA7AA solid'}}></div>
                <div style={{width: 329.03, height: 0, left: 0, top: 60.40, position: 'absolute', border: '0.50px #9FA7AA solid'}}></div>
                <div style={{width: 329.03, height: 0, left: 0, top: 30.20, position: 'absolute', border: '0.50px #9FA7AA solid'}}></div>
                <div style={{width: 329.03, height: 0, left: 0, top: 0, position: 'absolute', border: '0.50px #9FA7AA solid'}}></div>
                {/* The bars start here */}
                <div style={{left: 7.31, position: 'absolute'}}>
                    <div style={{width: 22.65, height: 150.77, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 107, 97, 0.17)'}}></div>
                    <div style={{width: 22.65, height: 47.76, left: 0, top: 103.01, position: 'absolute', background: '#006B61'}}></div>
                </div>
                <div style={{left: 61.96, position: 'absolute'}}>
                    <div style={{width: 22.65, height: 151, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 107, 97, 0.17)'}}></div>
                    <div style={{width: 22.65, height: 35.12, left: 0, top: 115.88, position: 'absolute', background: '#006B61'}}></div>
                </div>
                <div style={{left: 116.61, position: 'absolute'}}>
                    <div style={{width: 22.65, height: 150.76, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 107, 97, 0.17)'}}></div>
                    <div style={{width: 22.65, height: 107.69, left: 0, top: 43.07, position: 'absolute', background: '#006B61'}}></div>
                </div>
                <div style={{left: 171.26, position: 'absolute'}}>
                    <div style={{width: 22.65, height: 150.77, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 107, 97, 0.17)'}}></div>
                    <div style={{width: 22.65, height: 60.63, left: 0, top: 90.13, position: 'absolute', background: '#006B61'}}></div>
                </div>
                <div style={{left: 225.91, position: 'absolute'}}>
                    <div style={{width: 22.65, height: 150.77, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 107, 97, 0.17)'}}></div>
                    <div style={{width: 22.65, height: 85.68, left: 0, top: 65.08, position: 'absolute', background: '#006B61'}}></div>
                </div>
                <div style={{left: 280.56, position: 'absolute'}}>
                    <div style={{width: 22.65, height: 151, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 107, 97, 0.17)'}}></div>
                    <div style={{width: 22.65, height: 126.42, left: 0, top: 24.58, position: 'absolute', background: '#006B61'}}></div>
                </div>
                <div className='monthsRevenue'>
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TotalVisits