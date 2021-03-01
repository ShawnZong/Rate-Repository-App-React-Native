import { useMutation } from "@apollo/react-hooks";

import { USER_LOGIN } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(USER_LOGIN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { username: username, password: password },
    });
    // console.log(data);
    return data;
  };
  return [signIn, result];
};
