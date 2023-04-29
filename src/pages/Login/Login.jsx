import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const from = location?.state?.from?.pathname || "/cetegory/0";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("clicked", password, email);
    signIn(email, password)
      .then((result) => {
        const logedUser = result.user;
        console.log(logedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <Container className="mx-auto w-25">
      <h1>please login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Form.Text className="text-muted">
        Don't have an accout please <Link to="/register">Register</Link>
      </Form.Text>{" "}
      <br />
      <Form.Text className="text-muted">danger</Form.Text> <br />
      <Form.Text className="text-muted">success</Form.Text>
    </Container>
  );
};

export default Login;
