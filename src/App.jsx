import { useState } from 'react';
import Header from './components/Header';
import Producto from './components/Producto';

function App() {

  return (
    <>
      <Header></Header>

      <main>
        <section id="promociones" class="section__promociones">
          <div class="contenedor">
            <article class="promocion">
              <div class="promocion__contenido">
                <p class="promocion__nombre">Oferta de Black Friday</p>
                <h2 class="promocion__titulo">LAS MEJORES REMERAS</h2>
                <p class="promocion__descripcion">Nuevo precio: <b>$20000</b></p>
                <div class="promocion__botones">
                  <a href="#" class="btn btn__outline-white">Buscar</a>
                  <a href="#" class="btn btn__outline-white">Comprar</a>
                </div>
              </div>
            </article>
            <article class="promocion">
              <div class="promocion__contenido">
                <h2 class="promocion__titulo">Buzos de programador</h2>
                <p class="promocion__descripcion">
                  Los mejores buzos con logos de programación
                </p>
                <div class="promocion__botones">
                  <a href="#" class="btn btn__outline-white">Ver</a>
                </div>
              </div>
            </article>
            <article class="promocion">
              <div class="promocion__contenido">
                <h2 class="promocion__titulo">LLegó Angular</h2>
                <p class="promocion__descripcion">Ya disponible la nueva taza!</p>
                <div class="promocion__botones">
                  <a href="#" class="btn btn__outline-white">Comprar</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="productos" class="section__productos">
          <div class="contenedor">
            <h2>#TDevShop</h2>
          </div>

          <div class="contenedor productos__grid">
            <Producto></Producto>
            <Producto></Producto>
            <Producto></Producto>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="contenedor">
          <div class="footer__grid">
            <div class="footer__empresa">
              <a href="index.html" class="footer__logo">LOGO</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, iure harum ullam nobis optio expedita. Commodi
                doloremque quod dolores nesciunt!
              </p>
              <div class="footer__redes">
                <a href="" target="_blank">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                      />
                    </svg>
                  </i>
                </a>
                <a href="" target="_blank">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </i>
                </a>
                <a href="" target="_blank">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                      />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M16.5 7.5l0 .01" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
            <div class="footer__info">
              <h3>Legales</h3>
              <a href="">Términos de uso</a>
              <a href="">Política de privacidad</a>
              <a href="">Contacto</a>
              <a href="">Newsletter</a>
            </div>
            <div class="footer__info">
              <h3>Información</h3>
              <a href="">FAQs</a>
              <a href="">Nosotros</a>
              <a href="">Medios de pago</a>
              <a href="">Envíos</a>
            </div>
            <div class="footer__newsletter">
              <h3>Nuestro newsletter</h3>
              <p>
                Suscríbete a nuestro newsletter para enterarte las últimas
                novedades
              </p>
              <form action="#" method="post">
                <input type="email" placeholder="Escribe tu correo" />
                <input type="submit" class="btn btn-footer" value="Suscribirse" />
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
