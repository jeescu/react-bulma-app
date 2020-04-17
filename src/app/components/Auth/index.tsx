import React, { useState } from "react";
import FormStatus from "app/components/FormStatus";
import FormField from "app/components/FormField";
import SectionButton from "app/components/SectionButton";
import { Link } from "utils/router";
import "./styles.scss";

function Auth(props: any) {
  // State for all inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  // Error array we'll populate
  let errors: Array<any> = [];

  // Function for fetching error for a field
  const getError = (field: any) => {
    return errors.find(e => e.field === field);
  };

  // Function to see if field is empty
  const isEmpty = (val: string) => val.trim() === "";

  // Add error if email empty
  if (["signin", "signup", "forgotpass"].includes(props.mode)) {
    if (isEmpty(email)) {
      errors.push({
        field: "email",
        message: "Please enter an email"
      });
    }
  }

  // Add error if password empty
  if (["signin", "signup", "changepass"].includes(props.mode)) {
    if (isEmpty(pass)) {
      errors.push({
        field: "pass",
        message: "Please enter a password"
      });
    }
  }

  // Add error if confirmPass empty or
  // if it doesn't match pass.
  // Only for signup and changepass views.
  if (["signup", "changepass"].includes(props.mode)) {
    if (isEmpty(confirmPass)) {
      errors.push({
        field: "confirmPass",
        message: "Please confirm password"
      });
    } else if (pass !== confirmPass) {
      errors.push({
        field: "confirmPass",
        message: `This doesn't match your password`
      });
    }
  }

  // Handle form submission
  const handleSubmit = () => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true);
    } else {
      // Otherwise call onSubmit with email/pass
      if (props.onSubmit) {
        props.onSubmit({
          email,
          pass
        });
      }
    }
  };

  return (
    <div className="Auth">
      {props.status && props.status.message && (
        <FormStatus type={props.status.type} message={props.status.message} />
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {["signup", "signin", "forgotpass"].includes(props.mode) && (
          <FormField
            value={email}
            type="email"
            placeholder="Email"
            icon="fa-envelope"
            size="medium"
            error={showErrors && getError("email")}
            onChange={(value: string)  => setEmail(value)}
          />
        )}

        {["signup", "signin", "changepass"].includes(props.mode) && (
          <FormField
            value={pass}
            type="password"
            placeholder="Password"
            icon="fa-lock"
            size="medium"
            error={showErrors && getError("pass")}
            onChange={(value: string) => setPass(value)}
          />
        )}

        {["signup", "changepass"].includes(props.mode) && (
          <FormField
            value={confirmPass}
            type="password"
            placeholder="Confirm Password"
            icon="fa-lock"
            size="medium"
            error={showErrors && getError("confirmPass")}
            onChange={(value: string)  => setConfirmPass(value)}
          />
        )}

        <div className="field">
          <p className="control ">
            <SectionButton
              parentColor={props.parentColor}
              fullWidth={true}
              size="medium"
              state={
                props.status && props.status.type === "pending"
                  ? "loading"
                  : "normal"
              }
            >
              {props.buttonText}
            </SectionButton>
          </p>
        </div>

        {["signup", "signin"].includes(props.mode) && (
          <div className="Auth__bottom-link has-text-centered">
            {props.mode === "signup" && (
              <>
                Have an account already?
                <Link to="/signin">Sign in</Link>
              </>
            )}

            {props.mode === "signin" && (
              <>
                <Link to="/signup">Create an account</Link>
                <Link to="/forgotpass">Forgot password?</Link>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default Auth;
