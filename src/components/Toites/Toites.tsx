import IToite from "../../types/IToite";
import Toite from "../Toite/Toite";
import "./Toites.css";

const Toites = () => {
  const toitesMocks: IToite[] = [
    {
      autor: "Morsa Anônima",
      mensagem: "Muito bacana o/",
      timestamp: new Date(),
      id: 0,
    },
    {
      autor: "Peixe Anônimo",
      mensagem: "Teste 1, Teste 2, Teste 919",
      timestamp: new Date(),
      id: 1,
    },
    {
      autor: "Lêmure Anônimo",
      mensagem:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      timestamp: new Date(),
      id: 2,
    },
  ];

  return (
    <div className="toites">
      {toitesMocks.map((toite) => (
        <Toite key={toite.id} toite={toite} />
      ))}
    </div>
  );
};

export default Toites;
