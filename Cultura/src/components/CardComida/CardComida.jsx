import "./CardComida.css";
import Foto from "../Foto/Foto";

// Cartão de um prato típico. A foto vem de src/assets/imagens/comidas/<slug>.jpg
export default function CardComida({ comida }) {
    return (
        <article className="card-comida">
            <div className="card-comida-foto">
                <Foto pasta="comidas" nome={comida.slug} alt={comida.nome} />
            </div>

            <div className="card-comida-texto">
                <span className="card-comida-origem">{comida.origem}</span>
                <h3>{comida.nome}</h3>
                <p>{comida.descricao}</p>
            </div>
        </article>
    );
}
