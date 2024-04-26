import Buttons from '../layout/Buttons'

function FavouriteMenu() {

  const stylingButton ={
    marginLeft: '60px',
    borderRadius: '100px'
  }
  return (
    <>
        <div id='favouriteMenu'>
            <h1><span>Our Favourite </span><span style={{color: '#FDC55E'}}>Menu</span></h1>
            <h4>"From classic favorites to daring culinary creations, our menu promises a delightful journey through taste and temptation."</h4>
            <div className='menuItems'>
                <Buttons variant="success" style={stylingButton} >Breakfast</Buttons>{' '}
                <Buttons variant="outline-success" style={stylingButton} >Lunch</Buttons>{' '}
                <Buttons variant="outline-success" style={stylingButton} >Dinner</Buttons>{' '}
                <Buttons variant="outline-success" style={stylingButton} >Italian</Buttons>{' '}
                <Buttons variant="outline-success" style={stylingButton} >Mexican</Buttons>{' '}
                <Buttons variant="outline-success" style={stylingButton} >Dessert</Buttons>{' '}
                <Buttons variant="outline-success" style={stylingButton} >Drinks</Buttons>{' '}
                <Buttons variant="outline-success" style={stylingButton} >Breakfast</Buttons>{' '}
            </div>
            <img src="\images\Coffee-downloadapp.png" alt="" className='coffeepods'/>
        </div>
    </>
    
  )
}

export default FavouriteMenu