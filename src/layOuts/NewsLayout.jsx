import { Col, Container, Row } from "react-bootstrap";
import Category from "../pages/Home/Category/Category";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";
import Footer from "../pages/Shared/Footer/Footer";

const NewsLayout = () => {
    return (
        <div>
            <Header>
                <Category></Category>
            </Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Category></Category>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;