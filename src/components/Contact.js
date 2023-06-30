import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import NavContext from "../context/navContext";
const Contact = () => {
  const { nav } = useContext(NavContext);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id="contact" className={`${nav === "contact" ? "active" : ""}`}>
      <div className="contact-container">
        {/* Main Heading Starts */}
        <div className="container page-title text-center">
          <h2 className="text-center">
            Se <span>INSCREVA</span>
          </h2>
          <h2 className="text-center">
            The<span>best</span>of<span>CV</span>
          </h2>
          <span className="title-head-subtitle">
            promovendo os nossos talentos
          </span>
          <p className="mt-2 text-justify">
            Agradecemos seu interesse em participar deste evento de futebol desta vez em 
            Santa Cruz, que tem como objetivo identificar, analisar e avaliar os melhores 
            talentos no futebol em Santa Cruz - Órgãos, buscando gerir suas carreiras 
            tanto no nacional quanto internacional.
          </p>
          <p className="mt-2 text-justify">
            Esta ficha é um passo fundamental para o processo de seleção dos atletas 
            que terão a oportunidade de mostrar suas habilidades e potencial durante.
            Pedimos que respondas todas as perguntas com sinceridade.
            Nossa intenção é criar um ambiente inclusivo e oferecer oportunidades aos 
            atletas talentosos dos 14 à 25 anos, independentemente de sua origem ou 
            histórico, valorizando a diversidade.
          </p>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          <div className="row contact">
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className="col-12 col-md-12 col-xl-12 rightside">
              <form className="contactform" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  {/* Name Field Starts */}
                  <div className="form-group col-xl-6">
                    {" "}
                    <i className="fa fa-user prefix" />
                    <input
                      id="name"
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      type="text"
                      className="form-control"
                      placeholder="Seu Nome Completo(obrigatório)"
                      required=""
                    />
                  </div>
                  {/* Name Field Ends */}
                  {/* Email Field Starts */}
                  <div className="form-group col-xl-6">
                    {" "}
                    <i className="fa fa-envelope prefix" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      className="form-control"
                      placeholder="Seu Email(obrigatório)"
                      required=""
                    />
                  </div>
                  {/* Email Field Ends */}

                  {/* New input fields */}
                  <div className="form-group col-xl-6">
                    <i className="fa fa-map-marker prefix" />
                    <input
                      id="cidade"
                      name="cidade"
                      onChange={(e) => onChange(e)}
                      value={mailData.cidade}
                      type="text"
                      className="form-control"
                      placeholder="Qual a sua Cidade?(obrigatório)"
                      required=""
                    />
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-map-marker prefix" />
                    <input
                      id="zona"
                      name="zona"
                      onChange={(e) => onChange(e)}
                      value={mailData.zona}
                      type="text"
                      className="form-control"
                      placeholder="Qual a sua Zona?(obrigatório)"
                      required=""
                    />
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-id-card prefix" />
                    <input
                      id="cni"
                      name="cni"
                      onChange={(e) => onChange(e)}
                      value={mailData.cni}
                      type="text"
                      className="form-control"
                      placeholder="Documento de Identificação (CNI)(obrigatório)"
                      required=""
                    />
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-phone prefix" />
                    <input
                      id="telefone"
                      name="telefone"
                      onChange={(e) => onChange(e)}
                      value={mailData.telefone}
                      type="text"
                      className="form-control"
                      placeholder="Telemóvel(obrigatório)"
                      required=""
                    />
                  </div>
                  <div className="form-group col-xl-12">
                    <label htmlFor="dataNasc">Data de Nascimento</label>
                    <input
                      id="dataNasc"
                      name="dataNasc"
                      onChange={(e) => onChange(e)}
                      value={mailData.dataNasc}
                      type="date"
                      className="form-control"
                      required=""
                    />
                  </div>

                  {/* Comment Textarea Starts */}
                  <div className="form-group col-xl-12">
                    {" "}
                    <i className="fa fa-comments prefix" />
                    <textarea
                      id="comment"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      className="form-control"
                      placeholder="Escreva um pouco sobre você(opcional)"
                    />{" "}
                  </div>
                  <div className="col-12">
                    <h6 className="ml-3">Informações Médicas (Opcional):</h6>
                  </div>
                  <div className="form-group col-xl-12">
                    <i className="fa fa-comments prefix" />
                    <textarea
                      id="infoMedico"
                      name="infoMedico"
                      onChange={(e) => onChange(e)}
                      value={mailData.infoMedico}
                      className="form-control"
                      placeholder="Possui alguma condição médica relevante? 
                      (Por exemplo, asma, alergias, lesões recentes). Se sim, por favor, especifique."
                    />
                  </div>

                  <div className="col-12">
                    <h6 className="ml-3">Informação sobre a carreira desportiva (Opcional):</h6>
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-users prefix" />
                    <input
                      id="clube"
                      name="clube"
                      onChange={(e) => onChange(e)}
                      value={mailData.clube}
                      type="text"
                      className="form-control"
                      placeholder="Clube Atual"
                    />
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-trophy prefix" />
                    <input
                      id="premio"
                      name="premio"
                      onChange={(e) => onChange(e)}
                      value={mailData.premio}
                      type="text"
                      className="form-control"
                      placeholder="Principais Conquistas/Prêmios"
                    />
                  </div>

                  <div className="col-12">
                    <h6 className="ml-3">Contato de Emergência (obrigatório):</h6>
                  </div>
                  <div className="form-group col-xl-12">
                    <i className="fa fa-user prefix" />
                    <input
                      id="responsEducacao"
                      name="responsEducacao"
                      onChange={(e) => onChange(e)}
                      value={mailData.responsEducacao}
                      type="text"
                      className="form-control"
                      placeholder="Nome do encarregado (a) de educação"
                      required=""
                    />
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-phone prefix" />
                    <input
                      id="responsEducacaoContato"
                      name="responsEducacaoContato"
                      onChange={(e) => onChange(e)}
                      value={mailData.responsEducacaoContato}
                      type="text"
                      className="form-control"
                      placeholder="Contacto encarregado (a) de educação"
                      required=""
                    />
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-users prefix" />
                    <input
                      id="responsEducacaoGrau"
                      name="responsEducacaoGrau"
                      onChange={(e) => onChange(e)}
                      value={mailData.responsEducacaoGrau}
                      type="text"
                      className="form-control"
                      placeholder="Grau de parentesco"
                      required=""
                    />
                  </div>

                  <div className="col-12">
                    <h6 className="ml-3">Se no caso for menor de idade, Enviar o documento do Encarregado de Educação:</h6>
                  </div>
                  <div className="form-group col-xl-12">
                    <label htmlFor="docEncaregado">
                      Adicionar documentos do encarregado da educação
                    </label>
                    <input
                      id="docEncaregado"
                      name="docEncaregado"
                      onChange={(e) => onChange(e)}
                      value={mailData.docEncaregado}
                      type="file"
                      className="form-control"
                    />
                  </div>

                  {/* Payment Methods Card */}
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header" id="cvi-cardBanc"><a>Métodos de Pagamento</a></div>
                      <div className="card-body" id="cvi-cardBanc">
                        <p>Em caso de transferência ou depósito bancário, por favor utilizar
                          apenas os dados apresentados nesse formulário:</p>
                        <p><a>Banco:</a> Caixa Economia</p>
                        <p><a>Nº Conta:</a> 02845993910001</p>
                        <p><a>NIB:</a> 000200002845993910113</p>
                        <hr />
                        <p><a>Banco:</a> BCN</p>
                        <p><a>Nº Conta:</a> 614563610001</p>
                        <p><a>NIB:</a> 0004 0000 06145636101 80</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods radio*/}
                  <div className="col-12 mt-4">
                    <h6 className="ml-3">Escolha o método de pagamento (obrigatório):</h6>
                  </div>
                  <div className="form-group col-xl-12 ml-4">
                    <div className="cvi-custom-radio">
                      <input
                        id="transBanco"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        value="transBanco"
                      />
                      <label htmlFor="transBanco">Transferência Bancária</label>
                    </div>
                    <div className="cvi-custom-radio">
                      <input
                        id="depositBanco"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        value="depositBanco"
                      />
                      <label htmlFor="depositBanco">Depósito Bancário</label>
                    </div>
                    <div className="cvi-custom-radio">
                      <input
                        id="localPagar"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        value="localPagar"
                      />
                      <label htmlFor="localPagar">No local de inscrição</label>
                    </div>
                    <div className="cvi-custom-radio">
                      <input
                        id="posteriorPagar"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        value="posteriorPagar"
                      />
                      <label htmlFor="posteriorPagar">
                        Garantir o Lugar e Efetuar Pagamento Posterior (Em caso de Pagamento
                        Posterior o Atleta compromete-se a fazer o pagamento no primeiro dia do Evento, A nossa equipa vai entrar em contato para + esclarecimentos)
                      </label>
                    </div>
                  </div>

                  {/* Additional file input */}
                  <div className="form-group col-xl-12">
                    <label htmlFor="comprovativo" style={{ color: "#fff" }}>
                      Em caso de depósito ou transferência, adicionar o comprovativo
                    </label>
                    <input
                      id="comprovativo"
                      name="comprovativo"
                      onChange={(e) => onChange(e)}
                      value={mailData.comprovativo}
                      type="file"
                      className="form-control"
                    />
                  </div>

                  {/* Additional checkboxes */}
                  <div className="col-12 mt-4">
                    <h6 className="ml-3">Entregar o Documento de Identificação:</h6>
                  </div>
                  <div className="form-group col-xl-12 ml-4">
                    <div className="cvi-custom-radio">
                      <input
                        id="docNaoEntregue"
                        name="documentDelivery"
                        type="radio"
                        className="form-check-input"
                        value="docNaoEntregue"
                      />
                      <label htmlFor="docNaoEntregue">Não, Entregar depois</label>
                    </div>
                    <div className="cvi-custom-radio">
                      <input
                        id="docEntregue"
                        name="documentDelivery"
                        type="radio"
                        className="form-check-input"
                        value="docEntregue"
                      />
                      <label htmlFor="docEntregue">Sim, Anexar</label>
                    </div>
                  </div>

                  {/* Additional file input */}
                  <div className="form-group col-xl-12">
                    <label htmlFor="docAtleta" style={{color:"#fff"}}>Documento de Identificação (Se sim)</label>
                    <input
                      id="docAtleta"
                      name="docAtleta"
                      onChange={(e) => onChange(e)}
                      value={mailData.docAtleta}
                      type="file"
                      className="form-control"
                    />
                  </div>


                </div>

                {/* Submit Form Button Starts */}
                <div className="submit-form">
                  <button
                    className="btn button-animated"
                    type="submit"
                    name="send"
                  >
                    <span>
                      <i className="fa fa-send" /> Enviar Inscrição
                    </span>
                  </button>
                </div>

                {/* Submit Form Button Ends */}
                <div className="form-message">
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>{" "}
                  <span className="output_message text-center font-weight-600 uppercase" />
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
