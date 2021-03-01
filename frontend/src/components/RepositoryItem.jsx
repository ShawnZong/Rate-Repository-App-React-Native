import React from "react";
// components
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import Text from "./Text";

// router
import { Link } from "react-router-native";

// style
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    padding: 10,
    borderRadius: 20,
  },
  personTitleDescription: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  profile: {
    flexGrow: 0,
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  titleDescription: {
    flexGrow: 1,
    marginRight: 20,
  },
  details: {
    height: 100,
    paddingLeft: 20,
    justifyContent: "space-evenly",
    flex: 3,
  },
  githubBox: {
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "stretch",
  },
  languageBox: {
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  textInBox: {
    color: "white",
    padding: 10,
    alignSelf: "center",
  },
  figure: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 2,
  },
});

export const RepositoryItem = ({ item }) => {
  console.log("url", item.url);
  return (
    <View style={styles.container}>
      <View style={styles.personTitleDescription}>
        <Image style={styles.profile} source={{ uri: item.ownerAvatarUrl }} />

        <Link
          to={`/repository/${item.id}`}
          component={TouchableWithoutFeedback}
          activeOpacity={0.8}
        >
          <View style={styles.titleDescription}>
            <Text testID={item.id} fontWeight="bold" fontSize="subheading">
              {item.fullName}
            </Text>

            <Text testID={item.id} color="textSecondary">
              {item.description}
            </Text>

            <View style={styles.languageBox}>
              <Text testID={item.id} style={styles.textInBox}>
                Language: {item.language}
              </Text>
            </View>
          </View>
        </Link>
      </View>
      <View style={styles.figure}>
        <View>
          <Text testID={item.id} fontWeight="bold" fontSize="subheading">
            {item.stargazersCount >= 1000
              ? (item.stargazersCount / 1000).toFixed(1).concat("K")
              : item.stargazersCount}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View>
          <Text testID={item.id} fontWeight="bold" fontSize="subheading">
            {item.forksCount >= 1000
              ? (item.forksCount / 1000).toFixed(1).concat("K")
              : item.forksCount}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View>
          <Text testID={item.id} fontWeight="bold" fontSize="subheading">
            {item.reviewCount >= 1000
              ? (item.reviewCount / 1000).toFixed(1).concat("K")
              : item.reviewCount}
          </Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View>
          <Text testID={item.id} fontWeight="bold" fontSize="subheading">
            {item.ratingAverage}
          </Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>

      {item.url ? (
        <View style={styles.githubBox}>
          <TouchableWithoutFeedback onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.textInBox}>Open in GitHub</Text>
          </TouchableWithoutFeedback>
        </View>
      ) : null}
    </View>
  );
};
