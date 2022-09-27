import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getPokemonThunk } from "../redux/actions/pokemon.actions";
import css from "../assets/style/Pokemons.module.scss";
import { makeArray } from "../utils/helpers";

//ReactPaginate package
import ReactPaginate from "react-paginate";

const PokemonList = () => {
  const Pokemons = useSelector((state) => state.PokemonReducer.Pokemons);
  const pageCount = useSelector((state) => state.PokemonReducer.pageCount);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    dispatch(getPokemonThunk(currentPage));
  }, [currentPage, history.location.pathname]);

  useEffect(() => {
    if (Pokemons?.length) {
      setPages(makeArray(Math.ceil(pageCount / 16)));
    }
  }, [Pokemons]);

  return (
    <div>
      <ul className={css.pokemonlistcontainer}>
        {Pokemons?.map(({ name }) => {
          return (
            <li
              key={name}
              className={css.pokemonitem}
              onClick={() => history.push(`/${name}`)}
            >
              {name}
            </li>
          );
        })}
      </ul>
      <ul className={css.pagescontainer}>
        {pages?.map((p) => {
          return (
            <li
              key={p}
              onClick={() => {
                setCurrentPage(p);
                window.scrollTo(0, 0);
              }}
              style={{ backgroundColor: currentPage == p && "red" }}
            >
              {p}
            </li>
          );
        })}
      </ul>
      {/* <ReactPaginate
        className={css.pagination}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(data) => {
            setCurrentPage(data.selected);
            window.scrollTo(0, 0);
          }}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(pageCount / 16)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
};

export default PokemonList;
