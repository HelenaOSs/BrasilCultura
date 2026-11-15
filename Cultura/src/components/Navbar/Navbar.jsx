import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <a href="#/" className="logo">
                <span className="logo-icon">🌿</span>
                <h1>CulturaBrasil</h1>
            </a>

            <nav>
                <ul>
                    <li><a href="#/">Início</a></li>
                    <li><a href="#/mapa">Mapa</a></li>
                    <li><a href="#/historia">História</a></li>
                </ul>
            </nav>

            <div className="search">
                🔍
            </div>
        </header>
    );
}
