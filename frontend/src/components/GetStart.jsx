import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const GetStart = () => {
    const navigate = useNavigate(); // ✅ Define the hook here

    return (
        <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center bg-stone-200">
            <Row className="text-center">
                <Col>
                    <h1>Budget your money</h1>
                    <p>Build healthy financial habits. Control unnecessary expenses.</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    {/* ✅ Use navigate inside a function */}
                    <Button variant="outline-primary" onClick={() => navigate("/signin")}>
                        Get Started
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default GetStart;
