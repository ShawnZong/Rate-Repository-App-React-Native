import React from "react";

// hooks
import { useSignIn } from "../hooks/useSignIn";

// components
import Text from "./Text";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

// form
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";

// style
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "stretch",
    padding: 10,
    flex: 1,
  },

  signInRoundCorner: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },
  signInButton: {
    textAlign: "center",
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },
});

const initialValues = {
  username: "",
  pwd: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        lable="username"
        name="username"
        placeholder="username"
      />
      <FormikTextInput name="pwd" placeholder="password" secureTextEntry />
      <View style={styles.signInRoundCorner}>
        <TouchableWithoutFeedback onPress={onSubmit}>
          <Text style={styles.signInButton}>Sign In</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, pwd } = values;
    try {
      const data = await signIn({ username, password: pwd });
      console.log(data.authorize.accessToken);
    } catch (error) {
      console.log(error);
    }
    // console.log(values);
  };
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    pwd: yup.string().required("Password is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
