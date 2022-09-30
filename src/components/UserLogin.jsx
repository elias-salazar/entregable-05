import React from "react";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/userName";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const dispatchUserName = () => {
    dispatch(changeName(userName));
    navigate("/pokedex");
    setUserName("");
  };
  return (
    <div className="content-login">
      <div className="container-input">
        <div className="img-pokedex">
          <img src="src/images/Pokedex.PNG" alt="pokedex" />
        </div>
        <div className="content-hi-login">
          <h1>¡Hola entrenador!</h1>
          <p>Para poder comenzar, dame tu nombre</p>
        </div>
        <div className="content-input-login">
          <FormControl
            type="text"
            placeholder="tu nombre"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button variant="danger" onClick={dispatchUserName}>
            send
          </Button>{" "}
        </div>
      </div>
      <footer>
        <div className="red-line"></div>
        <div className="black-line"></div>
        <div className="white-circle">
          <div className="black-circle"></div>
        </div>
      </footer>
    </div>
  );
};

export default UserLogin;
