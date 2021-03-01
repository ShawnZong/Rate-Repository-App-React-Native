// config
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useMutation, useApolloClient } from "@apollo/react-hooks";

import { USER_LOGIN } from "../graphql/mutations";

export const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(USER_LOGIN);

  const signIn = async ({ username, password }) => {
    // send mutation to apollo
    const { data } = await mutate({
      variables: { username: username, password: password },
    });

    // set local storage
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    // console.log("hi", await authStorage.getAccessToken());
    return data;
  };
  return [signIn, result];
};
