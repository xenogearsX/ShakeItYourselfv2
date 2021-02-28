import appstore from "../data/images/appStore.png"
import playstore from "../data/images/playstore.png"
import twitter from "../data/images/twitter.png"
import facebook from "../data/images/facebook.png"
import youtube from "../data/images/YouTube.png"
import instagram from "../data/images/instagram.jpeg"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
      <p className="abus">
        L'abus d'alcool est dangereux pour la santé.
        <a id="infoService" href="https://www.alcool-info-service.fr/">
          www.alcool-info-service.fr
        </a>
      </p>
      <div className="contenu-footer">
        <div className="telechargement">
          <p className="titreTelechargement">TÉLÉCHARGEZ L'APPLI</p>
          <div className="imgstore">
            <div className="appstore">
              <a href="https://www.apple.com/app-store/">
                <img src={appstore} alt="appstore" />
              </a>
            </div>
            <div className="googleplay">
              <a href="https://play.google.com/store">
                <img src={playstore} alt="playstore" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact">
          <ul className="liste-contact">
            <li className="titre-contact">CONTACTEZ NOUS</li>
            <li className="contact-list" id="formulairecontact">
              <Link to="/form">Formulaire de contact</Link>
            </li>
            <li className="contact-list">9 rue du code, San Francisco</li>
            <li className="contact-list">contact@shakeityourself.com</li>
          </ul>
        </div>

        <div className="reseaux">
          <p className="suis-nous">SUIVEZ NOUS</p>
          <ul className="listeMedia">
            <li className="media">
              <a href="https://twitter.com/">
                <img src={twitter} alt="icones réseaux sociaux" />
              </a>
            </li>
            <li className="media">
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="icones réseaux sociaux" />
              </a>
            </li>
            <li className="media">
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="icones réseaux sociaux" />
              </a>
            </li>
            <li className="media">
              <a href="https://www.youtube.com/">
                <img src={youtube} alt="icones réseaux sociaux" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p id="copyright">
          Copyright &copy; 2020 Shake it Yourself by CodeMeMore
        </p>
        <p className="mention">
          <Link to="/legal">Mentions légales</Link>
        </p>
        <p className="condition">
          <Link to="/condition">
            Conditions générales d'utilisation
          </Link>
        </p>
        <p className="politique">
          <Link to="/politic">
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
