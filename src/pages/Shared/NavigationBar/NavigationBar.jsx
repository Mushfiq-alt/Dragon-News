import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";



const NavigationBar = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories") // Replace with your server endpoint for fetching categories
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }, []);

    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {categories.map((category) => (
                                <Link className="text-decoration-none text-light-emphasis px-2" to={`/category/${category.id}`} key={category.id}>
                                    {category.name}
                                </Link>
                            ))}
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '1.5rem' }}></FaUserCircle></Nav.Link>}
                            
                            {user ?
                                <Button variant="secondary">LogOut</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;