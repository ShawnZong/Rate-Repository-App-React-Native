import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
// id: "jaredpalmer.formik",
// fullName: "jaredpalmer/formik",
// description: "Build forms in React, without the tears",
// language: "TypeScript",
// forksCount: 1589,
// stargazersCount: 21553,
// ratingAverage: 88,
// reviewCount: 4,
// ownerAvatarUrl: "
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Starts: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};
