import Slider from "../components/Slider";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { POKEMON_URL } from "../constant/URL";
import fetchDataPokemonGO from "../services/Api";
import AppBarPokemon from "../components/AppBarPokemon";

function PokemonDetail() {
  const { id } = useParams();
  const [listPokemon, setListPokemon] = useState("");

  const fetchData = async () => {
    fetchDataPokemonGO(POKEMON_URL)
      .then((res) => res.json())
      .then((json) => setListPokemon(json.pokemon))
      .catch((error) => console.log(error));
  };

  useEffect(() => fetchData(), []);
  return (
    <>
      <AppBarPokemon enable={true} />
      <div
        style={{
          width: "28%",
          margin: "auto",
          marginBottom: "10px",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        <Slider data={listPokemon} index={id} />
      </div>
    </>
  );
}
export default PokemonDetail;
