import React from "react";
import Section from "app/components/Section";
import SectionHeader from "app/components/SectionHeader";
import SignIn from "app/components/SignIn";
import { useRouter } from "utils/router";
import "./styles.scss";

function SignInSection(props: any) {
  const router = useRouter();

  // Go to page after signin
  const onSignin = () => {
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
        <SignIn
          buttonText={props.buttonText}
          parentColor={props.color}
          onSignin={onSignin}
        />
      </div>
    </Section>
  );
}

export default SignInSection;
