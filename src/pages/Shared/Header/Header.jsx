import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
            <div className='text-center'>

                <img src={logo} alt="" />
                <p className=''><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMM Do YYYY")}</p>
            </div>
            <div className='bg-light p-3'>
                <div className='d-flex'>
                    <Button variant="danger" className='px-4 py-2 rounded'>Breaking New !</Button>
                    <Marquee speed={50} style={{ fontWeight: 'bold' }}>
                        Match Highlights: Germany vs Spain - as it happened ! Match Highlights: Germany vs Spain - as it happened !
                    </Marquee>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Latest</Nav.Link>
                            <Nav.Link href="#pricing">Politics</Nav.Link>
                            <Nav.Link href="#pricing">Crime</Nav.Link>
                            <Nav.Link href="#pricing">World</Nav.Link>
                            <Nav.Link href="#pricing">Trade</Nav.Link>
                            <Nav.Link href="#pricing">Opinion</Nav.Link>
                            <Nav.Link href="#pricing">Entertainment</Nav.Link>
                            <Nav.Link href="#pricing">Lifestyle</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant='secondary'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;