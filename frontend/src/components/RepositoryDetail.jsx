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
  //   console.log("id", id);
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
  //   console.log("data", repository);

  return <RepositoryItem item={repository} />;
};
