import React from "react";
import OurContext from "../OurContext";

function Sidebar() {
  const state = React.useContext(OurContext);

  return (
    <div className="sidebar">
      <input
        type="text"
        value={state.size}
        onChange={(event) => state.setSize(event.target.value)}
      />
      <input
        type="text"
        value={state.color}
        onChange={(event) => state.setColor(event.target.value)}
      />
      <button
        onClick={() => {
          state.setSize(30);
          state.setColor("pink");
        }}
      >
        Make the text 30px and pink
      </button>
    </div>
  );
}

export default Sidebar;
