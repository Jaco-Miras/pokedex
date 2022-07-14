// Create Context
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

// Create Provider
export const AppContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonDetails = async (pokemon) => {
    try {
      return axios.get(`${apiUrl}/${pokemon}`);
    } catch (error) {
      console.log(error);
    }
  };

  const payload = { pokemons, getPokemonDetails };
  return <AppContext.Provider value={payload}>{children}</AppContext.Provider>;
};

// Export
export const useAppContext = () => useContext(AppContext);
