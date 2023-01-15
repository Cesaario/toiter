import { useEffect, useState } from "react";
import IToite from "../../types/IToite";
import Toite from "../Toite/Toite";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../shared/firebase";
import "./Toites.css";

const Toites = () => {
  const [toites, setToites] = useState<IToite[]>([]);

  useEffect(() => {
    const queryToites = query(
      collection(db, "toites"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(queryToites, (collection) => {
      const toites = collection.docs.map((doc) => {
        const docData = doc.data() as unknown as IToite;
        return { ...docData, id: doc.id };
      });
      setToites(toites);
    });

    () => unsubscribe();
  }, []);

  return (
    <>
      {toites.length > 0 && (
        <div className="toites">
          {toites.map((toite) => (
            <Toite key={toite.id} toite={toite} />
          ))}
        </div>
      )}
    </>
  );
};

export default Toites;
