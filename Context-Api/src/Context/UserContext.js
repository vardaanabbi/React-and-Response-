import React from "react";

const context = React.createContext() ; 

export default context ; 

// we also need to create a provider which is nothing we just wrap the compoents inside this context through which wrapped components get the access of this context . ee this context as a global file only .