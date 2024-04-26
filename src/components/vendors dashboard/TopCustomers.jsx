import Buttons from "../layout/Buttons"

function TopCustomers() {
const viewButton = {
    backgroundColor: "#006B61",
    border: "none",
    marginLeft: "32px",
    fontSize: "12px"
}

  return (
    <>
        <div id='topCustomers'>
            <h5>Weekly Top Customers</h5>
            <div className='customer-1'>
                <img style={{width: 54, height: 54, borderRadius: 68}} src="\images\Customer1.svg" />
                <div className='customerTitle'>
                    <h6>Orilobamise Edna</h6>
                    <span> 50</span><span> </span><span> Purchases</span>
                </div>
                <div>
                    <Buttons style={viewButton} size="sm" >View</Buttons>
                </div>
            </div>
            <div className='customer-1'>
                <img style={{width: 54, height: 54, borderRadius: 68}} src="\images\Customer1.svg" />
                <div className='customerTitle'>
                    <h6>Orilobamise Edna</h6>
                    <span> 50</span><span> </span><span> Purchases</span>
                </div>
                <div>
                    <Buttons style={viewButton} size="sm" >View</Buttons>
                </div>
            </div>
            <div className='customer-1'>
                <img style={{width: 54, height: 54, borderRadius: 68}} src="\images\Customer1.svg" />
                <div className='customerTitle'>
                    <h6>Orilobamise Edna</h6>
                    <span> 50</span><span> </span><span> Purchases</span>
                </div>
                <div>
                    <Buttons style={viewButton} size="sm" >View</Buttons>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default TopCustomers