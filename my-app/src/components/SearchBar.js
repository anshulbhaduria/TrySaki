import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../store/usersSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Search by name..."
      style={{
        width: "100%",
        padding: "0.5rem",
        marginBottom: "1rem",
        boxSizing: "border-box",
      }}
    />
  );
}
