import { useEffect, useState } from "react";
import Logo from '../assets/food.png';




const Title = () => (
  
    <img
      className="logo"
      alt="logo"
      src={Logo }
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

  
