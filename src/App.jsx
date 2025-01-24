import React from "react";
import { useState } from "react";
import Profile from "./components/Profile";


const App = () => {
  const [counter, setCounter] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  function handleClick() {
    setCounter((prevValue) => prevValue + 1);
  }
  function handleConnect() {
    setIsLoggedIn((p) => {
      return !p;
    });
  }
  const success  = {
    color: "green",
    fontWeight: "bold",
  };

  const danger = {
    color: "red",
    fontWeight: "bold", 
  }
  
  return (
 
    <div>
      <button onClick={handleClick}>CLick me {counter}</button>
      {/* connect ====> connected  */}
      <button style={isLoggedIn ? success : danger} onClick={handleConnect}> {isLoggedIn ? "connected" : "connexion" }</button>
      {/* Composant Profile */}

      {isLoggedIn && <Profile/> }
      
    </div>
  )
}

export default App;




