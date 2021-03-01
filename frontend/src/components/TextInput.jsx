import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 50,
    justifyContent: "space-between",
    borderWidth: 3,
    borderColor: "grey",
    borderRadius: 10,
    margin: 10,
    textAlign: "center",
  },
  errorBorder: {
    height: 50,
    justifyContent: "space-between",
    borderWidth: 3,
    borderRadius: 10,
    margin: 10,
    textAlign: "center",
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.errorBorder, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
