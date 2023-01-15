import { deleteDoc, doc } from "firebase/firestore";
import IToite from "../../types/IToite";
import "./Toite.css";
import { db } from "../../shared/firebase";

const Toite = (props: { toite: IToite }) => {
  const deletarToite = async () => {
    if (props.toite.id) await deleteDoc(doc(db, "toites", props.toite.id));
  };

  return (
    <div className="toite">
      <div className="autorToite">
        <img
          src={`https://avatars.dicebear.com/api/identicon/${props.toite.autor}.svg`}
          alt="avatar"
          height="20px"
        />
        <span>
          {props.toite.autor} -{" "}
          {props.toite.timestamp.toDate().toLocaleTimeString()}
        </span>
      </div>
      <p>{props.toite.mensagem}</p>
      <button onClick={deletarToite}>X</button>
    </div>
  );
};

export default Toite;
