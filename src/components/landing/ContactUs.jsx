import Buttons from '../layout/Buttons'

function ContactUs() {

  const styleButton = {
    backgroundColor: '#006B61',
    border: 'none'
  }

  return (
    <>
        <div id="contact-us">
            <h3>Contact Us</h3>
            <h1 className='reach-us'>Get in Touch With Us</h1>
            <p>Join over 4,000+ individuals and brands that reached out to us in the past.</p>
            <Buttons style={styleButton} >Send Message</Buttons>
        </div>
    </>
  )
}

export default ContactUs;