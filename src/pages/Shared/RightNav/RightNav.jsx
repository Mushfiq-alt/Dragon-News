import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div className="mt-5 mr-10">
            <h4>Login With</h4>
            <div className="mt-3">
                <Button variant="outline-primary"> <FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary" className="mt-2"> <FaGithub /> Login With Github</Button>
            </div>
            <div className="mt-5">
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className="mt-2"><FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item className="mt-2"><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item className="mt-2"><FaInstagram />Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div style={{ position: 'relative' }}>
                <img src={bg} className="mt-5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-40%, -150%)', fontWeight: 'bold', fontSize: '24px', color: '#FFF' }}>
                    Create an Amazing Newspaper
                </div>
                <p style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -70%)', fontWeight: '', fontSize: '18px', color: '#FFF', textAlign: 'center' }}>
                    Discover thousands of options easy to customize layouts, one-click to implement demo and much more
                </p>
                <Button variant="danger" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -1%)' }}>
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default RightNav;
