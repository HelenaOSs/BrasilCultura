import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <span className="logo-icon">🌿</span>
                <h1>CulturaBrasil</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#mapa">Mapa</a></li>
                    <li><a href="#regioes">Regiões</a></li>
                    <li><a href="#historia">História</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
            </nav>

            <div className="search">
                🔍
            </div>
        </header>
    );
}