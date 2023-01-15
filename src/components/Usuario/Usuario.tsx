import { useEffect } from "react";
import "./Usuario.css";
import { obterNomeAnimalAleatorio } from "./usuarioUtils";

const Usuario = (props: { nome: string; setNome: (nome: string) => void }) => {
  useEffect(() => {
    props.setNome(obterNomeAnimalAleatorio());
  }, []);
  return (
    <div className="usuario">
      <img
        src={`https://avatars.dicebear.com/api/identicon/${props.nome}.svg`}
        alt="avatar"
        height="40px"
      />
      <span>{props.nome}</span>
    </div>
  );
};

export default Usuario;
