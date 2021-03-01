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
import { formatISO } from "date-fns";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    padding: 10,
    borderRadius: 20,
  },
  ratingTitleDescription: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ratingView: {
    flexGrow: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    marginRight: 15,
    borderColor: theme.colors.primary,
    justifyContent: "center",
  },
  ratingText: {
    color: theme.colors.primary,
    textAlign: "center",
    fontSize: 20,
  },
  titleDescription: {
    flexGrow: 1,
    marginRight: 20,
  },
  description: {
    marginRight: 60,
    marginBottom: 5,
    marginTop: 5,
    fontSize: theme.fontSizes.body,
    // padding: 50,
  },
});

export const ReviewItem = (item) => {
  const review = item.review.node;
  // console.log("single item,", review);
  // console.log(
  //   "date",
  //   formatISO(new Date(review.createdAt), { representation: "date" })
  // );
  // return <Text>review</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.ratingTitleDescription}>
        <View style={styles.ratingView}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.titleDescription}>
          <Text testID={review.id} fontWeight="bold" fontSize="subheading">
            {review.user.username}
          </Text>
          <Text testID={review.id} color="textSecondary">
            {formatISO(new Date(review.createdAt), { representation: "date" })}
          </Text>
          <View style={styles.description}>
            <Text testID={review.id}>{review.text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
