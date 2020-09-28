import React from "react";
import { Button, Form } from "semantic-ui-react";

const SignUp = () => {
  return (
    <div className="form-container">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("sign up");
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
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder="Retype password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp;
