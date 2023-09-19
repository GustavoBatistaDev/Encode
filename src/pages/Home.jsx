import logo from '../assets/Logotipo icon 1.png';
import logo2 from '../assets/Logotipo 2.png';

import ux from '../assets/31.svg';
import head from '../assets/4two.svg';
import rocket from '../assets/Base3 (1).svg';

import sky from '../assets/Base4.svg';
import arrow from '../assets/arrow.svg';
import monitor from '../assets/image 1main.svg';
import boy from '../assets/Groupboy.svg';

import notebook from '../assets/Framenotebook.svg';
import graphics from '../assets/Groupgraphics.svg';
import bag from '../assets/correct.svg';

import { useInView } from 'react-intersection-observer';

import { Divide as Hamburguer } from 'hamburger-react';

import './Style.css';
import { useRef, useState } from 'react';

export const Home = () => {

    const [ref, inView] = useInView();
    const [ref3, inView3] = useInView();
    const [ref5, inView5] = useInView();
    const [ref6, inView6] = useInView();
    const [ref9, inView9] = useInView();
    const [ref10, inView10] = useInView();
    const [ref11, inView11] = useInView();

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuMobile = () => {
        setIsOpen(!isOpen);
    };

    const name = useRef();
    const message = useRef();

    const sendMessage = (e) => {
        e.preventDefault();
        const nameValue = name.current.value;
        const messageValue = message.current.value;
        const whatsappURL = `https://wa.me/5573981241191?text=Nome:${encodeURIComponent(nameValue)}%0A%0AMensagem:${encodeURIComponent(messageValue)}`;
        window.location.href = whatsappURL;
    };

    return (
        <>
            <>
                <header className="cabecalho effect min-height">
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
                                        <a href="https://wa.me/5573981241191">
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
                                <Hamburguer onToggle={handleMenuMobile} size="26" color='#FFFFFF' />
                                <ul className={`menu-mobile ${isOpen ? "open" : "close"}`}>


                                    <li>
                                        <i className="fa-brands fa-linkedin-in mr-2" />
                                        <a className='text-white text-center' href="">Linkedin</a>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-instagram mr-2" />
                                        <a className='text-white text-center' href="">Instagram</a>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-whatsapp mr-2" />
                                        <a className='text-white text-center' href="https://wa.me/5573981241191?text=Oi,%20gostaria%20de%20solicitar%20um%20orçamento!">WhatsApp</a>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-behance mr-2" />
                                        <a className='text-white text-center' href="">Instagram</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>

                    {/* Links nav */}
                    {/* Seção header */}
                    <div id="main" className="section main-section">
                        <div className='mt-5'>
                            <div ref={ref} className={`container fade-in ${inView ? 'show' : ''}`}>
                                <div className="row">
                                    <div className="texto-header col-lg-6">
                                        <h1 className="font-weight-bold mains-title main-title">
                                            Transforme sua presença online em um sucesso!
                                        </h1>
                                        <p className='main-parag'>
                                            tenha um site responsivo, com <br /> design moderno e amplie sua clientela <br /> na internet!
                                        </p>

                                        <a className='d-flex' href="#contato">
                                            <button className="btn-header2">SAIBA MAIS</button>
                                        </a>

                                    </div>
                                    <div ref={ref3} className={`container-main-image col-lg-6 fade-in ${inView3 ? 'show' : ''}`}>
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
                        <a className='d-block text-white'>
                            <i className="fa-brands fa-whatsapp" />
                        </a>
                        <a href="#" className='d-block text-white'>
                            <i className="fa-brands fa-behance" />
                        </a>
                    </div>
                </header>
                <section className=''>
                    <section className="how">
                        <div className="container">
                            <div>
                                <div ref={ref5} className={`row d-flex justify-content-center fade-in ${inView5 ? 'show' : ''}`} >
                                    <div className="col-lg-6 part-1" >
                                        <h1 className="text-white title-2 mains-title">Como <span className='method'>Nós</span> Fazemos?</h1>
                                        <div className="box-tec">

                                            <p className='mb-5 reduce' >
                                                Um site moderno e otimizado é essencial para empresas. Com velocidade de carregamento elevada, site responsivo e uma ótima experiência do usuário, a empresa atrai e retém clientes. Além disso, a otimização no Google melhora a visibilidade nos resultados de pesquisa, impulsionando o crescimento e o sucesso do negócio.
                                            </p>
                                            <a className='d-flex' href="#services">
                                                <button className="btn-header2 up">ver todos os serviços</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-block main-container-image-description">
                                        <div className="container-images d-flex ">
                                            <div className="">
                                                <img style={{ borderRadius: '30px' }} className='description-images' src={ux} alt="" />
                                            </div>
                                            <div className="">
                                                <img style={{ borderRadius: '30px' }} className='description-images' src={head} alt="" />
                                            </div>
                                        </div>
                                        <div className="container-images d-flex ">
                                            <div className="">
                                                <img style={{ borderRadius: '30px' }} className='description-images' src={rocket} alt="" />
                                            </div>
                                            <div className="">
                                                <img className='mx-2 description-images' src={sky} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section ref={ref6} className={`effect about fade-in ${inView6 ? 'show' : ''}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="container">
                        <div>
                            <div className={`row d-flex justify-content-center `} >
                                <div className="col-lg-6 container-text-about">
                                    <h2 className='text-white about-title'>Sobre Nós</h2>
                                    <div className="box-tec">

                                        <h1 className='reduce mains-title'>
                                            Usamos nossa <span className='method'>criatividade</span> para conquistar nossos clientes
                                        </h1>
                                        <p className='about-parag mt-2'>Nosso objetivo é fornecer a você uma página online que prende o seu visitante com uma copy persuasiva e utilizar as melhores práticas de UI/UX para criar a experiência mais satisfatória para o usuário em seu site!</p>

                                    </div>
                                </div>
                                <div className="my-5 col-lg-6 d-block ">

                                    <div id='main-2' className="container-image-2 d-flex">
                                        <img id='two-image' className='mt-5' src={boy} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-5 about-services" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflowY: 'hidden' }}>
                    <section ref={ref10} className={`section1 fade-in mb-5 ${inView10 ? 'show' : ''}`}>
                        <h1 style={{ fontSize: '50px', fontWeight: 'bold' }} className="text-white text-center mains-title">Conheça os nossos <span className='method'>Serviços</span></h1>
                        <h3 className='text-center text-white mains-sub-title'>Escolha a opção que mais se adequa com seu negócio e entre em contato conosco!</h3>
                    </section>
                    <section id='services' ref={ref11} className={`section1 fade-in ${inView11 ? 'show' : ''}`}>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="">
                                    <div className="card-service">
                                        <div className="container-header">
                                            <h2>Site</h2>
                                            <h1 className='services-title mains-title'>Institucional</h1>
                                        </div>
                                        <div className="container-img-card">
                                            <img src={notebook} alt="" />
                                        </div>
                                        <div className="services-content">
                                            <ul>
                                                <li className='my-3'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Responsivo-Celular, PC & Tablet;</span>
                                                </li>

                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Tenha seu blog;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Ofereça seus serviços;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Capte clientes 24h por dia;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Criação de email comercial;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'>&nbsp;Ideal para autônomos/empresas;</span>
                                                </li>
                                            </ul>

                                        </div>
                                        <a href="https://wa.me/5573981241191?text=Oi,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20um%20site%20institucional!">
                                            <button style={{ marginTop: '40px' }} className="btn-card">Quero meu site</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-service">
                                        <div className="container-header">
                                            <h2>Site</h2>
                                            <h1 className='services-title  mains-title'>Vendas</h1>
                                        </div>
                                        <div className="container-img-card">
                                            <img src={graphics} alt="" />
                                        </div>
                                        <div className="services-content">
                                            <ul>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Responsivo-Celular, PC & Tablet;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Carregamento rápido;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Copywriting Profissional;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className='item-card'> &nbsp;Design moderno e criativo;</span>
                                                </li>
                                                <li className='my-3 text-left'>
                                                    <img src={arrow} alt="" />
                                                    <span className="item-card"> &nbsp;Integração c/ ferramentas de &nbsp;marketing;</span>
                                                </li>
                                            </ul>


                                        </div>
                                        <a href="https://wa.me/5573981241191?text=Oi,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20um%20site%20de%20vendas!">
                                            <button style={{ marginTop: '55px' }} className="btn-card">Quero meu site</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-service" >
                                        <div className="container-header">
                                            <h2>Site</h2>
                                            <h1 className='services-title mains-title'>Landing Pages</h1>
                                        </div>
                                        <div className="container-img-card my-4">
                                            <img src={bag} alt="" />
                                        </div>
                                        <div className="services-content">
                                            <ul>
                                                <div className='container-menu-mobile'>
                                                    <li className='my-3  text-left'>
                                                        <img src={arrow} alt="" />
                                                        <span className='item-card'> &nbsp;Responsivo-Celular, PC & Tablet;</span>
                                                    </li>
                                                    <li className='my-3 text-left'>
                                                        <img src={arrow} alt="" />
                                                        <span className='item-card'> &nbsp;Integração com WhatsApp;</span>
                                                    </li>
                                                    <li className='my-3 text-left'>
                                                        <img src={arrow} alt="" />
                                                        <span className='item-card'> &nbsp;Up nas vendas com UpSeils;</span>
                                                    </li>
                                                    <li className='my-3 text-left'>
                                                        <img src={arrow} alt="" />
                                                        <span className='item-card'> &nbsp;Down sells e cross sells;</span>
                                                    </li>
                                                    <li className='my-3 text-left '>
                                                        <img src={arrow} alt="" />
                                                        <span className='item-card'> &nbsp;Design 3D/Animações;</span>
                                                    </li>
                                                    <li className='my-3 text-left'>
                                                        <img src={arrow} alt="" />
                                                        <span className='item-card'> &nbsp;Melhores práticas de SEO;</span>
                                                    </li>
                                                    <li className='my-3 text-left'>
                                                        <img src={arrow} alt="" />
                                                        &nbsp;Carregamento rápido;
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                        <a href="https://wa.me/5573981241191?text=Oi,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20uma%20landing%20page!">
                                            <button className="btn-card mt-2">Quero meu site</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section ref={ref9} className={`fade-in ${inView9 ? 'show' : ''}`} >
                    <div className="container">
                        <div className="text-center mb-5">

                            <p className="p-section1 mb-4">
                                <span className="section1-nome mains-title">Conte-nos a sua necessidade</span>
                                <br />
                            </p>
                        </div>
                        <div className="form-contato">
                            <div className="row d-flex justify-content-center">
                                <div className="contato col-md-5">
                                    <h3>Envie-nos uma mensagem que nós retornaremos instantaneamente!</h3>
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
                                <div id='contato' className="formulario col-md-5">
                                    <form onSubmit={sendMessage} action="">
                                        <div className="centralizar mt-3">
                                            <label className="login-label">
                                                <input ref={name} placeholder='Digite seu nome...' type="text" name="name" className="input" />
                                            </label>
                                            <label className="login-label">

                                                <textarea ref={message} name='message' placeholder='Digite sua mensagem...' id="" className='input' cols="30" rows="4"></textarea>
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
                    <div className="container pt-3">
                        <div className="text-center">
                            <div>

                                <span className='text-white pt-2'>CNPJ: 52.155.838/0001/58 </span>
                            </div>

                            <span className='text-white font-italic'>&copy;Todos os direitos reservados</span>
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