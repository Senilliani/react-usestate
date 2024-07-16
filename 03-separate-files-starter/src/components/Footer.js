import React from "react";
import OurContext from "../OurContext";

function Footer() {
  const state = React.useContext(OurContext);

  return (
    <footer className="footer">
      <p>
        This is the footer.{" "}
        <button
          onClick={() => {
            state.setSize(40);
          }}
        >
          Make the text 40px but leave the color the same
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            if (state.setLikeCount) {
              state.setLikeCount((prev) => prev + 1);
            } else {
              console.error("setLikeCount prop is not passed correctly");
            }
          }}
        >
          Like The Page
        </button>
      </p>
    </footer>
  );
}

export default Footer;
