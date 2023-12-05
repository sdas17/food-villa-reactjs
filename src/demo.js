


import React from "react";
import ReactDOM from "react-dom/client";
//default import
// import Headers,{Title} from "./component/Headers.js";
//named import
// import {Title,Headers}from "./component/Headers";
// import {Title,Headers} from "./component/Headers";
// import * as xyz from "./component/Headers"
import Headers from "./component/Headers";
import Body from "./component/Body";
import Footer from "./component/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <>
      {/* <xyz.Headers /> */}
      <Headers/>
      <Body />

      <Footer />
    </>
  );
};

root.render(<AppLayout />);



