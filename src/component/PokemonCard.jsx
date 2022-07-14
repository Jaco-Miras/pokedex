import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PokemonCard({ name, url }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!url) return;
    getPokemonDetails().then((res) => setDetails(res.data));
  }, [url]);

  const getPokemonDetails = async () => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
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
