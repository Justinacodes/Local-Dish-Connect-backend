import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

function TopReviews() {
  return (
    <>
        <div id='topReviewsContainer'>
            {/* <h6>Top Reviews</h6> */}
            <div className='topReview'>
                <img src="\images\topreviewsplaceholder.png" alt="" width="50" height="50" />
                <div>
                <h6>Top Reviews</h6>
                <span>Adeola Falana </span><span> <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /> 4.5</span>
                </div>
                <img  src="\images\topreviewfood.svg" alt=""  width="75" height="75" />
            </div>
            <p className='reviewContent'>Lorem Ipsum is simply dummy text.</p>
        </div>
    </>
    
  )
}

export default TopReviews