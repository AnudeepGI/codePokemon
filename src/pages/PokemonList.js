import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable";
import Loading from "../components/Loading";
import fetchDataPokemonGO from "../services/Api";
import { POKEMON_URL } from "../constant/URL";
import AppBarPokemon from "../components/AppBarPokemon";

function PokemonList() {
  const [listPokemon, setListPokemon] = useState("");

  const fetchData = async () => {
    fetchDataPokemonGO(POKEMON_URL)
      .then((res) => res.json())
      .then((json) => setListPokemon(json.pokemon))
      .catch((error) => console.log(error));
  };

  useEffect(() => fetchData(), []);

  return (
    <React.Fragment>
      <AppBarPokemon />
      {listPokemon.length > 0 ? <DataTable data={listPokemon} /> : <Loading />}
    </React.Fragment>
  );
}

export default PokemonList;
