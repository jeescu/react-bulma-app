import React from "react";
import HeroSection from "app/components/HeroSection";
// import { useRouter } from "utils/router";
import "./styles.scss";

function HomePage(props: any) {
  // const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="medium"
        decoration="bold"
        title="Hero title"
        subtitle="Hero subtitle"
        buttonText="Button"
        image="https://bulma.io/images/book/book-cover@2x.png"
        buttonOnClick={() => {}}
      />
    </>
  );
}

export default HomePage;
