import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function PokemonCard({ name }) {
  const { getPokemonDetails } = useAppContext();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getPokemonDetails(name).then((res) => setDetails(res.data));
  }, []);

  return (
    <div
      key={name}
      className="border border-gray-200 px-10 py-2 rounded-md cursor-pointer flex items-center"
      onClick={() => navigate(`/details/${name}`)}
    >
      <img src={details?.sprites.front_default} alt="" />
      <h1>{name}</h1>
    </div>
  );
}

export default PokemonCard;
