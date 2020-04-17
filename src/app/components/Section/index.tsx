import React from "react";
import BackgroundImage from "../BackgroundImage";
import "./styles.scss";

function Section(props: any) {
  const {
    color,
    size,
    decoration,
    backgroundImage,
    backgroundImageOpacity,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        "SectionComponent hero section is-block is-relative" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "") +
        (decoration ? ` is-${decoration}` : "")
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
        />
      )}

      {props.children}
    </section>
  );
}

export default Section;
