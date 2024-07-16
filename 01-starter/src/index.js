import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [size, setSize] = useState(25);
  const [color, setColor] = useState("green");
  const [likes, setLikes] = useState(0);

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  function ourButtonHandler() {
    setSize(20);
    setColor("pink");
  }

  return (
    <div className="grid-parent">
      <div className="header">
        <h1>Welcome To Our App!!!!!</h1>
        <p>
          The current size is {size} and the current color is {color}.
        </p>
        <p>
          This page has been liked <strong>{likes}</strong> times.
        </p>
      </div>
      <div className="sidebar">
        <input type="text" value={size} onChange={handleSizeChange} />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={ourButtonHandler}>
          Make the text {size}px and {color}
        </button>
      </div>
      <div className="main-area" style={{ color, fontSize: `${size}px` }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod
          obcaecati dolore debitis amet aut, excepturi voluptas ratione
          quibusdam laboriosam, optio pariatur provident doloremque consequatur
          animi? Consequuntur, officiis. Explicabo, vel.
        </p>
      </div>
      <footer className="footer">
        <p>
          This is the footer.{" "}
          <button onClick={() => setSize(40)}>
            Make the text 40px but leave the color the same
          </button>
        </p>
        <p>
          <button onClick={() => setLikes((prev) => prev + 1)}>
            Like The Page
          </button>
        </p>
      </footer>
    </div>
  );
}

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
