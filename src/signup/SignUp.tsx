import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  return (
    <div className="form-container">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("sign up");
          setRedirect(true);
        }}
      >
        <Form.Field>
          <label>Full Name</label>
          <input placeholder="Full Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Referral Code</label>
          <input placeholder="Referral code" />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input placeholder="Phone" />
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <input placeholder="Country" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder="Retype password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      {redirect ? <Redirect to="/dashboard" /> : null}
    </div>
  );
};

export default SignUp;
