import React from "react";
import Constants from "expo-constants";

// components
import { Text, StyleSheet, View } from "react-native";
import { RepositoryList } from "./RepositoryList";
import AppBar from "./AppBar";

// router
import { Route, Switch, Redirect } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
