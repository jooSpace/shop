import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    let navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to="/" className='iink-container'>Home</Link>
                    <Link to="detail/1" className='iink-container'>Detail</Link>
                    <Nav.Link onClick={() => navigate('/detail/1')} className='iink-container'>Link</Nav.Link>
                    <Link to="event" className='iink-container'>Event</Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
