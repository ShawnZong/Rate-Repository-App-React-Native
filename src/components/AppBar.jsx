// config
import React from "react";
import Constants from "expo-constants";

// components
import Text from "./Text";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
    borderRadius: 5,
  },
  text: { padding: 25, color: "white" },
});

const AppBarTab = ({ text, url }) => {
  const onPress = () => {
    console.log("hi");
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Link
        to={`${url}`}
        component={TouchableWithoutFeedback}
        activeOpacity={0.8}
      >
        <Text style={styles.text} fontSize="subheading" fontWeight="bold">
          {text}
        </Text>
      </Link>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text={"Repositories"} url={"/"} />
      <AppBarTab text={"SignIn"} url={"/signin"} />
    </View>
  );
};

export default AppBar;
