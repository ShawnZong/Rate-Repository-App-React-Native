import React from "react";
// import Constants from "expo-constants";

// components
import { StyleSheet, View } from "react-native";
import { RepositoryList } from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import { RepositoryDetail } from "./RepositoryDetail";
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
        <Route path="/repository/:id" exact>
          <RepositoryDetail />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
