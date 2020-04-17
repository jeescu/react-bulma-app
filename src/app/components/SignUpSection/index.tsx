import React from "react";
import Section from "app/components/Section";
import SectionHeader from "app/components/SectionHeader";
import SignUp from "app/components/SignUp";
import { useRouter } from "utils/router";
import "./styles.scss";

function SignUpSection(props: any) {
  const router = useRouter();

  // Go to page after signup
  const onSignup = () => {
    router.push("/dashboard");
  };

  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <SignUp
          buttonText={props.buttonText}
          parentColor={props.color}
          onSignup={onSignup}
        />
      </div>
    </Section>
  );
}

export default SignUpSection;
