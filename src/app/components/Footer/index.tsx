import React from "react";
import Section from "../Section";
import { Link } from "utils/router";
import "./styles.scss";

function Footer(props: any) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link to="/">
            <img src={props.logo} alt="Logo" />
          </Link>
        </div>
        <div className="links right">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social right"></div>
        <div className="copyright left">{props.copyright}</div>
      </div>
    </Section>
  );
}

export default Footer;
