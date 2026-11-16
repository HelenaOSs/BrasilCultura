import "./Foto.css";
import { imagem } from "../../imagens";
import ilustracao from "../Ilustracao/Ilustracao";

// Mostra a foto de src/assets/imagens/<pasta>/<nome>.jpg.
// Se a foto ainda não existe, mostra um espaço colorido com um emoji.
export default function Foto({ pasta, nome, alt, className = "", emoji = "🍽️" }) {
    const url = imagem(pasta, nome);

    if (url) {
        return <img src={url} alt={alt} className={`foto ${className}`} />;
    }

    const desenho = ilustracao(pasta, nome);
    if (desenho) {
        return (
            <div className={`foto foto-ilustracao ${className}`} role="img" aria-label={alt}>
                {desenho}
            </div>
        );
    }

    return (
        <div
            className={`foto foto-vazia ${className}`}
            role="img"
            aria-label={alt}
        >
            <span>{emoji}</span>
        </div>
    );
}
