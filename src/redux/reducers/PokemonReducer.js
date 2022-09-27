import {
  GET_POKEMONS_LIST,
  GET_POKEMON_ONE,
  GET_POKEMON_ONE_NOT_FOUND,
} from "./../actions/pokemon.actions";

const initialstate = {
  Pokemons: [],
  pageCount: 0,
  Pokemon: {},
  errorMsg: "",
};

export const PokemonReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_POKEMONS_LIST: {
      return {
        state,
        Pokemons: action.payload.data.results,
        pageCount: action.payload.data.count,
      };
    }
    case GET_POKEMON_ONE: {
      return {
        ...state,
        errorMsg: "",
        Pokemon: action.payload.data,
      };
    }
    case GET_POKEMON_ONE_NOT_FOUND: {
      return {
        ...state,
        errorMsg: "Pokemon noth found",
        Pokemon: {},
      };
    }

    default:
      return state;
  }
};
