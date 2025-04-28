import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredUsers } from "../store/usersSlice";

export default function UserTable() {
  const users = useSelector(selectFilteredUsers);

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "400px",
        }}
      >
        <thead>
          <tr>
            {["Name", "Email", "Role"].map((header) => (
              <th
                key={header}
                style={{
                  textAlign: "left",
                  padding: "0.5rem",
                  borderBottom: "2px solid #ddd",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                {u.name}
              </td>
              <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                {u.email}
              </td>
              <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                {u.role}
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td
                colSpan="3"
                style={{ padding: "0.5rem", textAlign: "center" }}
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
