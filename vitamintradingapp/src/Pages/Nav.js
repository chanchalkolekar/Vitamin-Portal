import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <Navbar style={{ backgroundColor: '#406818',boxShadow:'0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 12px -5px rgba(76, 175, 80, .46)'}}>
      <Container>
        <Navbar.Brand style={{ color: 'white', fontSize:'25px',marginLeft:'-5rem'}}>SUPER-ADMIN</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  style={{ color: 'white', fontSize: '15px' , fontWeight:'600' , marginLeft:'28rem'}}>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft:'25rem' }}>
              <FontAwesomeIcon icon={faUser} />
              <span style={{ marginLeft: '8px' }}>Account2</span>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;