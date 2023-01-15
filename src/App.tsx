import Banner from "./components/Banner/Banner";
import NovoToite from "./components/NovoToite/NovoToite";
import Toites from "./components/Toites/Toites";
import "./App.css";
import Usuario from "./components/Usuario/Usuario";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");

  return (
    <div className="App">
      <Banner />
      <NovoToite />
      <Toites />
      <Usuario nome={nome} setNome={setNome} />
    </div>
  );
}

export default App;
