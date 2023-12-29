import React, { useState } from "react";
import "./dropdown.scss";

function Dropdown(props) {
  const { title } = props;
  const { data } = props;
  const [dropdown, isOpen] = useState(false);
  if (dropdown === false) {
    return (
      <div className="dropdown">
        <div className="dropdown--head" style={{ borderRadius: "10px" }}>
          <div className="dropdown--title">{title}</div>
          <i
            className="fa-solid fa-angle-up dropdown--arrow"
            onClick={() => {
              isOpen(true);
            }}
          ></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdown">
        <div className="dropdown--head">
          <div className="dropdown--title">{title}</div>
          <i
            className="fa-solid fa-angle-down dropdown--arrow"
            onClick={() => {
              isOpen(false);
            }}
          ></i>
        </div>
        <div>
          {data.description ? (
            <p className="dropdown--description">{data.description}</p>
          ) : (
            <ul className="dropdown--description">
              {data.map((equip, i ) => (
                <li key={i} className="dropdown--equip">{equip}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;
