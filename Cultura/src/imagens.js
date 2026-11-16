
 // Procura as imagens dentro de src/assets/imagens.
// Se a foto ainda não existir, o site mostra um espaço colorido
// no lugar (veja o componente Foto), então nada quebra enquanto você não tem as fotos.
//
// Como usar:
// home/hero.jpg
// regioes/norte.jpg, nordeste.jpg, centro-oeste.jpg, sudeste.jpg, sul.jpg
// comidas/tacaca.jpg, feijoada.jpg etc.
// povos/indigenas.jpg, portugueses.jpg, africanos.jpg etc.
//
// Formatos aceitos: jpg, jpeg, png, webp e avif.

const arquivos = import.meta.glob(
    "./assets/imagens/**/*.{jpg,jpeg,png,webp,avif}",
    {
        eager: true,
        import: "default"
    }
);

const EXTENSOES = ["jpg", "jpeg", "png", "webp", "avif"];

export function imagem(pasta, nome) {
    for (const ext of EXTENSOES) {
        const caminho = `./assets/imagens/${pasta}/${nome}.${ext}`;
        const url = arquivos[caminho];

        if (url) {
            return url;
        }
    }

    return null;
}
