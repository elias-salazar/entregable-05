import axios from "axios";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useSelectColor from "../hooks/useSelectColor";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);
  const { color, backgroundG } = useSelectColor(pokemon.types?.[0].type.name);
  /* colores*/
  console.log(pokemon.types);
  return (
    <div className="content-margin-card">
      <Card
        className="card box-shadow"
        border={color}
        style={{ width: "10rem", border: "solid .1rem" }}
        onClick={() => navigate(`/pokedex/${pokemon.id}`)}
      >
        <div className="content-img-card">
          <div
            className="color-background-card"
            style={{ background: backgroundG }}
          ></div>
          <div className="img-card">
            <Card.Img
              style={{ height: "9rem", width: "8rem" }}
              variant="top"
              src={pokemon.sprites?.front_default}
            />
          </div>
        </div>
        <div className="card-body" style={{ height: "5rem" }}>
          <Card.Title>{pokemon?.name}</Card.Title>
          <Card.Text>
            {pokemon.types?.[0].type.name}{" "}
            {pokemon.types?.[1]?.type.name
              ? `/ ${pokemon.types?.[1]?.type.name}`
              : ""}
          </Card.Text>
        </div>
        <ListGroup className="list-group-flush">
          <div className="stats-card">
            <div>
              <b>hp:</b> {pokemon.stats?.[0].base_stat}
            </div>
            <div>
              <b>defense:</b> {pokemon.stats?.[2].base_stat}
            </div>
          </div>
          <div className="stats-card">
            <div>
              <b>attack:</b> {pokemon.stats?.[1].base_stat}
            </div>
            <div>
              <b>speed:</b> {pokemon.stats?.[5].base_stat}
            </div>
          </div>
        </ListGroup>
      </Card>
    </div>
  );
};

export default PokemonCard;
