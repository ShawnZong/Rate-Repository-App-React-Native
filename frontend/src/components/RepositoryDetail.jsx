// config
import React from "react";

// graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_ONE_REPOSITORY } from "../graphql/queries";
import { useReview } from "../hooks/useReview";

// components
import { FlatList, View, StyleSheet } from "react-native";
import Text from "./Text";
import { RepositoryItem } from "./RepositoryItem";
import { ReviewItem } from "./ReviewItem";

// router
import { useParams } from "react-router-native";

// style
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryDetail = () => {
  // get id from url
  let { id } = useParams();

  //   get reviews
  const reviewResponse = useReview(id);

  //   get this repository data
  const { data, error, loading } = useQuery(GET_ONE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      id: id,
    },
  });

  let repository;
  if (loading || reviewResponse.loading) {
    return <Text>Loading</Text>;
  } else {
    repository = data.repository;
  }
  return (
    <FlatList
      data={reviewResponse.reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.node.id}
      ListHeaderComponent={() => <RepositoryItem item={repository} />}
    />
  );
  //   return <RepositoryItem item={repository} />;
};
