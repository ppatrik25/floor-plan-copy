import "./styles.css";
import Office from "./img";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(undefined);

  return (
    <div className="App">
      <div className="rooms">
        <h2>Découvrez le bureau</h2>
        <p className="tip">
          Survolez une pièce ci-dessous, ou sur le plan, pour la situer.
        </p>
        <div>
          <b>Bureaux</b>
        </div>
        <div
          onMouseEnter={() => setSelected("office-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "office-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#3b82f6"
            }}
          ></span>
          Bureau n°1
        </div>
        <br />
        <div>
          <b>Salles de réunion</b>
        </div>
        <div
          onMouseEnter={() => setSelected("meeting-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "meeting-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#a229b6"
            }}
          ></span>
          Salle de réunion n°1
        </div>
        <div
          onMouseEnter={() => setSelected("meeting-2")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "meeting-2" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#a229b6"
            }}
          ></span>
          Salle de réunion n°2
        </div>
        <br />
        <div>
          <b>Communs</b>
        </div>
        <div
          onMouseEnter={() => setSelected("kitchen-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "kitchen-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#f43f5e"
            }}
          ></span>
          Cuisine
        </div>
        <div
          onMouseEnter={() => setSelected("wc-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "wc-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#34d399"
            }}
          ></span>
          WC
        </div>
      </div>
      <Office
        selected={selected}
        onHovered={(id) => {
          setSelected(id);
        }}
      />
    </div>
  );
}
