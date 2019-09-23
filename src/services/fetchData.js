//const URL = "https://rickandmortyapi.com/api/character/";
const URL =
  "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const fetchData = () => {
  return fetch(URL).then(response => response.json());
};

export { fetchData };
