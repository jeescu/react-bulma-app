import React, { useState } from "react";
import Auth from "app/components/Auth";
import { useAuth } from "utils/auth";
import "./styles.scss";

function SignIn(props: any) {
  const auth = useAuth();
  const [status, setStatus] = useState({});

  const onSubmit = ({ email, pass }: any) => {
    setStatus({ type: "pending" });

    auth
      .signin(email, pass)
      .then((user: any) => {
        props.onSignin && props.onSignin();
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
      mode="signin"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default SignIn;
