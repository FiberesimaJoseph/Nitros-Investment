import React from "react";
import { Button, Form } from "semantic-ui-react";

const LoginForm = () => {
  return (
    <div className="form-container">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("logged in");
        }}
      >
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
