import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


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
                    <ListGroup.Item className="mt-2"><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item className="mt-2"><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item className="mt-2"><FaInstagram/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;