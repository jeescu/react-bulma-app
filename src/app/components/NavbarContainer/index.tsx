import React from "react";
import "./styles.scss";

function NavbarContainer(props: any) {
  return (
    <nav
      className={
        "navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")
      }
    >
      {props.children}
    </nav>
  );
}

export default NavbarContainer;
