// config
import React from "react";
// apollo
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "./src/utils/apolloClient";
const apolloClient = createApolloClient();

// components
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";

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
