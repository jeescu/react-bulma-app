import React from "react";
import SignInSection from "app/components/SignInSection";
import "./styles.scss";

function SigninPage(props: any) {
  return (
    <SignInSection
      color="white"
      size="large"
      title="Welcome back!"
      subtitle="Sign in to start your session"
      buttonText="Sign in"
    />
  );
}

export default SigninPage;
