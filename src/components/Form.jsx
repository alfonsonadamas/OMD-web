import { useState } from "react";
import "../assets/css/form.css";
import sendCustomEmail from "../config/sendCustomEmail";

const Formulario = () => {
  const [loading, setLoading] = useState(false);
  const handlerSubmit = (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      let nombre = e.target.nombre.value;
      let asunto = e.target.asunto.value;
      let email = e.target.email.value;
      sendCustomEmail(email, asunto, nombre);
      e.target.nombre.value = "";
      e.target.asunto.value = "";
      e.target.email.value = "";
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact_form">
      <div className="contact_tittle">
        <h2>Contacto</h2>
      </div>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" id="usname" placeholder="Nombre" />
        <input type="text" name="asunto" id="lsname" placeholder="Telefono" />
        <input type="text" name="email" id="email" placeholder="Email" />

        {loading ? (
          <button type="submit" name="submit" id="submit" disabled>
            Enviando...
          </button>
        ) : (
          <button type="submit" name="submit" id="submit">
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};

export default Formulario;
