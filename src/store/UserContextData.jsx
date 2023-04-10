import React, { createContext } from "react";

const UserContext = createContext({
  userName: "",
  nodes: [],
  edges: [],


})

export default UserContext;