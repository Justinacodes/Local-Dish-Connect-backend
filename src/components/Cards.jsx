import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from 'react-icons/fa';

function Cards() {
  return (
    <>
      <CardGroup id="vendorsCards">
        <Card className='topVendors' style={{borderRadius:'20px'}}>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" style={{borderRadius:'20px 20px 0px 0px'}} />
          <Card.Body>
          <Card.Title>Calabar kitchen</Card.Title>
          </Card.Body>
          <Card.Footer><FaStar /> 4.9 <span style={{marginLeft:'60px'}}><small className="text-muted"> (10 Reviews)</small></span><span style={{marginLeft:'140px', fontSize:'12px'}}> Pick Up</span></Card.Footer>
        </Card>
        <Card className='topVendors' style={{borderRadius:'20px'}}>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" style={{borderRadius:'20px 20px 0px 0px'}} />
          <Card.Body>
            <Card.Title>Yoruba kitchen</Card.Title>
          </Card.Body>
          <Card.Footer><FaStar /> 4.9 <span style={{marginLeft:'60px'}}><small className="text-muted"> (10 Reviews)</small></span><span style={{marginLeft:'140px', fontSize:'12px'}}> Pick Up</span></Card.Footer>
        </Card>
        <Card className='topVendors' style={{borderRadius:'20px'}}>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" style={{borderRadius:'20px 20px 0px 0px'}} />
          <Card.Body>
            <Card.Title>Igbo kitchen</Card.Title>
          </Card.Body>
          <Card.Footer><FaStar /> 4.9 <span style={{marginLeft:'60px'}}><small className="text-muted"> (10 Reviews)</small></span><span style={{marginLeft:'140px', fontSize:'12px'}}> Pick Up</span></Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup id="vendorsCards">
        <Card className='topVendors' style={{borderRadius:'20px'}}>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" style={{borderRadius:'20px 20px 0px 0px'}} />
          <Card.Body>
          <Card.Title>Calabar kitchen</Card.Title>
          </Card.Body>
          <Card.Footer><FaStar /> 4.9 <span style={{marginLeft:'60px'}}><small className="text-muted"> (10 Reviews)</small></span><span style={{marginLeft:'140px', fontSize:'12px'}}> Pick Up</span></Card.Footer>
        </Card>
        <Card className='topVendors' style={{borderRadius:'20px'}}>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" style={{borderRadius:'20px 20px 0px 0px'}} />
          <Card.Body>
            <Card.Title>Yoruba kitchen</Card.Title>
          </Card.Body>
          <Card.Footer><FaStar /> 4.9 <span style={{marginLeft:'60px'}}><small className="text-muted"> (10 Reviews)</small></span><span style={{marginLeft:'140px', fontSize:'12px'}}> Pick Up</span></Card.Footer>
        </Card>
        <Card className='topVendors' style={{borderRadius:'20px'}}>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" style={{borderRadius:'20px 20px 0px 0px'}} />
          <Card.Body>
            <Card.Title>Igbo kitchen</Card.Title>
          </Card.Body>
          <Card.Footer><FaStar /> 4.9 <span style={{marginLeft:'60px'}}><small className="text-muted"> (10 Reviews)</small></span><span style={{marginLeft:'140px', fontSize:'12px'}}> Pick Up</span></Card.Footer>
        </Card>
      </CardGroup>

    </>
  );
}

export default Cards;