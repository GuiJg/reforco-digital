import { useState } from 'react';
import '../styles/home.css'

import bannerVideo from '../assets/banner-video.mp4'
import portugues from "../assets/portugues.png"
import matematica from "../assets/matematica.png"
import fisica from "../assets/fisica.png"
import quimica from "../assets/quimica.png"
import historia from "../assets/historia.png"

export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const articles = [
        {
            title: "Artigo 1",
            description: "Descrição do primeiro artigo. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            title: "Artigo 2",
            description: "Descrição do segundo artigo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Artigo 3",
            description: "Descrição do terceiro artigo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            title: "Artigo 3",
            description: "Descrição do terceiro artigo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            title: "Artigo 3",
            description: "Descrição do terceiro artigo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % articles.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
    };

    return (
        <div>
            <div className="banner-content">
                <video id="banner-video" autoPlay muted loop playsInline>
                    <source src={bannerVideo} type="video/mp4" />
                </video>
                <h1>
                    Conectando você ao
                    <br />
                    conhecimento que transforma.
                </h1>
                <button>Começar</button>
                <div className="banner-topics">
                    <div className="topics">
                        <i className="pi pi-home text-white text-2xl"></i>
                        <span>Ensino a distância</span>
                    </div>
                    <div className="topics">
                        <i className="pi pi-map-marker text-white text-2xl"></i>
                        <span>A qualquer hora em qualquer lugar</span>
                    </div>
                    <div className="topics">
                        <i className="pi pi-question text-white text-2xl"></i>
                        <span>Tire duvidas a qualquer momento</span>
                    </div>
                </div>
            </div >
            <div id='professor' className="flex flex-col justify-center items-center mt-10 mb-10">
                <div className="flex flex-col justify-center items-center gap-1 mt-16 mb-10">
                    <h2 className='text-4xl font-bold'>Inicie seus estudos</h2>
                    <p className='text-center font-medium'>
                        Conhecendo o universo da programação
                        <br />
                        com o reforço digital e aulas online
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-80 shadow-lg">
                        <i className="pi pi-users text-white text-5xl"></i>
                        <span>DA ESCOLA AO CONCURSO</span>
                        <p className='text-center'>Aqui temos inumeras disciplinas para voce estudar, tanto de escola quanto de concursos.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-80 shadow-lg">
                        <i className="pi pi-users text-white text-5xl"></i>
                        <span>PROFESSOR DA SUA ESCOLHA</span>
                        <p className='text-center'>São mais de 100 professores cadastrados e preparados para tirar suas dúvidas.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-80 shadow-lg">
                        <i className="pi pi-users text-white text-5xl"></i>
                        <span>CRIE SEU ARTIGO</span>
                        <p className='text-center'>Apreendeu algo novo? Crie seu artigo e compartilhe com os outros alunos.</p>
                    </div>
                </div>
                <button type="button" className="bg-[#0570DB] text-white p-2 rounded mt-5 mb-10 w-48 pt-3 pb-3 hover:bg-[#0066CC] active:bg-[#0066ccd5]">Iniciar estudos</button>
            </div>
            <div id='disciplina' className="flex flex-col justify-center items-center mt-10 mb-10">
                <div className="flex flex-col justify-center items-center gap-1 mt-16 mb-10">
                    <h2 className='text-4xl font-bold'>Nossas disciplinas</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-40 shadow-lg">
                        <span>Português</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-40 shadow-lg">
                        <span>Matematica</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-40 shadow-lg">
                        <span>História</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-40 shadow-lg">
                        <span>Física</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-40 shadow-lg">
                        <span>Química</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-40 shadow-lg">
                        <span>Geografia</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-xl p-4 bg-[#0066CC] text-white w-1/5 h-40 shadow-lg">
                        <span>Biologia</span>
                    </div>
                </div>
                <button type="button" className="bg-[#0570DB] text-white p-2 rounded mt-10 mb-10 w-48 pt-3 pb-3 hover:bg-[#0066CC] active:bg-[#0066ccd5]">Iniciar estudos</button>
            </div>
            <div className="flex justify-center items-center gap-4 border-2 p-10 mt-20 mb-28 bg-[#0066CC] text-white w-full">
                <p className='text-center text-4xl font-bold'>
                    Aulas particulares sob medida,
                    <br />
                    quando e onde você precisar.
                </p>
            </div>
            <div id='artigo' className="flex flex-col justify-center items-center mb-24">
                <h2 className="text-3xl font-bold mb-8">Artigos</h2>

                <div className="relative max-w-sm">
                    <div className="overflow-hidden rounded-lg">
                        <div
                            className="flex justify-center items-center gap-5 transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * 20}%)`,
                                width: `${articles.length * 100}%`
                            }}
                        >
                            <img src={portugues} alt="" />
                            <img src={matematica} alt="" />
                            <img src={fisica} alt="" />
                            <img src={quimica} alt="" />
                            <img src={historia} alt="" />
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30"
                    >
                        <i className="pi pi-angle-left text-black text-4xl" style={{ transform: 'translateX(-4rem)' }}></i>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30"
                    >
                        <i className="pi pi-angle-right text-black text-4xl translate-x-10"></i>
                    </button>

                    <div className="flex justify-center mt-4">
                        {articles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 w-2 rounded-full mx-1 ${currentSlide === index
                                    ? 'bg-black'
                                    : 'bg-black/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}