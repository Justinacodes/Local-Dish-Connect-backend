import Buttons from "../layout/Buttons"

function PopularFood() {

    const foodButton = {
        backgroundColor: "#006B61",
        border: "none",
        marginLeft: "16px",
        fontSize: "12px"
    }

  return (
    <>
        <div id='popularFoodContainer'>
            <h5>Most Popular Food</h5>
            <div className='popularFood'>
                <img src="\images\Popularfood.png" />
                <div className='foodTitle'>
                    <h6>Grilled Chicken</h6>
                    <p>Lorem ipsum dolor</p>
                </div>
                <div>
                    <Buttons style={foodButton} >150 sales </Buttons>
                </div>
            </div>
            <div className='popularFood'>
                <img src="\images\Popularfood.png" />
                <div className='foodTitle'>
                    <h6>Grilled Chicken</h6>
                    <p>Lorem ipsum dolor</p>
                </div>
                <div>
                    <Buttons style={foodButton} >150 sales </Buttons>
                </div>
            </div>
            <div className='popularFood'>
                <img src="\images\Popularfood.png" />
                <div className='foodTitle'>
                    <h6>Grilled Chicken</h6>
                    <p>Lorem ipsum dolor</p>
                </div>
                <div>
                    <Buttons style={foodButton} >150 sales </Buttons>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default PopularFood