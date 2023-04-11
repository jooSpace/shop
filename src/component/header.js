import { useQuery } from '@tanstack/react-query';
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {

    let navigate = useNavigate();

    // react-query 성공/실패/로딩중 파악 가능
    let result = useQuery('Data', () => {
        return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
            return a.data;
        })
    })

    


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
                    <Link to="Cart" className='iink-container'>Cart</Link>
                    <Link to="event" className='iink-container'>Event</Link>
                    
                </Nav>
                <Nav className='ms-auto'>
                {/* { result.isLoading ? '로딩중' : result.data.name } */}
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
