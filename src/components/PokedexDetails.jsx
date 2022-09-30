import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useSelectColor from "../hooks/useSelectColor";
const PokedexDetails = () => {
  const { id } = useParams();
  const [pokemonSelected, setPokemonSelected] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemonSelected(res.data));
  }, [id]);
  const { color, backgroundG, backgroundG2 } = useSelectColor(
    pokemonSelected.types?.[0].type.name,
    pokemonSelected.types?.[1]?.type.name
  );
  const navigate = useNavigate();
  return (
    <div className="Container-pokedex-details">
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
          <img src="https://imgur.com/tKHhU6f" alt="pokedex" />
        </div>
      </div>
      <Button
        variant={color}
        className="button-back"
        size="sm"
        onClick={() => navigate(-1)}
      >
        volver
      </Button>
      <div className="content-card-details">
        <Card
          className="box-shadow"
          border={color}
          style={{ border: "solid .1rem" }}
        >
          <div className="content-img-card">
            <div
              className="color-background-card-details"
              style={{ background: backgroundG }}
            ></div>
            <div className="img-card-details">
              <Card.Img
                style={{ height: "15rem", width: "15rem" }}
                variant="top"
                src={pokemonSelected.sprites?.front_default}
              />
            </div>
          </div>
          <div className="card-body" style={{ padding: "0" }}>
            <Card.Body>
              <div className="card-details-id">
                <Card.Text>#{pokemonSelected.id}</Card.Text>
              </div>
              <div className="content-title-card-details">
                <Card.Title style={{ fontSize: "1.5rem" }}>
                  {pokemonSelected.name}
                </Card.Title>
              </div>

              <div className="content-data-details">
                <div className="content-h-w">
                  <div className="h-w">
                    <div>peso</div>
                    <div> altura</div>
                  </div>
                  <div className="h-w">
                    <div>{pokemonSelected.height / 10}mts</div>
                    <div>{pokemonSelected.weight / 10}kg</div>
                  </div>
                </div>
                <div className="type-habilities">
                  <div className="content-type">
                    <div className="title-t-h">Tipo</div>
                    <div className="types">
                      <div className="type" style={{ background: backgroundG }}>
                        {pokemonSelected.types?.[0].type.name}
                      </div>
                      <div
                        className="type"
                        style={{ background: backgroundG2 }}
                      >
                        {pokemonSelected.types?.[1]?.type.name &&
                          ` ${pokemonSelected.types?.[1]?.type.name}`}
                      </div>
                    </div>
                  </div>
                  <div className="content-habilities">
                    <div className="title-t-h"> Habilidades</div>
                    <div className="habilities">
                      {pokemonSelected.abilities?.map((ability) => (
                        <div className="hability">{ability.ability?.name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
          <div className="content-progressBar">
            <Card.Header>stats</Card.Header>
            <div className="progressBars">
              <div className="stat-data">
                <div> hp</div>
                <div> {pokemonSelected.stats?.[0].base_stat} /150</div>
              </div>
              <ProgressBar
                variant={color}
                style={{ background: backgroundG }}
                now={pokemonSelected.stats?.[0].base_stat}
                max="150"
              />
              <div className="stat-data">
                <div> defense</div>
                <div> {pokemonSelected.stats?.[2].base_stat} /150</div>
              </div>
              <ProgressBar
                variant={color}
                style={{ background: backgroundG }}
                now={pokemonSelected.stats?.[2].base_stat}
                max="150"
              />

              <div className="stat-data">
                <div> atack</div>
                <div> {pokemonSelected.stats?.[1].base_stat} /150</div>
              </div>
              <ProgressBar
                variant={color}
                style={{ background: backgroundG }}
                now={pokemonSelected.stats?.[1].base_stat}
                max="150"
              />

              <div className="stat-data">
                <div> speed</div>
                <div> {pokemonSelected.stats?.[5].base_stat} /150</div>
              </div>
              <ProgressBar
                variant={color}
                style={{ background: backgroundG }}
                now={pokemonSelected.stats?.[5].base_stat}
                max="150"
              />
            </div>
          </div>
        </Card>
        <Card
          className="box-shadow"
          border={color}
          style={{ border: "solid .1rem", marginTop: "40px" }}
        >
          <Card.Header>Movements</Card.Header>
          <Card.Body>
            <Card.Text>
              <div className="content-moves">
                {pokemonSelected.moves?.map((move) => (
                  <div className="move" key={move.move.name}>
                    <p>{move.move.name}</p>
                  </div>
                ))}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PokedexDetails;
