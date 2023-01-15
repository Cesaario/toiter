import { useState } from "react";
import "./NovoToite.css";

const NUMERO_MAXIMO_CARACTERES = 140;

const NovoToite = () => {
  const [toite, setToite] = useState("");

  return (
    <div className="novoToite">
      <textarea
        value={toite}
        onChange={(event) => {
          if (event.target.value.length <= NUMERO_MAXIMO_CARACTERES)
            setToite(event.target.value);
        }}
      />
      <span>{`${toite.length}/${NUMERO_MAXIMO_CARACTERES}`}</span>
      <button>Enviar</button>
    </div>
  );
};

export default NovoToite;
