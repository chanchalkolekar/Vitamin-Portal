
import './App.css';
import Maincontent from './Pages/Maincontent';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from './Pages/Nav';
import DashboardSidebar from './Pages/DashboardSidebar';
import LiveM2M from './Pages/LiveM2M';

function App() {
  return (
    <Container fluid style={{ backgroundColor: '#1a2035', height: '100vh', width: '100%', padding: '0', margin: '0' }}>
      <Nav />
      <Row style={{ width: '99%' }}>
        <Col md={2}>
          <DashboardSidebar></DashboardSidebar>
        </Col>
        <Col md={9}>
          <Row style={{ width: '111%' }}>
            <LiveM2M></LiveM2M>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
