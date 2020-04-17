import React from "react";
import SignUpSection from "app/components/SignUpSection";
import "./styles.scss";

function SignupPage(props: any) {
  return (
    <SignUpSection
      color="white"
      size="large"
      title="Get yourself an account"
      subtitle=""
      buttonText="Sign up"
    />
  );
}

export default SignupPage;
