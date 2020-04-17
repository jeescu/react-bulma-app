import React from "react";
import "./styles.scss";

function FormField(props: any) {
  const {
    type,
    value,
    placeholder,
    icon,
    size,
    error,
    ...otherProps
  } = props;
  return (
    <div className="field">
      <div className={"control" + (icon ? " has-icons-left": "")}>
        {type === "textarea" && (
          <textarea
            className={"textarea" + (size ? ` is-${size}` : "")}
            value={value}
            placeholder={placeholder}
            onChange={e => otherProps.onChange(e.target.value)}
          />
        )}

        {type !== "textarea" && (
          <input
            className={"input" + (size ? ` is-${size}` : "")}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={e => otherProps.onChange(e.target.value)}
          />
        )}

        {icon && (
          <span className="icon is-small is-left">
            <i className={"fas " + icon}></i>
          </span>
        )}
      </div>

      {error && <p className="help is-danger">{error.message}</p>}
    </div>
  );
}

export default FormField;
