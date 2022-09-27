import React, { useState, useEffect } from "react";
import useDebounce from "./../hooks/useDebounce";
import { NavLink, useHistory } from "react-router-dom";
import css from "../assets/style/Pokemons.module.scss";
import { HOME_PAGE } from './../utils/urls';




const SearchBar = () => {
  const [search, setSearch] = useState("");
  const debonceValue = useDebounce(search, 1500);
  const history = useHistory();

  useEffect(() => {
    if (debonceValue.length >= 3) {
      history.push(`/${debonceValue}`);
    }
  }, [debonceValue]);

  return (
    <div className={css.navbar}>
      <form
        className={css.searchForm}
        onSubmit={(e) => {
          e.preventDefault();
          if (debonceValue.length >= 3) {
            history.push(`/${debonceValue}`);
            setSearch("")
          }
        }}
      >
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
      <NavLink exact to={HOME_PAGE}>Home</NavLink>
    </div>
  );
};

export default SearchBar;
