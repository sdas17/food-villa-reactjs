


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
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './component/About';
import Error from "./component/Error";


const AppLayout = () => {
  return (
    <>
      {/* <xyz.Headers /> */}
      <Headers/>
      <Body />
      {/* <Title/> */}

      <Footer />
    </>
  );
};

const approutes=createBrowserRouter([
{
path:"/",
element:<AppLayout/>,
errorElement:<Error/>
},
{
  path:"/about",
  element:<About/>
},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approutes}/>);
// root.render(<AppLayout/>);



