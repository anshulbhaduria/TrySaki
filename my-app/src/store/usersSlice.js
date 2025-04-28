import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Manager",
  },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Admin" },
];

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: initialUsers,
    filter: "",
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const selectUsersState = (state) => state.users;
export const selectFilter = (state) => selectUsersState(state).filter;
export const selectAllUsers = (state) => selectUsersState(state).list;

export const selectFilteredUsers = createSelector(
  [selectAllUsers, selectFilter],
  (users, filter) => {
    const term = filter.toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(term));
  }
);

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
