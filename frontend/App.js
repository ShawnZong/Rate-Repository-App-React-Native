// config
import React from "react";
import AuthStorage from "./src/utils/authStorage";

// apollo
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "./src/utils/apolloClient";

// components
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
