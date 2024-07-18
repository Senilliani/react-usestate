import React from "react";
import OurContext from "../OurContext";
import DispatchContext from "../DispatchContext";

function Sidebar() {
  const state = React.useContext(OurContext);
  const dispatch = React.useContext(DispatchContext);

  return (
    <div className="sidebar">
      <input
        type="text"
        value={state.size}
        onChange={(event) =>
          dispatch({ type: "changeSize", value: event.target.value })
        }
      />
      <input
        type="text"
        value={state.color}
        onChange={(event) =>
          dispatch({ type: "changeColor", value: event.target.value })
        }
      />
      <button
        onClick={() => {
          dispatch({ type: "changeColorAndSize", color: "pink", size: 30 });
        }}
      >
        Make the text 30px and pink
      </button>
    </div>
  );
}

export default Sidebar;
