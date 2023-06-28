import { useContext } from "react";
import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
import Footer from "../layouts/Footer"
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {video && (
          <video className="bg-video" autoPlay loop muted poster={Poster}>
            <source
              src={require("../../public/img/video.mp4")}
              type="video/mp4"
            />
            <source
              src={require("../../public/img/video.mp4")}
              type="video/ogg"
            />
          </video>
        )}
        {leftImg && (
          <img
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : "img/leftimage-dark.jpg"}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
          <h3>Ola !</h3>
          <AnimationText />
          <p>
            TheBestOfCV está em busca de talentos no esporte, especificamente na modalidade de futebol. 
            Se você acredita que tem habilidades excepcionais no futebol e deseja ter a oportunidade 
            de ser avaliado pela nossa equipe, preencha o formulário abaixo.
          </p>
          <div className="call-to-actions-home">
          <div className="text-left">
              <img
                className="leftlogopicture"
                src="img/LogoTheBestWhiteText.png"
                alt=""
              />
          </div>
            <div className="text-left">
              <a
                href="#contact"
                onClick={() => changeNav("contact")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  Efetuar Inscrição
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  Ver Lista de Atletas
                </span>
              </a>
              </div>
          <div className="row contact mt-5">
          <div className="social mt-5">
                <h6 className="font-weight-600 uppercase" style={{color: "#fff"}}>Redes Sociais:</h6>
                <ul className="list-inline social social-intro text-center p-none">
                  <li className="facebook">
                    <a title="Facebook" href="#" id="cvi-iconRedes">
                      <i className="fa fa-facebook"/>
                    </a>
                  </li>
                  <li className="twitter">
                    <a title="Twitter" href="#" id="cvi-iconRedes">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="youtube">
                    <a title="Youtube" href="#" id="cvi-iconRedes">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="dribbble">
                    <a title="Dribbble" href="#" id="cvi-iconRedes">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              
              </div>
            </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
