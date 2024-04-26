import Button from 'react-bootstrap/Button';

function Buttons({variant, children, type, value, size, style, onClick}) {
  return (
    <>
      <Button variant= {variant} type= {type} value= {value} size= {size} style={style}>
        {children}
      </Button>{' '}
    </>
  );
}

export default Buttons;