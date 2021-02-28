import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
    borderRadius: 5,
  },
  text: { padding: 25, color: "white" },
});

const AppBarTab = ({ text }) => {
  const onPress = () => {
    console.log("hi");
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.text} fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text={"Repositories"} />
    </View>
  );
};

export default AppBar;
