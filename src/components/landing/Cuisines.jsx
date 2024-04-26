import React from 'react'
import Buttons from '../layout/Buttons'

function Cuisines() {

  const buttonStyling = {
    backgroundColor: '#006B61',
    border: 'none',
    marginTop: '60px',
    marginLeft: '600px'
  }
  return (
    <>
        <div id="cuisines">
          <h1 className='cuisine-header'><span>Choose from our <br/>Categories of </span><span style={{color:'#FDC55E'}}>Cuisines</span></h1>
          <div className='allCuisines'>
            <div className='cuisine'>
              <img src="\images\Cuisine img1.png" alt="cuisine-image" />
              <h4>Efo Riro</h4>
            </div>
            <div className='cuisine'>
              <img src="\images\Ellipse 60.png" alt="cuisine-image" />
              <h4>Tuwo shinkafa</h4>
            </div>
            <div className='cuisine'>
              <img src="\images\Cuisine img1.png" alt="cuisine-image" />
              <h4>Ofe-nsala</h4>
            </div>
            <div className='cuisine'>
              <img src="\images\Cuisine img1.png" alt="cuisine-image" />
              <h4>Ofe-nsala</h4>
            </div>
            <div className='cuisine'>
              <img src="\images\Cuisine img1.png" alt="cuisine-image" />
              <h4>Ofe-nsala</h4>
            </div>
          </div>
          <div className='viewMore'>
            <Buttons variant="primary" style={buttonStyling} >View More Cuisines</Buttons>
          </div> 
        </div>

    </>
  )
}

export default Cuisines