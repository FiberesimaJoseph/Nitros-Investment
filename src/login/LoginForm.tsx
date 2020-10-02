import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <div className="form-container">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      {submitted ? <Redirect to="/dashboard" /> : null}
    </div>
  );
};

export default LoginForm;
