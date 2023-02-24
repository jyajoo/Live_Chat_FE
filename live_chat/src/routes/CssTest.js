import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function CssTest() {
  return (
    <Container fluid="sm">
      <Form>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control  type="id" placeholder="Enter Id" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nickname</Form.Label>
        <Form.Control  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default CssTest;