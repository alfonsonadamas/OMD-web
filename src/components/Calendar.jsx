import { useEffect, useState } from "react";
import "../assets/css/calendar.css";
import { useFirestore } from "../config/useFirestore";
import Spinner from "../components/Spinner";
import { auth } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import sendEventoEmail from "../config/sendEventoEmail";

const Calendar = () => {
  const { user } = useUserContext();
  const [classlist, setClasslist] = useState("false");
  const [classlist2, setClasslist2] = useState("false");
  const [classlist3, setClasslist3] = useState("false");
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [disabled3, setDisabled3] = useState(false);
  const {
    data,
    data2,
    data3,
    data4,
    data5,
    data6,
    getCalendario,
    loading,
    error,
    getRegistroEvento1,
    getRegistroEvento2,
    getRegistroEvento3,
    addRegistroEvento,
  } = useFirestore();

  let uid = null;
  let email = null;

  if (user) {
    uid = auth.currentUser.uid;
    email = auth.currentUser.email;
  }

  useEffect(() => {
    getCalendario();

    getRegistroEvento2(uid);
    getRegistroEvento3(uid);
  }, []);

  const handdleToggle = () => {
    setClasslist(!classlist);
  };
  const handdleToggle2 = () => {
    setClasslist2(!classlist2);
  };
  const handdleToggle3 = () => {
    setClasslist3(!classlist3);
  };

  const registroEvento1 = async () => {
    await getRegistroEvento1(uid);
    if (data4.length === 0) {
      addRegistroEvento(uid, "evento1", email);
      setDisabled(true);

      let dia;
      let mes;
      let año;
      let hora;
      let nombre;
      let lugar;

      data.map((item) => {
        dia = item.dia;
        mes = item.mes;
        año = item.año;
        hora = item.hora;
        nombre = item.titulo;
        lugar = item.lugar;
      });

      sendEventoEmail(email, nombre, dia, mes, año, hora, lugar);
    }
  };

  const registroEvento2 = async () => {
    await getRegistroEvento1(uid);
    if (data5.length === 0) {
      addRegistroEvento(uid, "evento2", email);
      setDisabled2(true);

      let dia;
      let mes;
      let año;
      let hora;
      let nombre;
      let lugar;

      data2.map((item) => {
        dia = item.dia;
        mes = item.mes;
        año = item.año;
        hora = item.hora;
        nombre = item.titulo;
        lugar = item.lugar;
      });

      sendEventoEmail(email, nombre, dia, mes, año, hora, lugar);
    }
  };

  const registroEvento3 = async () => {
    await getRegistroEvento1(uid);
    if (data6.length === 0) {
      addRegistroEvento(uid, "evento3", email);
      setDisabled3(true);

      let dia;
      let mes;
      let año;
      let hora;
      let nombre;
      let lugar;

      data3.map((item) => {
        dia = item.dia;
        mes = item.mes;
        año = item.año;
        hora = item.hora;
        nombre = item.titulo;
        lugar = item.lugar;
      });

      sendEventoEmail(email, nombre, dia, mes, año, hora, lugar);
    }
  };

  return (
    <div className="calendar">
      <h2>Proximos Eventos</h2>

      {data.map((item) => (
        <div className={classlist ? "events" : "events active"}>
          <div className="event" onClick={handdleToggle}>
            <div>
              <div className="date">
                <div className="linea">
                  <div className="number">
                    <p>{item.dia}</p>
                  </div>
                  <div className="day">
                    <p>{item.diaAbreviacion}</p>
                    <p>{item.mesAbreviacion}</p>
                  </div>
                </div>
                <div className="eventName">
                  <p>{item.titulo}</p>
                </div>
              </div>

              <div className="location">
                <p>
                  {item.dia} de {item.mes} {item.año}, {item.hora}
                </p>
                <p>{item.lugar}</p>
              </div>
            </div>
            {user ? (
              <button onClick={registroEvento1} disabled={disabled}>
                Registrarme
              </button>
            ) : (
              <button onClick={registroEvento1} disabled>
                Registrarme
              </button>
            )}
          </div>
        </div>
      ))}

      {data2.map((item) => (
        <div className={classlist2 ? "events" : "events active"}>
          <div className="event" onClick={handdleToggle2}>
            <div>
              <div className="date">
                <div className="linea">
                  <div className="number">
                    <p>{item.dia}</p>
                  </div>
                  <div className="day">
                    <p>{item.diaAbreviacion}</p>
                    <p>{item.mesAbreviacion}</p>
                  </div>
                </div>
                <div className="eventName">
                  <p>{item.titulo}</p>
                </div>
              </div>

              <div className="location">
                <p>
                  {item.dia} de {item.mes} {item.año}, {item.hora}
                </p>
                <p>{item.lugar}</p>
              </div>
            </div>
            {user ? (
              <button onClick={registroEvento2} disabled={disabled2}>
                Registrarme
              </button>
            ) : (
              <button onClick={registroEvento2} disabled>
                Registrarme
              </button>
            )}
          </div>
        </div>
      ))}
      {data3.map((item) => (
        <div className={classlist3 ? "events" : "events active"}>
          <div className="event" onClick={handdleToggle3}>
            <div>
              <div className="date">
                <div className="linea">
                  <div className="number">
                    <p>{item.dia}</p>
                  </div>
                  <div className="day">
                    <p>{item.diaAbreviacion}</p>
                    <p>{item.mesAbreviacion}</p>
                  </div>
                </div>
                <div className="eventName">
                  <p>{item.titulo}</p>
                </div>
              </div>

              <div className="location">
                <p>
                  {item.dia} de {item.mes} {item.año}, {item.hora}
                </p>
                <p>{item.lugar}</p>
              </div>
            </div>
            {user ? (
              <button onClick={registroEvento3} disabled={disabled3}>
                Registrarme
              </button>
            ) : (
              <button onClick={registroEvento3} disabled>
                Registrarme
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
