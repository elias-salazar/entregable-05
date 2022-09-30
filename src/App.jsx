import { useState } from "react";

import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/UserLogin";
import Pokedex from "./components/Pokedex";
import PokemonCard from "./components/PokemonCard";
import ProtectedRoutes from "./components/protectedRoutes";
import PokedexDetails from "./components/PokedexDetails";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokemon" element={<PokemonCard />} />
            <Route path="/pokedex/:id" element={<PokedexDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
