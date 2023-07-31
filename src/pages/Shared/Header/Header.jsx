import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories") // Replace with your server endpoint for fetching categories
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="">
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMM Do YYYY")}</p>
            </div>
            <div className="bg-light p-3">
                <div className="d-flex">
                    <Button variant="danger" className="px-4 py-2 rounded">
                        Breaking New !
                    </Button>
                    <Marquee speed={50} style={{ fontWeight: "bold" }}>
                        Match Highlights: Germany vs Spain - as it happened ! Match
                        Highlights: Germany vs Spain - as it happened !
                    </Marquee>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {categories.map((category) => (
                                <Link className="text-decoration-none text-light-emphasis px-2" to={`/category/${category.id}`}  key={category.id}>
                                    {category.name}
                                </Link>
                            ))}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
