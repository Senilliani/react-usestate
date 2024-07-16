import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <p>
        This is the footer.{" "}
        <button
          onClick={() => {
            props.setSize(40);
          }}
        >
          Make the text 40px but leave the color the same
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            if (props.setLikeCount) {
              props.setLikeCount((prev) => prev + 1);
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
