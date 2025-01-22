import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";

import "./App.css";

import Profile from "./components/Profile";
import recipes from "./data/recettes.json"


// import Hello from "./components/Hello";

function App() {
  const [name, setName] = useState("Toto");
  const [age, setAge] = useState(0);

  let [counter , setCounter] = useState(0);

  console.log("APP");

  console.log(recipes);
  
  const r = JSON.stringify(recipes)

  localStorage.setItem("recipes", r);

  useEffect(() => {
    //Runs only on the first render
    // alert("Age update")
    setCounter( (prev => prev + 1))
  }, [age]);

  function handleAge(e) {
    console.log(e.target.value);
    setAge(e.target.value);
  }
  // fonction addRecipe

  // deleteRecipe

  // updateRecipe

  return (
    <main>
  
      <p>Compteur: {counter}</p>
      <input
        className="border border-black"
        type="text"
        value={age}
        onChange={handleAge}
      />

      {
        age >= 18 ? <p>Vous êtes autorisé</p> : <p style={{color: "red"}} >Vous n'êtes pas autorisé</p>
      }
      {
        age >= 18 ? <Profile userName={name} userAge={age} /> : ""
      }
    </main>
  );
}

export default App;
