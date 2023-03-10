import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../css/Login.module.css"
function Login() {
  return (
    <div>
      <h2 id={styles.title}>LOGIN</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="email" placeholder="Enter Id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
}
export default Login;
