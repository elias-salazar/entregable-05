import React from "react";

const useSelectColor = (type, type2) => {
  let color =
    type === "ice" || type === "electric"
      ? "primary"
      : type === "steel" ||
        type === "rock" ||
        type === "normal" ||
        type === "psychic" ||
        type === "ghost"
      ? "secundary"
      : type === "grass" || type === "bug"
      ? "success"
      : type === "fighting" || type === "poison" || type === "dragon"
      ? "danger"
      : type === "fire" || type === "ground"
      ? "warning"
      : type === "water" || type === "flying" || type === "fairy"
      ? "info"
      : "dark";

  let backgroundG =
    type === "ice" || type === "electric"
      ? "linear-gradient(to bottom, #6FBEDF,#BDEBFE)"
      : type === "steel" ||
        type === "rock" ||
        type === "normal" ||
        type === "psychic" ||
        type === "ghost"
      ? "linear-gradient(to bottom,#735259,#7C3F4C)"
      : type === "grass" || type === "bug"
      ? "linear-gradient(to bottom, #7EC6C5,#CAE099)"
      : type === "fighting" || type === "poison" || type === "dragon"
      ? "linear-gradient(to bottom, #96402A,#CB735D)"
      : type === "fire" || type === "ground"
      ? "linear-gradient(to bottom,#F96D6F,#E8AE1B)"
      : type === "water" || type === "flying" || type === "fairy"
      ? "linear-gradient(to bottom, #133258,#82B2F1)"
      : "dark";

  let backgroundG2 =
    type2 === "ice" || type2 === "electric"
      ? "linear-gradient(to bottom, #6FBEDF,#BDEBFE)"
      : type2 === "steel" ||
        type2 === "rock" ||
        type2 === "normal" ||
        type2 === "psychic" ||
        type2 === "ghost"
      ? "linear-gradient(to bottom,#735259,#7C3F4C)"
      : type2 === "grass" || type2 === "bug"
      ? "linear-gradient(to bottom, #7EC6C5,#CAE099)"
      : type2 === "fighting" || type2 === "poison" || type2 === "dragon"
      ? "linear-gradient(to bottom, #96402A,#CB735D)"
      : type2 === "fire" || type2 === "ground"
      ? "linear-gradient(to bottom,#F96D6F,#E8AE1B)"
      : type2 === "water" || type2 === "flying" || type2 === "fairy"
      ? "linear-gradient(to bottom, #133258,#82B2F1)"
      : "dark";

  return { color, backgroundG, backgroundG2 };
};

export default useSelectColor;
