import { useState } from "react";
import Banner from "./components/Banner/Banner";
import NovoToite from "./components/NovoToite/NovoToite";
import Toites from "./components/Toites/Toites";
import Usuario from "./components/Usuario/Usuario";
import "./shared/firebase";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");

  return (
    <div className="App">
      <Banner />
      <NovoToite nome={nome} />
      <Toites />
      <Usuario nome={nome} setNome={setNome} />
    </div>
  );
}

export default App;
