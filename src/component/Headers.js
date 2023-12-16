import { useEffect, useState } from "react";




const Title = () => (
  
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  );


 const Headers = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  useEffect(()=>{
    console.log('use effect');
  },[isLogged])
  console.log('render');

  return (
    <div className="head">
      <Title />


      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {
               <button className="login-button" onClick={handleLogin}>
               {isLogged ? "Logout" : "Login"}
             </button>

          }
      
        </ul>
      
      </div>
     

    </div>
  );
};
export default Headers

  
