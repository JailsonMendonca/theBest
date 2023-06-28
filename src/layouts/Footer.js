import React from "react";

function Footer() {
  return (
    <footer  style={{ position: "fixed",color: "#fff",
              width: "100%",
              display: "block",
              padding: "7px",
              zIndex: "13",
              bottom: "0%",
              
              textJustify:"center", lef:"65%"}}>
                                <div className="row">
      &copy; 2023 Your Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;