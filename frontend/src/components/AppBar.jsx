// config
import React from "react";
import Constants from "expo-constants";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

// components
import Text from "./Text";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
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
  const { data, loading } = useQuery(GET_AUTHORIZED_USER);
  let user;
  if (loading) {
    user = null;
  } else {
    user = data.authorizedUser;
  }
  console.log("user", user);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={"Repositories"} url={"/"} />

        {user ? (
          <AppBarTab text={"SignOut"} url={"/"} />
        ) : (
          <AppBarTab text={"SignIn"} url={"/signin"} />
        )}
        {/* {user ? (
          <AppBar text={"SignOut"} url={"/"} />
        ) : (
          <AppBarTab text={"SignIn"} url={"/signin"} />
        )} */}
      </ScrollView>
    </View>
  );
};

export default AppBar;
