import "./Regiao.css";
import regioes from "../../Data/regioes";
import Foto from "../Foto/Foto";
import CardComida from "../CardComida/CardComida";

// Página de uma região: banner, história, povos, pratos típicos e receitas.
export default function Regiao({ id }) {
    const regiao = regioes.find((r) => r.id === id);

    if (!regiao) {
        return (
            <main className="pagina regiao-vazia">
                <h2>Região não encontrada</h2>
                <a href="#/mapa" className="botao-amarelo">Voltar ao mapa</a>
            </main>
        );
    }

    const rolarPara = (secao) => {
        document.getElementById(secao)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="pagina regiao" style={{ "--cor": regiao.cor }}>

            <a href="#/mapa" className="link-voltar">← Voltar ao mapa</a>

            <section className="regiao-banner">

                <Foto
                    pasta="regioes"
                    nome={regiao.id}
                    alt={regiao.titulo}
                    className="regiao-banner-foto"
                    emoji="🌎"
                />

                <div className="regiao-banner-sombra"></div>

                <div className="regiao-banner-texto">
                    <h2>{regiao.titulo}</h2>
                    <h3>{regiao.lema}</h3>
                    <p>{regiao.resumo}</p>

                    <div className="regiao-atalhos">
                        <button onClick={() => rolarPara("secao-historia")}>História</button>
                        <button onClick={() => rolarPara("secao-pratos")}>Pratos típicos</button>
                        <button onClick={() => rolarPara("secao-receitas")}>Receitas</button>
                    </div>
                </div>

            </section>

            <section className="regiao-secao" id="secao-historia">
                <h2>História</h2>

                {regiao.historia.map((paragrafo, i) => (
                    <p key={i} className="regiao-paragrafo">{paragrafo}</p>
                ))}

                <p className="regiao-estados">
                    <strong>Estados:</strong> {regiao.estados.join(", ")}
                </p>

                <h3 className="regiao-subtitulo">Quem formou essa cultura</h3>

                <div className="regiao-povos">
                    {regiao.povos.map((povo) => (
                        <article key={povo.nome} className="regiao-povo">
                            <h4>{povo.nome}</h4>
                            <p>{povo.descricao}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="regiao-secao" id="secao-pratos">
                <h2>Pratos típicos</h2>

                <div className="regiao-grade">
                    {regiao.comidas.map((comida) => (
                        <CardComida key={comida.slug} comida={comida} />
                    ))}
                </div>
            </section>

            <section className="regiao-secao" id="secao-receitas">
                <h2>Receitas</h2>

                <div className="regiao-grade regiao-grade-receitas">
                    {regiao.receitas.map((receita) => (
                        <a
                            key={receita.slug}
                            className="receita-card"
                            href={`#/regiao/${regiao.id}/receita/${receita.slug}`}
                        >
                            <div className="receita-card-foto">
                                <Foto pasta="comidas" nome={receita.slug} alt={receita.nome} />
                            </div>

                            <div className="receita-card-texto">
                                <h3>{receita.nome}</h3>
                                <p>{receita.subtitulo}</p>
                                <span>
                                    ⏱ {receita.tempo} · {receita.dificuldade}
                                </span>
                                <strong>Ver receita →</strong>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

        </main>
    );
}
