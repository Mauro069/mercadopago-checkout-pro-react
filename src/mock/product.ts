export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string[];
}

export const Product: IProduct = {
  id: 1,
  title: "Iphone 13 256gb",
  price: 4813,
  description: [
    "Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos.",
    "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    "Cámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision.",
    "Pantalla Super Retina XDR de 6.1 pulgadas.",
  ],
  img: "https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
};
