import Buttons from "../layout/Buttons";
import { Link } from 'react-router-dom';


function WelcomePage() {

    const styleWelcomeBtn = {
        backgroundColor: '#FDC55E',
        border: 'none',
    }
    const welcomeBtnStyle = {
        border: '1px solid #FDC55E',
        color: 'black',
        hover: 'none'
    }
  return (
    <>
        <div id='welcomePage'>   
            <div className='welcome-page'>
                <div className='welcomebtns'>
                    <div className='welcomeheader'>
                        <h1><span>Welcome To </span><br/><span style={{color: '#FDC55E'}}> Local Dish Corner! </span></h1>
                        <h5>Get start with us as a </h5>
                    </div>
                    <Buttons type="submit" size='lg' style={styleWelcomeBtn}><Link to='/vendorsignup' style={{textDecoration: 'none', color: 'black'}}  >Vendor <img src="/images/arrow-right.svg" alt="" /></Link></Buttons>
                    <Buttons type="submit" size='lg' variant="outline-primary" style={welcomeBtnStyle}><Link to='/customersignup' style={{textDecoration: 'none', color: 'black'}}  >Customer <img src="/images/arrow-right.svg" alt="" /></Link></Buttons>
                    <Buttons type="submit" size='lg' variant="outline-primary" style={welcomeBtnStyle}>Guest <img src="/images/arrow-right.svg" alt="" /></Buttons>
                </div>
                <img src="\images\Frame 1618868298.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default WelcomePage