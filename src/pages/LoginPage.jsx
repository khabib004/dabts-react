import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./LoginModal.css"

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (user.username === "khabib" && user.password === "2004") {
      navigate("/debts");
    } else {
      toast.error("Error");
    }
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  return (
    <div className="login-body ">
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Form onSubmit={submit}>
          <h1>
            Login
          </h1>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={user.username}
              onChange={handleUser}
              required
              type="text"
              placeholder="username"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={user.password}
              onChange={handleUser}
              required
              type="password"
              placeholder="password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Button className="mt-3" type="submit">
            Submit form
          </Button>
        </Form>

      </div>
    </div>
  );
};

export default LoginPage;
