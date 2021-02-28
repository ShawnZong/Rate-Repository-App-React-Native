import React from "react";

// components
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Formik } from "formik";

// style
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "stretch",
    padding: 10,
    flex: 1,
  },
  input: {
    height: 50,
    justifyContent: "space-between",
    borderWidth: 3,
    margin: 10,
    textAlign: "center",
  },
  signInButton: {
    textAlign: "center",
    backgroundColor: theme.colors.primary,
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
        style={styles.input}
        lable="username"
        name="username"
        placeholder="username"
      />
      <FormikTextInput
        style={styles.input}
        name="pwd"
        placeholder="password"
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.signInButton}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
