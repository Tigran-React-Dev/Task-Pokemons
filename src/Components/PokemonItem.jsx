import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonOneThunk } from "../redux/actions/pokemon.actions";
import css from "../assets/style/PokemonSingle.module.scss";

const PokemonItem = () => {
  const dispatch = useDispatch();
  const Pokemon = useSelector((state) => state.PokemonReducer.Pokemon);
  const errorMsg = useSelector((state) => state.PokemonReducer.errorMsg);

  const { name } = useParams();

  useEffect(() => {
    dispatch(getPokemonOneThunk(name));
  }, [name]);

  return (
    <div className={css.pokemonItem}>
      {errorMsg != "" ? (
        <p className={css.nothfound}>{errorMsg}</p>
      ) : Object.keys(Pokemon).length ? (
        <div className={css.pokemonInfo}>
          <div className={css.nameconent}>
            <span className={css.pokemon_name}>Pokimo name</span>
            <span className={css.pokemon_name}>{name}</span>
          </div>
          <div className={css.speciescontnet}>
            <span>Species</span>
            <div className={css.sprints}>
              <img src={Pokemon.sprites.back_default} alt="back_default" />
              <img src={Pokemon.sprites.back_shiny} alt="back_shiny" />
              <img src={Pokemon.sprites.front_default} alt="front_default" />
              <img src={Pokemon.sprites.front_shiny} alt="front_shiny" />
            </div>
          </div>
          <div className={css.statscontent}>
            <span>Stats</span>
            {Pokemon.stats.map(({ stat, base_stat }) => {
              return (
                <p key={stat.name}>
                  {stat.name} {base_stat}
                </p>
              );
            })}
          </div>
          <div className={css.typescontnet}>
            <span>Types</span>
            {Pokemon.types.map(({ slot, type }) => {
              return (
                <p key={type.name}>
                  {type.name} {slot}
                </p>
              );
            })}
          </div>
          <div className={css.weight}>
            <span>Weight - {Pokemon.weight}</span>
          </div>
          <div className={css.movescontent}>
            <p>Moves</p>
            <div className={css.pokemonmoves}>
              {Pokemon.moves.map(({ move }) => {
                return <span key={move.name}>{move.name}</span>;
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PokemonItem;
