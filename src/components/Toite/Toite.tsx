import IToite from "../../types/IToite";
import "./Toite.css";

const Toite = (props: { toite: IToite }) => {
  return (
    <div className="toite">
      <div className="autorToite">
        <img
          src={`https://avatars.dicebear.com/api/identicon/${props.toite.autor}.svg`}
          alt="avatar"
          height="20px"
        />
        <span>
          {props.toite.autor} - {props.toite.timestamp.toLocaleTimeString()}
        </span>
      </div>
      <p>{props.toite.mensagem}</p>
    </div>
  );
};

export default Toite;
