
function Header() {

    return (
        <header className="header">
            <div className="contenedor">
                <div className="flex-logo">
                    <a href="index.html" className="header__logo">Logo</a>
                </div>
                <nav className="navegacion">
                    <a className="navegacion__enlace navegacion__enlace--activo" href="#"
                    >Inicio</a
                    >
                    <a className="navegacion__enlace" href="nosotros.html">Nosotros</a>
                </nav>
                <div className="flex-busqueda">
                    <a href="" className="header__btn">
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
                                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                        </i>
                    </a>
                    <a href="" className="header__btn">
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
                                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </i>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;