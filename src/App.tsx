import { Link, Route, Routes, useLocation } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Article from './pages/Article'
import Profile from './pages/Profile'
import Teachers from './pages/Teachers'
import { useEffect, useState } from 'react'

export default function App() {

  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolling = scrollTop > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hideHeaderRoutes = ['/login'];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && (
        <header className={`flex justify-between items-center w-full fixed z-50 text-white p-10 px-20 ${scrolling ? 'scrolled' : ''}`}>
          <div>
            <Link to="/">
              <h1 className="text-3xl font-bold">Reforço Digital</h1>
            </Link>
          </div>
          <nav className="flex justify-center items-center gap-5 ">
            <Link to="/" className="text-white hover:underline">Página Inicial</Link>
            <Link to="/artigos" className="text-white hover:underline">Artigos</Link>
            <Link to="/" className="text-white hover:underline">Disciplinas</Link>
            <Link to="/professores" className="text-white hover:underline">Professores</Link>
          </nav>
          <div className="flex justify-center items-center gap-6">
            <Link to="/login">
              <i className="pi pi-user text-2xl rounded-full border-2 p-1 pr-2 pl-2 text-center"></i>
            </Link>
            <Link to="/login" className="flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 p-1 rounded w-28 pb-2 pt-2">Entrar</Link>
          </div>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artigos" element={<Article />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/professores" element={<Teachers />} />
      </Routes>

      {!hideHeaderRoutes.includes(location.pathname) && (
        <footer className='flex justify-between items-center w-full text-white p-10 bg-gradient-to-r from-blue-900 to-blue-700 px-20'>
          <div>
            <Link to="/">
              <h1 className="text-3xl font-bold">Reforço Digital</h1>
            </Link>
            <p className="text-center p-2">© 2024 Reforço Digital. Todos os direitos reservados.</p>
          </div>
          <div className="flex justify-center items-start gap-12">
            <div className="flex flex-col justify-center gap-1">
              <span className='text-xl font-bold'>Links Úteis</span>
              <Link to="/" className="text-white hover:underline">Página Inicial</Link>
              <Link to="/artigos" className="text-white hover:underline">Artigos</Link>
              <Link to="/" className="text-white hover:underline">Disciplinas</Link>
              <Link to="/professores" className="text-white hover:underline">Professores</Link>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className='text-xl font-bold'>Social</span>
              <div className="flex justify-center items-center gap-4">
                <Link to="/" className="text-white hover:underline">
                  <i><i className="pi pi-facebook text-4xl"></i></i>
                </Link>
                <Link to="/" className="text-white hover:underline">
                  <i><i className="pi pi-instagram text-4xl"></i></i>
                </Link>
                <Link to="/" className="text-white hover:underline">
                  <i><i className="pi pi-linkedin text-4xl"></i></i>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className='text-xl font-bold'>Contato</span>
              <div className="flex justify-center items-center gap-4">
                <Link to="/" className="text-white hover:underline">
                  <i><i className="pi pi-whatsapp text-4xl"></i></i>
                </Link>
                <Link to="/" className="text-white hover:underline">
                  <i><i className="pi pi-envelope text-4xl"></i></i>
                </Link>
                <Link to="/" className="text-white hover:underline">
                  <i><i className="pi pi-phone text-4xl"></i></i>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}