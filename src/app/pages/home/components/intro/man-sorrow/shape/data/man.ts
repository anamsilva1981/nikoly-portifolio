import { ShapeData } from "../shape.interface";

export const man: Array<ShapeData> = [
  {
    // Substituindo o SVG complexo por uma imagem simples
    // Usando um path retangular que servirá como container para a imagem
    d: "M500,200 L700,200 L700,500 L500,500 Z", // Retângulo onde a imagem será colocada
    color: "fill-transparent", // Transparente pois a imagem terá seu próprio conteúdo
    // Adicionando propriedades para a imagem (se sua interface permitir)
    image: "/src/assets/image/imagem-sem-fundo-menor.jpg",
    // image: "./assets/image/imagem-sem-fundo-menor.jpg",
    // image: "assets/image/imagem-sem-fundo-menor.jpg",
    // image: "/assets/image/imagem-sem-fundo-menor.jpg",
    // image: "./../" ,
    imageWidth: 200,
    imageHeight: 300,
    imageX: 500,
    imageY: 200
  }
];