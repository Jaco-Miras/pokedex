import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import Stats from "../../component/Stats";

function Details() {
  const { getPokemonDetails } = useAppContext();
  const params = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!params.pokemon) return;
    getPokemonDetails(params.pokemon).then((res) => setDetails(res.data));
  });

  console.log("details: ", details);
  return (
    <div className="grid place-items-center gap-3">
      <img src={details?.sprites.front_default} alt="" />
      <div className="flex gap-2">
        <h1>Name -</h1>
        <h1>{details?.name}</h1>
      </div>

      <div className="flex gap-2">
        <h1 className="text-2xl font-semibold">Types - </h1>
        {details?.types.map(({ type }) => (
          <p className="text-2xl">{type.name}</p>
        ))}
      </div>

      <div className="flex gap-2">
        <h1 className="text-2xl font-semibold">Ability -</h1>
        {details?.abilities.map(({ ability }) => (
          <p className="text-2xl">{ability.name}</p>
        ))}
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-semibold mb-3">Stats</h1>

        {details?.stats.map(({ stat, base_stat, effort }) => (
          <table class="border-collapse border border-slate-500 mx-auto w-full">
            <thead>
              <tr>
                <th class="border border-slate-600 ..."> Stat </th>
                <th class="border border-slate-600 ..."> Base Stat </th>
                <th class="border border-slate-600 ..."> Effort </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 ...">{stat.name}</td>
                <td class="border border-slate-700 ...">{base_stat}</td>
                <td class="border border-slate-700 ...">{effort}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Details;
