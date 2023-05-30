import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_main">
        <div className="footer_nav">
          <div className="links">
            <div className="tittle_footer">
              <a href="">Afiliate</a>
            </div>
            <div className="tittle_footer">
              <a href="">Comunidad</a>
            </div>
            <div className="tittle_footer">
              <a href="">Nosotros</a>
            </div>
            <div className="tittle_footer">
              <a href="">Que hacemos?</a>
            </div>
          </div>
          <div className="social">
            <p className="tittle_footer">Nuestras Redes</p>
            <div className="social_network">
              <img src="../src/assets/img/Facebook.png" alt="" />
              <img src="../src/assets/img/Instagram.png" alt="" />
            </div>
          </div>
          <div className="contact">
            <p className="tittle_footer">Telefono</p>
            <p className="text">555555555</p>
            <p className="tittle_footer">Correo</p>
            <p className="text">correo@correo.com</p>
          </div>
          <div className="loc">
            <p className="tittle_footer">Ubicación</p>
            <p className="loc_name">
              Estocolmo 522 Uruapan Centro, Michoacán de Ocampo, Mexico
            </p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.356879856353!2d-102.05451338517291!3d19.396980386904527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842de28c79759ee9%3A0xb93264047feeba30!2sC.%20Estocolmo%20522%2C%20Aguacates%2C%2060170%20Uruapan%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1678768968505!5m2!1ses-419!2smx"
              width="169"
              height="129"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="omd_logo">
          <img
            src="../src/assets/img/OMD_blanco.png"
            alt=""
            height={143}
            width={235}
          />
        </div>
      </div>
      <div className="copy">
        <p className="tittle_footer">COPYRIGHT © OMD</p>
      </div>
    </div>
  );
};

export default Footer;
