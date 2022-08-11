import React from "react";
export const userContext = React.createContext();
export const dataContext = React.createContext();

//user context always give you two things one is provider second one consumer but here we use provider and useContext instead of consumer.

//Step 1: create context
//Step 2: wrap childs with context provider
//Step 3: state access useContext hook