import Buttons from "../layout/Buttons"

function Promotion() {
    


    const promotionButton= {
        backgroundColor: "white",
        color: "#006B61",
        border: "none",
        borderRadius: "8px",
        marginTop: "-10px",
        marginLeft: "28px",
        fontSize: "12px"
    }
  return (
    <>
        <div id='promotion'>
            <div className='promotionText'> 
                <span className='text1'>Boost your</span>
                <h5>Sales</h5>
                <span>by</span>
                <span className='text2'>60%</span>
                <Buttons style={promotionButton} size="sm" >Start now</Buttons>
            </div>
            <div className='promotionImage'>
                <img src="\images\rafiki.svg" alt="" width='190px' height='120px' />
            </div>
        </div>
    </>
  )
}

export default Promotion