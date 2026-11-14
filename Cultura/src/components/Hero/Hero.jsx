import "./Hero.css";
import hero from "../../assets/imagens/home/hero.jpg";

export default function Hero() {

    const irParaMapa = () => {
        document.getElementById("mapa")?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${hero})` }}
        >

            <div className="overlay"></div>

            <div className="hero-container">

                <div className="hero-texto">

                    <h1>
                        Cultura<span>Brasil</span>
                    </h1>

                    <h2>
                        Sabores que contam
                        <br />
                        nossa história.
                    </h2>

                    <p>
                        Uma viagem pela ancestralidade e pelo território
                        brasileiro através da nossa culinária.
                    </p>

                    <div className="hero-botoes">

                        <button
                            className="btn-amarelo"
                            onClick={irParaMapa}
                        >
                            Explorar o mapa →
                        </button>

                        <button className="btn-transparente">
                            Conheça nossa história
                        </button>

                    </div>

                </div>

            </div>

            <div className="ondas">

                <div className="onda verde"></div>

                <div className="onda amarela"></div>

                <div className="onda azul"></div>

            </div>

        </section>
    );
}