import React from "react";
import Cards from "../components/Cards";

const cities = [
  {
    name: "Glasgow",
    image:
      "https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg",
    content:
      "It is a city and council of Scotland, in the United Kingdom. It is the largest city in Scotland and the third in the United Kingdom after London and Birmingham, and is the most populous council and the 10th most populous metropolitan area in the United Kingdom in its Greater Glasgow conurbation, after Greater London.",
    url: "http://www.peoplemakeglasgow.com"
  },
  {
    name: "Glasgow",
    image:
      "https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg",
    content:
      "It is a city and council of Scotland, in the United Kingdom. It is the largest city in Scotland and the third in the United Kingdom after London and Birmingham, and is the most populous council and the 10th most populous metropolitan area in the United Kingdom in its Greater Glasgow conurbation, after Greater London.",
    url: "http://www.peoplemakeglasgow.com"
  },
  {
    name: "Glasgow",
    image:
      "https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg",
    content:
      "It is a city and council of Scotland, in the United Kingdom. It is the largest city in Scotland and the third in the United Kingdom after London and Birmingham, and is the most populous council and the 10th most populous metropolitan area in the United Kingdom in its Greater Glasgow conurbation, after Greater London.",
    url: "http://www.peoplemakeglasgow.com"
  }
];

const TouristInfoCards = () => {
  return cities.map(city => {
    return (
      <Cards
        name={city.name}
        image={city.image}
        content={city.content}
        url={city.url}
      />
    );
  });
};

export default TouristInfoCards;
