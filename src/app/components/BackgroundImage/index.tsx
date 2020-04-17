import React from "react";
import "./styles.scss";

function BackgroundImage(props: any) {
  const style: any = {
    "--image": `url(${props.image})`,
    "--opacity": props.opacity
  }
  return (
    <div
      className="BackgroundImage"
      style={style}
    />
  );
}

export default BackgroundImage;
