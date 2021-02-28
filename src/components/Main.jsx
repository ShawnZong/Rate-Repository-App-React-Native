import React from "react";
import Constants from "expo-constants";

// components
import { Text, StyleSheet, View } from "react-native";
import { RepositoryList } from "./RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
      {/* <Text>Rate Repository Application</Text> */}
    </View>
  );
};

export default Main;
