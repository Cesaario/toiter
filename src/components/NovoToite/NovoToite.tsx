import { useState } from "react";
import "./NovoToite.css";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../shared/firebase";
import IToite from "../../types/IToite";

const NUMERO_MAXIMO_CARACTERES = 140;

const NovoToite = (props: { nome: string }) => {
  const [textoToite, setTextoToite] = useState("");

  const enviarToite = async () => {
    const novoToite: IToite = {
      autor: props.nome,
      mensagem: textoToite,
      timestamp: Timestamp.fromDate(new Date()),
    };

    setTextoToite("");
    await addDoc(collection(db, "toites"), novoToite);
  };

  return (
    <div className="novoToite">
      <textarea
        value={textoToite}
        onChange={(event) => {
          if (event.target.value.length <= NUMERO_MAXIMO_CARACTERES)
            setTextoToite(event.target.value);
        }}
      />
      <span>{`${textoToite.length}/${NUMERO_MAXIMO_CARACTERES}`}</span>
      <button disabled={textoToite.length === 0} onClick={enviarToite}>
        Enviar
      </button>
    </div>
  );
};

export default NovoToite;
