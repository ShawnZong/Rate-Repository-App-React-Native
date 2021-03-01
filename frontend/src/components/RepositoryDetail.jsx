// config
import React from "react";

// graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_ONE_REPOSITORY } from "../graphql/queries";

// components
import { FlatList, View, StyleSheet } from "react-native";
import Text from "./Text";
import { RepositoryItem } from "./RepositoryItem";

// router
import { useParams } from "react-router-native";

export const RepositoryDetail = () => {
  let { id } = useParams();
  console.log("id", id);
  const { data, error, loading } = useQuery(GET_ONE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      id: id,
    },
  });
  let repository;
  if (loading) {
    return <Text>Loading</Text>;
  } else {
    repository = data.repository;
  }
  console.log("data", repository);
  //   const { repository, fetchMore, reviews, loading } = useOneRepository({
  //     id,
  //     first: 3,
  //   });
  return (
    <RepositoryItem item={repository} />
    // <FlatList
    //   data={reviews}
    //   ItemSeparatorComponent={ItemSeparator}
    //   renderItem={({ item }) => <ReviewItem review={item} />}
    //   keyExtractor={({ id }) => id}
    //   ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    //   onEndReached={fetchMore}
    //   onEndReachedThreshold={0.8}
    //   // ...
    // />
  );
};
