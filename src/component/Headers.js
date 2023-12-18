import { useEffect, useState } from "react";
import Logo from '../assets/food.png';
import { Link } from "react-router-dom";




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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/About">About</Link>

          </li>
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
          <li>
          <Link to="/About">Cart</Link>
          </li>
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

  
