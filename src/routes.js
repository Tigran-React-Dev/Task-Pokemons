import PokemonList from './Components/PokemonList';
import PokemonItem from './Components/PokemonItem';

import { HOME_PAGE, POKEMON_SINGL_PAGE } from './utils/urls';

export const routes = [

    {
        id:1,
        name:"home",
        component:PokemonList,
        exect:true,
        path:HOME_PAGE
    },
    {
        id:2,
        name:"pokemon",
        component:PokemonItem,
        exect:true,
        path:POKEMON_SINGL_PAGE
    }
]