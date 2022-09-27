import axios from "axios";
export const GET_POKEMONS_LIST = "GET_POKEMONS_LIST";
export const GET_POKEMON_ONE = "GET_POKEMON_ONE";
export const GET_POKEMON_ONE_NOT_FOUND = "GET_POKEMON_ONE_NOT_FOUND";

export const getPokemonThunk = (currentPage) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${currentPage}`
    );

    dispatch({
      type: GET_POKEMONS_LIST,
      payload: response,
    });
  };
};

export const getPokemonOneThunk = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      dispatch({
        type: GET_POKEMON_ONE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: GET_POKEMON_ONE_NOT_FOUND,
      });
    }
  };
};
