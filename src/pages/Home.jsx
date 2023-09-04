import logo from '../assets/Logotipo icon 1.png';
import logo2 from '../assets/Logotipo 2.png';
import monitor from '../assets/monitorNovo.png';
import portifolio from '../assets/5adc69c317a82e88002b217727f36257.jpg';
import { useInView } from 'react-intersection-observer';

import './Style.css';

export const Home = () => {

    const [ref, inView] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    const [ref5, inView5] = useInView();
    const [ref6, inView6] = useInView();
    const [ref8, inView8] = useInView();
    const [ref9, inView9] = useInView();


    return (
        <>
            <>
                <header className="cabecalho mt-2">
                    <nav className="navbar navbar-expand-md">
                        <div className="container">
                            <a className="navbar-brand" href="index.html">
                                {/* Logo */}
                                <div className="row">
                                    <img
                                        src={logo}
                                        alt="icon"
                                        width={60}
                                        height={48}
                                    />
                                    <p className="ml-3 mt-2">encode</p>
                                </div>
                            </a>
                            {/* Fim logo */}
                            {/* Links nav */}
                            <div>
                                <ul className="navbar-nav">
                                    <div className="icons">
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                        <a  href="https://web.whatsapp.com/send?phone=5573981933667">
                                            <i className="fa-brands fa-whatsapp" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-behance" />
                                        </a>
                                    </div>
                                    <a  
                                        target="_blank"
                                        className="ml-auto"
                                        href="https://web.whatsapp.com/send?phone=5573981933667" rel="noreferrer"
                                    >
                                        <button className="btn-header">Fale Conosco</button>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Links nav */}
                    {/* Seção header */}
                    <div className="container">
                        <div className="row">
                            <div ref={ref} className={`texto-header col-md-6  fade-in ${inView ? 'show' : ''}`} >
                                <h1 className="font-weight-bold">
                                    Inovação Digital e Design de Alto Impacto.
                                </h1>
                                <p>
                                    Transforme suas ideias em uma poderosa presença online com a Encode.
                                    Desenvolvemos sites cativantes para elevar a sua marca ao próximo
                                    nível.
                                </p>
                               
                                <a href="https://web.whatsapp.com/send?phone=5573981933667" ><button className="btn-header2">SOLICITAR ORÇAMENTO</button></a>

                            </div>
                            
                            <div ref={ref3} className={`header-img col-md-6  fade-in ${inView3 ? 'show' : ''}`} >
                                <img src={monitor} />
                            </div>
                        </div>
                    </div>
                </header>
                {/* carrosel */}
                <div className="carrosel">
                    <div
                        id="carouselExampleSlidesOnly"
                        className="carousel slide text-center"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item"
                                style={{ background: "linear-gradient(to right ,#03a9f4, #FF7DB2)" }}
                            >
                                <p className="texto-carrosel">
                                    Com a Encode, tornamos o seu site altamente persuasivo.
                                </p>
                            </div>
                            <div
                                className="carousel-item active"
                                style={{ background: "linear-gradient(to right ,#FF7DB2, #3D40F4)" }}
                            >
                                <p className="texto-carrosel">
                                    Com a Encode, o design do seu site será absolutamente cativante.
                                </p>
                            </div>
                            <div
                                className="carousel-item"
                                style={{ background: "linear-gradient(to right ,#3D40F4, #03a9f4)" }}
                            >
                                <p className="texto-carrosel">
                                    Com a Encode, sua presença online se destacará nas pesquisas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* carosell */}
                <section className="section1">
                    <div className="container">
                        <div>
                            <div ref={ref4} className={`text-center col-md-12  fade-in ${inView4 ? 'show' : ''}`}>
                                <p className="p-section1 mb-5">
                                    <span className="section1-nome">ENCODE</span>
                                    <br />
                                    Desenvolvendo a solução que o seu negócio{" "}
                                    <span
                                        style={{
                                            background: "linear-gradient(to right ,#03a9f4, #FF7DB2)",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            color: "black",
                                            WebkitTextFillColor: "transparent",
                                            fontSize: "1.2em",
                                            fontWeight: 600
                                        }}
                                    >
                                        precisa!
                                    </span>
                                </p>
                            </div>
                            <div ref={ref5} className={`row d-flex justify-content-center fade-in ${inView5 ? 'show' : ''}`} >
                                <div className="col-md-6">
                                    <h1 className="method text-center"> Nossa Metodologia</h1>
                                    <div className="box-tec text-center">
                                        <h1 className="work">Como trabalhamos?</h1>
                                        <p> 
                                            Primeiro desenvolvemos a sua identidade visual e, com base nela,
                                            criamos a sua interface de usuário (UI). Em seguida,
                                            personalizamos o site para que ele reflita perfeitamente a sua
                                            identidade e estilo.
                                        </p>
                                        <a  href="https://api.whatsapp.com/send?phone=5573981933667&text=Oi,%20gostaria%20de%20mais%20informações%20sobre%20a%20Encode.%20">
                                            <button className="btn-header2">VER TODOS OS SERVIÇOS</button>
                                        </a>
                                    </div>
                                </div>
                                <div id="sd" className="col-md-6">
                                    <img
                                        className="foguete"
                                        src="https://static.wixstatic.com/media/059206_096e9b8ec2874b1bb7d412673d8a0e00~mv2.png/v1/crop/x_209,y_0,w_679,h_1080/fill/w_406,h_642,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Foguete-8-to-onePrancheta-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section2">
                    <div className="container">
                        <div ref={ref6} className={` text-center fade-in ${inView6 ? 'show' : ''}`}>
                            <p className="p-section1">
                                <span className="section1-nome">CASES</span>
                                <br />
                                Confira abaixo alguns dos projetos já{" "}
                                <span
                                    style={{
                                        background:
                                            "linear-gradient(to right ,#FF7DB2 ,#3D40F4, #03a9f4)",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        color: "black",
                                        WebkitTextFillColor: "transparent",
                                        fontSize: "1.2em",
                                        fontWeight: 600
                                    }}
                                >
                                    entregues
                                </span>{" "}
                                pela ENCODE
                            </p>
                        </div>
                    </div>
                    {/* Carrosel web */}
                    <div
                    ref={ref8} className={`carousel slide fade-in ${inView8 ? 'show' : ''}`}
                        id="carouselExampleControls"
                        
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                    <img
                                        className="d-block carrosel-img"
                                        src={portifolio}
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Próximo</span>
                        </a>
                    </div>
                    {/* Carrosel celular */}
                    <div
                        id="carouselExampleControls2"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/5adc69c317a82e88002b217727f36257.jpg"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/Logotipo 3.png"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/5adc69c317a82e88002b217727f36257.jpg"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/5adc69c317a82e88002b217727f36257.jpg"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/5adc69c317a82e88002b217727f36257.jpg"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/5adc69c317a82e88002b217727f36257.jpg"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/5adc69c317a82e88002b217727f36257.jpg"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <img
                                        className="d-block carrosel-img"
                                        src="media/5adc69c317a82e88002b217727f36257.jpg"
                                        alt="Primeiro Slide"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls2"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls2"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Próximo</span>
                        </a>
                    </div>
                    {/* Carrosel celular */}
                </section>

                <section  ref={ref9} className={`section3 fade-in ${inView9 ? 'show' : ''}`} >
                    <div className="container">
                        <div className="text-center mb-5">
                            <img src="media/Logotipo icon 1.png" className="mb-3" alt="" />
                            <p className="p-section1 mb-4">
                                <span className="section1-nome">Conte-nos a sua necessidade</span>
                                <br />
                            </p>
                        </div>
                        <div className="form-contato">
                            <div className="row d-flex justify-content-center">
                                <div className="contato col-md-5">
                                    <h3>Envie-nos um e-mail que nós entramos em contato com você!</h3>
                                    <p>
                                        Caso prefira entre em contato em qualquer rede social da{" "}
                                        <span
                                            style={{
                                                background:
                                                    "linear-gradient(to right ,#FF7DB2 ,#3D40F4, #03a9f4)",
                                                backgroundClip: "text",
                                                WebkitBackgroundClip: "text",
                                                color: "black",
                                                WebkitTextFillColor: "transparent",
                                                fontSize: "1.2em",
                                                fontWeight: 600
                                            }}
                                        >
                                            ENCODE
                                        </span>
                                    </p>
                                    <div className="icons2">
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-whatsapp" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-behance" />
                                        </a>
                                    </div>
                                </div>
                                <div className="formulario col-md-5">
                                    <form action="">
                                        <div className="centralizar mt-3">
                                            <label className="login-label">
                                                <span>Digite seu nome</span>
                                                <input type="text" name="name" className="input" />
                                            </label>
                                            <label className="login-label">
                                                <span>Digite um e-mail válido</span>
                                                <input type="email" name="email" className="input" />
                                            </label>
                                            <input
                                                type="submit"
                                                defaultValue="Enviar"
                                                className="btn-submit"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer
                    className="mt-5"
                    style={{
                        background: "linear-gradient(to right ,#FF7DB2 ,#3D40F4, #03a9f4)"
                    }}
                >
                    <div className="container">
                        <div className="text-center">
                            <div>
                                <img
                                    src={logo2}
                                    width={130}
                                    style={{ padding: "10px 0" }}
                                />
                            </div>
                        </div>
                    </div>
                </footer>
            </>

        </>

    );
};