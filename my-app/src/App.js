import React from "react";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="container">
      <h1>User List</h1>
      <SearchBar />
      <UserTable />
    </div>
  );
}

export default App;
