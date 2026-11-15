import { useState } from "react";
import "./MapaBrasil.css";
import regioes from "../../Data/regioes";
import { VIEWBOX, caminhos, rotulos } from "./regioesSvg";

// Página do mapa: ao clicar em uma região, abre a página dela (#/regiao/<id>).
export default function MapaBrasil() {
    const [ativa, setAtiva] = useState(null);

    const regiaoAtiva = regioes.find((r) => r.id === ativa);

    return (
        <main className="pagina pagina-mapa">

            <div className="mapa-texto">
                <h2>
                    Explore o
                    <br />
                    nosso Brasil
                </h2>

                <p>
                    Clique em uma região do mapa para descobrir suas
                    histórias, sabores e tradições.
                </p>

                <ul className="mapa-legenda">
                    {regioes.map((regiao) => (
                        <li key={regiao.id}>
                            <a
                                href={`#/regiao/${regiao.id}`}
                                onMouseEnter={() => setAtiva(regiao.id)}
                                onMouseLeave={() => setAtiva(null)}
                                onFocus={() => setAtiva(regiao.id)}
                                onBlur={() => setAtiva(null)}
                            >
                                <span
                                    className="legenda-cor"
                                    style={{ background: regiao.cor }}
                                ></span>
                                {regiao.nome}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mapa-info" aria-live="polite">
                    {regiaoAtiva ? (
                        <>
                            <strong>{regiaoAtiva.titulo}</strong>
                            <span>{regiaoAtiva.lema}</span>
                        </>
                    ) : (
                        <span>Passe o mouse sobre uma região.</span>
                    )}
                </div>
            </div>

            <div className="mapa-desenho">
                <svg
                    viewBox={VIEWBOX}
                    role="img"
                    aria-label="Mapa do Brasil dividido em cinco regiões"
                >
                    {regioes.map((regiao) => (
                        <a
                            key={regiao.id}
                            href={`#/regiao/${regiao.id}`}
                            aria-label={regiao.titulo}
                            className={`mapa-regiao ${ativa === regiao.id ? "ativa" : ""}`}
                            onMouseEnter={() => setAtiva(regiao.id)}
                            onMouseLeave={() => setAtiva(null)}
                            onFocus={() => setAtiva(regiao.id)}
                            onBlur={() => setAtiva(null)}
                        >
                            <path d={caminhos[regiao.id]} fill={regiao.cor} />
                        </a>
                    ))}

                    {regioes.map((regiao) => (
                        <text
                            key={regiao.id}
                            x={rotulos[regiao.id].x}
                            y={rotulos[regiao.id].y}
                            className="mapa-rotulo"
                        >
                            {regiao.nome}
                        </text>
                    ))}
                </svg>
            </div>

        </main>
    );
}
