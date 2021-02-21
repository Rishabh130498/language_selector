import React from "react";

export default React.createContext("Hindi");
// this value(Hindi) is gonna replace when provider from App component calls
// if you provided no value while using provider, there might be consequences.
// we provide default value when we wont use provider, we have only option of using "default value" other method to insert value in context object
