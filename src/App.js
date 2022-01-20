import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/details/:id" exact element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
