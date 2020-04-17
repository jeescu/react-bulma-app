import React, { useState } from "react";
import Auth from "../Auth";
import { useAuth } from "utils/auth";
import "./styles.scss";

function SignUp(props: any) {
  const auth = useAuth();
  const [status, setStatus]= useState({});

  const onSubmit = ({ email, pass }: any) => {
    setStatus({ type: "pending" });
    auth
      .signup(email, pass)
      .then((user: any) => {
        props.onSignup && props.onSignup();
      })
      .catch((error: any) => {
        setStatus({
          type: "error",
          message: error.message
        });
      });
  };

  return (
    <Auth
      mode="signup"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default SignUp;
