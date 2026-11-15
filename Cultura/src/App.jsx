import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Povos from "./components/Povos/Povos";
import MapaBrasil from "./components/MapaBrasil/MapaBrasil";
import Regiao from "./components/Regiao/Regiao";
import Receita from "./components/Receita/Receita";
import Footer from "./components/Footer/Footer";
import { useRota } from "./router";

// Página inicial: banner com o botão "Ver mapa" + seção dos povos.
function Inicio({ rolarPara }) {
    useEffect(() => {
        if (rolarPara) {
            document.getElementById(rolarPara)?.scrollIntoView({ behavior: "smooth" });
        }
    }, [rolarPara]);

    return (
        <>
            <Hero />
            <Povos />
        </>
    );
}

function App() {
    const [pagina, regiaoId, secao, receitaSlug] = useRota();

    let conteudo;

    if (pagina === "mapa") {
        conteudo = <MapaBrasil />;
    } else if (pagina === "regiao" && regiaoId && secao === "receita" && receitaSlug) {
        conteudo = <Receita regiaoId={regiaoId} slug={receitaSlug} />;
    } else if (pagina === "regiao" && regiaoId) {
        conteudo = <Regiao id={regiaoId} />;
    } else {
        conteudo = <Inicio rolarPara={pagina === "historia" ? "historia" : null} />;
    }

    return (
        <>
            <Navbar />
            {conteudo}
            <Footer />
        </>
    );
}

export default App;
