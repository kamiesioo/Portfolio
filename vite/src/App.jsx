import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiSupabase, SiClerk } from "react-icons/si";
import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">Portfolio</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#sobre-mi" className="nav-link">
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="nav-link">
                Sobre Mi
              </a>
            </li>
            <li>
              <a href="#servicios" className="nav-link">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre-mi">
          <h2>Sobre Mi</h2>
          <p>
            Me llamo Ulises Cena, futuro Analista de Sistemas y Desarrollador
            Full Stack
          </p>
          <p>Me especializo en HTML, CSS, JavaScript, NodeJS y MySQL</p>
          <img src="/mifoto.png" alt="Foto Personal de Ulises Cena" />
          <p>TIME ZONE: UTC-3</p>
        </section>

        <section id="servicios">
          <h2>Mis Servicios</h2>
          <div className="contenedor-servicios">
            <div className="servicio-item">
              <img src="/icono-diseno.png" alt="Icono Desarrollo Web" />
              <h3>Desarrollo Web</h3>
              <p>Creo sitios web modernos y funcionales.</p>
            </div>
            <div className="servicio-item">
              <img src="/icono-seo.png" alt="Icono Asesoramiento" />
              <h3>Asesoramiento Personalizado</h3>
              <p>Mejoro tu perspectiva respecto a tu negocio y necesidades.</p>
            </div>
          </div>
        </section>

        <section id="habilidades">
          <h2>Habilidades</h2>
          <div className="contenedor-habilidades">
            <h3>Habilidades desarrolladas.</h3>
            <p>
              Manejo de lenguajes basados en Front-End y Back-End (HTML 5 | CSS
              3 | JavaScript | NodeJS | MySQL | React | Python).
            </p>
            <p>
              Mantengo un pensamiento crítico y lógico en todo momento, tengo
              como objetivo en mis proyectos/trabajos permanecer dentro de las
              expectativas y exigencias que pido o pide el cliente.
            </p>
          </div>
        </section>

        <section id="proyectos">
          <h2>Proyectos</h2>
          <div className="contenedor-proyectos">
            {/* Proyecto 1: Bot de Discord */}
            <div className="proyecto-item">
              <div className="proyecto-media">
                {/* REEMPLAZA el src con el nombre de tu GIF o captura, ej: "/demo-bot.gif" */}
                <img
                  src="https://via.placeholder.com/600x340/111111/cccccc?text=Demo+Bot+Discord"
                  alt="Demo del Bot de Discord"
                />
              </div>
              <div className="proyecto-info">
                <div className="proyecto-header">
                  <FaDiscord className="proyecto-icon" />
                  <div className="proyecto-links">
                    <a
                      href="https://github.com/tu-usuario/tu-repo-bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver en GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <h3>Geopolitics RP Engine</h3>
                <p>
                  Motor intermediario para roleplay de geopolítica en Discord.
                  Gestiona la ocupación territorial, registra recursos reales
                  por país y simula procesos de industrialización mediante
                  lógica de validación de estado.
                </p>
                <div className="proyecto-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Discord API</span>
                  <span className="tag">Oracle Cloud</span>
                </div>
              </div>
            </div>

            {/* Proyecto 2: Home Banking */}
            <div className="proyecto-item">
              <div className="proyecto-media">
                <video
                  src="/ObsidianBank.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt="Demo de Home Banking Obsidian Bank"
                />
              </div>
              <div className="proyecto-info">
                <div className="proyecto-header">
                  <FaExternalLinkAlt className="proyecto-icon" />
                  <div className="proyecto-links">
                    <a
                      href="https://github.com/tu-usuario/tu-repo-banking"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver en GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <h3>Home Banking</h3>
                <p>
                  Plataforma de simulación bancaria. Integra APIs externas para
                  cotizaciones en tiempo real, gestión de transacciones y
                  autenticación segura de usuarios con validación de endpoints
                  en el backend.
                </p>
                <div className="proyecto-tags">
                  <span className="tag">React</span>
                  <span className="tag">Supabase</span>
                  <span className="tag">Clerk</span>
                  <span className="tag">API REST</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto">
          <h2 className="texto-contacto">Contactame.</h2>
          <div className="contacto-lista">
            <div className="contacto-item">
              <FaLinkedin className="fa-brands" />
              <h4>LinkedIn</h4>
            </div>
            <div className="contacto-item">
              <FaGithub className="fa-brands" />
              <h4>GitHub</h4>
            </div>
            <div className="contacto-item">
              <FaDiscord className="fa-brands" />
              <h4>Discord</h4>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <p>Web designed by kamiesio | All Rights Reserved 2026 ©.</p>
      </footer>
    </>
  );
}

export default App;
