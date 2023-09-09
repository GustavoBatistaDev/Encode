import logo from '../assets/Logotipo icon 1.png';
import logo2 from '../assets/Logotipo 2.png';



import ux from '../assets/Baseessa.png';
import head from '../assets/head.svg';
import rocket from '../assets/Base3 (1).svg';
import sky from '../assets/Base4.svg';

import arrow from '../assets/arrow.svg';
import monitor from '../assets/image 1main.svg';
import boy from '../assets/Groupboy.svg';

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
    const [ref10, inView10] = useInView();
    const [ref11, inView11] = useInView();

    return (
        <>
            <>
                <header className="cabecalho effect">
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
                                        <a href="https://web.whatsapp.com/send?phone=5573981933667">
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
                   <div  className="section">
                   <div className='mt-5'>
                        <div ref={ref} className={`container fade-in ${inView ? 'show' : ''}`}>
                            <div className="row">
                                <div className="texto-header col-md-6"  >
                                    <h1 className="font-weight-bold">
                                        Transforme sua presença online em um sucesso!
                                    </h1>
                                    <p>
                                        tenha um site responsivo, com design moderno e amplie sua clientela na internet!
                                    </p>

                                    <a href="https://web.whatsapp.com/send?phone=5573981933667">
                                        <button className="btn-header2">SAIBA MAIS</button>
                                    </a>

                                </div>

                                <div ref={ref3} className={`header-img col-md-6  fade-in ${inView3 ? 'show' : ''}`} >
                                    <img className='main-image' src={monitor} />
                                </div>
                            </div>

                        </div>
                    </div>
                   </div>
                    <div className="fixed-network">
                        <a href="#" className='d-block text-white' target="_blank">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="#" className='d-block text-white'>
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="https://web.whatsapp.com/send?phone=5573981933667" className='d-block text-white'>
                            <i className="fa-brands fa-whatsapp" />
                        </a>
                        <a href="#" className='d-block text-white'>
                            <i className="fa-brands fa-behance" />
                        </a>
                    </div>
                </header>
                {/* carrosel */}
                <div style={{marginTop: '-400px'}} className="carrosel">
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
                {/* carosell  */}








                <section className='section' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <section ref={ref4} className={`fade-in ${inView4 ? 'show' : ''}`}>
                        <div className="container">
                            <div className={` text-center `}>
                                <p className="p-section1">
                                    <span className="section1-nome">ENCODE</span>
                                    <br />
                                    Transforme visitantes em clientes, e
                                    <span className='gradient'>
                                        Cliques
                                    </span> em lucros.{" "}
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="">
                        <div className="container">
                            <div>
                                <div ref={ref5} className={`row d-flex justify-content-center fade-in ${inView5 ? 'show' : ''}`} >
                                    <div className="col-md-6">
                                        <h1 className="text-white title-2">Como <span className='method'>Nós</span><br /> Fazemos?</h1>
                                        <div className="box-tec text-left">

                                            <p className='mb-5 w-75' >
                                                Um site moderno e otimizado é essencial para empresas. Com velocidade de carregamento elevada, site responsivo e uma ótima experiência do usuário, a empresa atrai e retém clientes. Além disso, a otimização no Google melhora a visibilidade nos resultados de pesquisa, impulsionando o crescimento e o sucesso do negócio.
                                            </p>
                                            <a href="https://api.whatsapp.com/send?phone=5573981933667&text=Oi,%20gostaria%20de%20mais%20informações%20sobre%20a%20Encode.%20">
                                                <button className="btn-header2">VER TODOS OS SERVIÇOS</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-block ">
                                        <div style={{ position: 'absolute', right: '0' }} className="container-images d-flex ">
                                            <div className="">
                                                <img height='250' style={{ borderRadius: '30px' }} className='mx-2' src={ux} alt="" />
                                            </div>
                                            <div className="">
                                                <img height='250' style={{ borderRadius: '30px' }} className='mx-2' src={head} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ position: 'absolute', right: '0', top: '265px' }} className="container-images d-flex ">
                                            <div className="">
                                                <img height='250' style={{ borderRadius: '30px' }} className='mx-2' src={rocket} alt="" />
                                            </div>
                                            <div className="">
                                                <img height='250'  className='mx-2' src={sky} alt="" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>


                </section>




















                <section className='section effect' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="container">
                        <div>
                            <div className={`row d-flex justify-content-center `} >
                                <div className="col-md-6">
                                    <h2 className='text-white'>Sobre Nós</h2>
                                    <div className="box-tec text-left">

                                        <h1 className='mb-5 w-75' >
                                            Usamos nossa <span style={{ fontSize: '46px' }} className='method'>criatividade</span> para conquistar nossos clientes
                                        </h1>
                                        <p className='w-75'>Nosso objetivo é fornecer a você uma página online que prende o seu visitante com uma copy persuasiva e utilizar as melhores práticas de UI/UX para criar a experiência mais satisfatória para o usuário em seu site!</p>
                                       
                                    </div>
                                </div>
                                <div className="my-5 col-md-6 d-block ">

                                    <div style={{ position: 'absolute', right: '1px', top: '-70px' }} className="container-image-2">
                                        <img height="600" src={boy} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
















                <section className="section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <section ref={ref10} className={`section1 fade-in ${inView10 ? 'show' : ''}`}>
                        <h1 style={{ fontSize: '50px' }} className="text-white text-center">Conheça os nossos <span className='method'>Serviços</span></h1>
                        <h3 className='text-center text-white'>Escolha a opção que mais se adequa com seu negócio e entre em contato conosco!</h3>
                    </section>
                    <section ref={ref11} className={`section1 fade-in ${inView11 ? 'show' : ''}`}>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="">
                                    <div className="card-service ">
                                        <div className="container-header">
                                            <h2>Site</h2>
                                            <h1 style={{ fontWeight: 'bold' }} className='services-title'>Institucional</h1>
                                        </div>
                                        <div className="services-content">
                                            <ul>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Responsivo - Celular, PC & Tablet;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Com até 5 páginas;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Tenha seu blog;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Ofereça seus serviços;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Capte clientes 24h por dia;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Criação de email comercial;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Ideal para autônomos/empresas;
                                                </li>
                                            </ul>
                                            <a href="https://web.whatsapp.com/send?phone=5573981933667">
                                                <button className="btn-footer-service">QUERO MEU SITE</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-service">
                                        <div className="container-header">
                                            <h2>Site</h2>
                                            <h1 style={{ fontWeight: 'bold' }} className='services-title'>Vendas</h1>
                                        </div>
                                        <div className="services-content">
                                            <ul>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Responsivo - Celular, PC & Tablet;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Carregamento rápido;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Copywriting profissional;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Design moderno & criativo;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Integração c/ ferramentas de  &nbsp;  &nbsp;marketing;
                                                </li>
                                            </ul>
                                            <a href="https://web.whatsapp.com/send?phone=5573981933667">
                                                <button className="btn-footer-service">QUERO MEU SITE</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-service">
                                        <div className="container-header">
                                            <h2>Site</h2>
                                            <h1 style={{ fontWeight: 'bold' }} className='services-title'>Landing Pages</h1>
                                        </div>
                                        <div className="services-content">
                                            <ul>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Responsivo - Celular, PC & Tablet;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Integração com WhatsApp;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Aumente as vendas com Up-sells;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp; Down-sells e Cross-sells;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Criação de e-mail comercial;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Criação de email comercial;
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    &nbsp;Carregamento rápido;
                                                </li>
                                            </ul>
                                            <a href="https://web.whatsapp.com/send?phone=5573981933667">
                                                <button className="btn-footer-service">QUERO MEU SITE</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </section>
















                <section >
                    <div className="container">
                        <div ref={ref6} className={` text-center fade-in ${inView6 ? 'show' : ''}`}>
                            <p className="p-section1">
                                <h1 style={{ fontSize: '52px' }} className="section1-nome">Nosso <span className='method'>Portfólio</span></h1>
                                <br />
                                A categoria de portfólio é uma seção dedicada a apresentar os trabalhos que realizamos para empresas parceiras. Aproveite para explorar nossos projetos
                                realizados e faça parte dessa história!
                            </p>
                        </div>
                    </div>


                </section>
                <section ref={ref9} className={`section3 fade-in ${inView9 ? 'show' : ''}`} >
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