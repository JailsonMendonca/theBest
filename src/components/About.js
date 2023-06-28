import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          SOBRE<span>MIN</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code beautiful things, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              O futebol é a minha paixão desde que me lembro. É mais do que um 
              esporte para mim, é uma forma de expressão. Entrar em campo e 
              jogar futebol é onde me sinto mais vivo.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">Primeiro Nome</span>
                    Daria
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Último Name</span>
                    Taylor
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Data Nascimento:</span>21 julho
                    1999
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nacionalidade:</span>
                    Caboverdiana
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Endereço:</span>Santa Cruz
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email:</span>
                     taylor@gmail.com
                  </h6>
                </li>
              </ul>
            </div>
            {/*
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+34 21 18 40
                    10
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    you@you.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Skype</span>
                    daria.taylor
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Dribbble</span>
                    taylor.dribbble
                  </h6>
                </li>
              </ul>
            </div>*/}
            <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  Baixar Meu Formulário
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                Experiência
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                        Clube Atual:
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Porto
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                        Posição em campo:
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Central
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                      Altura e Peso:
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        1,50m, 60kg
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                       Tempo de experiência no futebol:
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        2 anos como central
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Mais informações
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                        Informações Médicas
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Exames cardíacos abrangentes, testes de resistência física, 
                        exames de sangue e avaliações ortopédicas.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="font-weight-700">
                        Contato de Emergência:
                      </span>
                    </div>   
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor Degree
                        <span className="separator" />
                        
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">jquery</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">angular js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">illustrator</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">after effects</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">photoshop</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
        
      </div>
    </section>
  );
};
export default About;
