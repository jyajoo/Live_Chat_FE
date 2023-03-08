import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

import styles from "../css/Join.module.css";
import baseStyles from "../css/Base.module.css";
import axios from "axios";
import { FormLabel } from "react-bootstrap";
import { json } from "react-router";
function Join() {
  const navigate = useNavigate();
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
  let data = {
    userId: id,
    userPw: pw,
    userNickName: nickName,
  };
  const handleJoin = (e) => {
    e.preventDefault();
    console.log("this----------------------");
    console.log(data);
    axios
      .post("/join", data)
      .then((response) => {
        console.log("response.data----------------------");

        console.log(response);
        if (response.status === 200) {
          alert(response.data +"님 회원가입 성공~");
          navigate("/");
        }

        // response
      })
      .catch((error) => {
        // 오류발생시 실행
        console.log("error!!!!!!");
      })
      .then(function () {
        
      });
  };
  return (
    <div id={baseStyles.content}>
      <h2 id={baseStyles.title}>Join</h2>
      <Form onSubmit={handleJoin}>
        <Form.Group className="mb-3" controlId="formGridId">
          <Form.Label>Id</Form.Label>
          <Form.Control
            onChange={onChangeId}
            value={id}
            type="id"
            placeholder="Enter Id"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onChangePw}
            value={pw}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nickname</Form.Label>
          <Form.Control onChange={onChangeNickname} value={nickName} />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button id={styles.btn} variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Join;
