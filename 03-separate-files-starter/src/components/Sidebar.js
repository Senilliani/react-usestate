import React from "react";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <input
        type="text"
        value={props.size}
        onChange={(event) => props.setSize(event.target.value)}
      />
      <input
        type="text"
        value={props.color}
        onChange={(event) => props.setColor(event.target.value)}
      />
      <button
        onClick={() => {
          props.setSize(30);
          props.setColor("pink");
        }}
      >
        Make the text 30px and pink
      </button>
    </div>
  );
}

export default Sidebar;
