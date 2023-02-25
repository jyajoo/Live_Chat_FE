import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import styles from "../css/Join.module.css";

function Join() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");
  const onChangeId = (event) => {
    setId(event.target.value);
  };
  const onChangePw = (event) => {
    setPw(event.target.value);
  };
  const onChangeNickname = (event) => {
    setNickName(event.target.value);
  };
  return (
    <div>
      <h2 id={styles.title}>Join</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Id</Form.Label>
            <Form.Control
              onChange={onChangeId}
              value={id}
              type="id"
              placeholder="Enter Id"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={onChangePw}
              value={pw}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nickname</Form.Label>
          <Form.Control onChange={onChangeNickname} value={nickName} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Join;
