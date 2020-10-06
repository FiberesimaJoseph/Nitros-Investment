import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

interface FormState {
  name: string;
  email: string;
  referralCode: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    referralCode: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="form-container">
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            if (formState.password !== formState.confirmPassword) {
              throw new Error("Passwords do not match");
            }
            await fetch("/api/account/register", {
              method: "POST",
              body: JSON.stringify(formState),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            setFormState({
              name: "",
              email: "",
              referralCode: "",
              phone: "",
              country: "",
              password: "",
              confirmPassword: "",
            });
            setRedirect(true);
          } catch (error) {
            alert(error.message);
          }
        }}
      >
        <Form.Field>
          <label>Full Name</label>
          <input
            placeholder="Full Name"
            onChange={({ target }) => {
              setFormState({ ...formState, name: target.value });
            }}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            onChange={({ target }) => {
              setFormState({ ...formState, email: target.value });
            }}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Referral Code</label>
          <input
            placeholder="Referral code"
            onChange={({ target }) => {
              setFormState({ ...formState, referralCode: target.value });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            placeholder="Phone"
            onChange={({ target }) => {
              setFormState({ ...formState, phone: target.value });
            }}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <input
            placeholder="Country"
            onChange={({ target }) => {
              setFormState({ ...formState, country: target.value });
            }}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            onChange={({ target }) => {
              setFormState({ ...formState, password: target.value });
            }}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            placeholder="Retype password"
            onChange={({ target }) => {
              setFormState({ ...formState, confirmPassword: target.value });
            }}
            type="password"
            required
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      {redirect ? <Redirect to="/dashboard" /> : null}
    </div>
  );
};

export default SignUp;
