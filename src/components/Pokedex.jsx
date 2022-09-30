import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PokemonCard from "./PokemonCard";
const Pokedex = () => {
  const name = useSelector((state) => state.userName);
  const [pokemones, setPokemones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [pokemoneType, setPokemonType] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155`)
      .then((res) => setPokemones(res.data.results))
      .finally(setIsLoading(false));
    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setPokemonType(res.data.results))
      .finally(setIsLoading(false));
  }, []);
  /*https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155*/

  /*---------------------- */
  const [page, setPage] = useState(1);
  const pokemonesPerPage = 20;
  const lastPokemonesIndex = page * pokemonesPerPage;
  const firstPokemonesIndex = lastPokemonesIndex - pokemonesPerPage;
  const pokemonesPaginated = pokemones.slice(
    firstPokemonesIndex,
    lastPokemonesIndex
  );
  const totalPages = Math.ceil(pokemones.length / pokemonesPerPage);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }
  /*---------------------- */

  const navigate = useNavigate();
  const searchName = () => {
    navigate(`/pokedex/${nameInput}`);
  };
  const searchType = (type) => {
    if (type === "all") {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((res) => setPokemones(res.data.results));
    } else {
      axios.get(type).then((res) => setPokemones(res.data.pokemon));
    }
  };

  return (
    <div>
      <div className="header">
        <div className="red-line"></div>
        <div className="black-line"></div>
        <div className="white-circle">
          <div className="black-circle"></div>
        </div>
        <div
          className="content-header-img"
          onClick={() => navigate("/pokedex")}
        >
          <img src="src/assets/images/Pokedex.png" alt="pokedex" />
        </div>
      </div>

      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="content-hi-search-buttons">
            <div className="hi">
              <p>
                <b>bienvenido {name}</b>, aquí podras encontrar tu pokemón
                favorito
              </p>
            </div>
            <div className="content-search-pokedex-filter-pokedex">
              <div className="search-pokedex">
                <FormControl
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <Button variant="danger" size="sm" onClick={searchName}>
                  <p>buscar</p>
                </Button>{" "}
              </div>
              <div className="filter-pokedex">
                <Form.Select
                  size="sm"
                  aria-label="Default select example"
                  onChange={(e) => searchType(e.target.value)}
                >
                  <option value="all">Show all</option>
                  {pokemoneType.map((type) => (
                    <option key={type.name} value={type.url}>
                      {type.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>
            <div className="buttons-pokedex">
              <Button
                size="sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                variant="outline-primary"
              >
                prev page
              </Button>
              <Button
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                variant="outline-primary"
              >
                next page
              </Button>
            </div>
          </div>
          <section className="content-card-pokemon">
            {pokemonesPaginated.map((pokemon) => (
              <PokemonCard
                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              />
            ))}
          </section>
          <div className="content-hi-search-buttons">
            <div className="buttons-pokedex">
              <Button
                size="sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                variant="outline-primary"
              >
                prev page
              </Button>
              <Button
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                variant="outline-primary"
              >
                next page
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokedex;
