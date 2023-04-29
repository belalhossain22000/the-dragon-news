import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("clicked", name, photo, email, password);

    creatUser(email, password)
      .then((result) => {
        const createrUser = result.user;
        console.log(createrUser);
      })
      .catch((err) => console.error(err));

    // updateUser()
    // .then(()=>{

    // })
    // .catch(error=>console.error(error));
  };

  const [accepted, setAccapted] = useState(false);
  const handleAccepted = (e) => {
    setAccapted(e.target.checked);
  };
  return (
    <Container className="mx-auto w-25">
      <h1>Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Yout photo url" />
        </Form.Group>
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
            placeholder="password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccepted}
            type="checkbox"
            label={
              <>
                Accept<Link to="/terms"> terms and codtions</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Submit
        </Button>
      </Form>
      <Form.Text className="text-secoundary">
        All Ready have an accout please <Link to="/login">Login</Link>
      </Form.Text>
      <br />
      <Form.Text className="text-danger">danger</Form.Text> <br />
      <Form.Text className="text-success">success</Form.Text>
    </Container>
  );
};

export default Register;
