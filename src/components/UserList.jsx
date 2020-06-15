import React from "react";
import { useResources } from "./useRousources";

export const UserList = () => {
    const users = useResources("users");
    return (
      <ul>
          { users.map(user => <li key={user.id}>{ user.name }</li>) }
      </ul>
    );
}