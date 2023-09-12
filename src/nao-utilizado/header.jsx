import hero from '../assets/bgbanner2.png'

import matricule from '../assets/matricule-se.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card22.png'

import './header.css'

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="flex">
          <a href="#">
            <img className="logo" src={logo} alt="Logo Select" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Sobre a Escola</a>
              </li>
              <li>
                <a href="#">Para todas as idades</a>
              </li>
              <li>
                <a href="#">Planos de Carreira</a>
              </li>
              <li>
                <a href="#">EJA</a>
              </li>
              <li>
                <a href="#">
                  <img src={matricule} alt="Elemento matricule-se"></img>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div>
        <img className="header-bg" src={hero} alt="Bg do hero" />
        <h1>
          CONSTRUA <br /> SUA HISTÓRIA
        </h1>
        <h2>FAÇA SELECT</h2>
        <h3>
          As pessoas de sucesso passam por aqui! <br /> 28 anos transformando
          vidas.
        </h3>
      </div>

      <main class="cards">
        <section class="card contact">
          <div class="icon">
            <img src={card1} alt="Prêmios" />
            <h4>PREMIAÇÃO</h4>
            <span>
              Premiada a Nível <br /> Nacional
            </span>
          </div>
        </section>
        <section class="card contact">
          <div class="icon">
            <img src={card2} alt="Prêmios" />
            <h4>PROFISSIONAIS</h4>
            <span>
              Profissionais <br /> Qualificados
            </span>
          </div>
        </section>
        <section class="card contact">
          <div class="icon">
            <img src={card1} alt="Prêmios" />
            <h4>CERTIFICAÇÃO</h4>
            <span>
              Certificado reconhecido
              <br /> em todo Brasil
            </span>
          </div>
        </section>
        <section class="card contact">
          <div class="icon">
            <img src={card1} alt="Prêmios" />
            <h4>28 ANOS</h4>
            <span>
              Desde 1994 fazendo <br /> história, formando <br /> profissionais
              qualificados
            </span>
          </div>
        </section>
      </main>
    </>
  )
}

export default Header
