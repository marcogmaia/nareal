import { coisa } from "./chapters/coisa";
import { harry } from "./chapters/harry";
import { garotos } from "./chapters/garotos";

export const books = [
  {
    id: 0,
    img: "/images/it.jpg",
    title: "A coisa ",
    author: "Stephen King",
    description: "teste, isso é um teste, obrigado por testar o teste",
    text: coisa
  },
  {
    id: 1,
    img: "/images/harryPotter.jpg",
    title: "Harry Potter - A ordem da fênix",
    author: "J. K. Rowling",
    description: "teste 2",
    text: harry
  },
  {
    id: 2,
    img: "/images/paraTodos.jpg",
    title: "Para todos os garotos que já amei",
    author: "Jenny Han",
    description: "teste 3",
    text: garotos
  }
];
