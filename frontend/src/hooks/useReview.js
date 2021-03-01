// import { useState, useEffect } from "react";

// graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_REVIEWS_IN_ONE_REPOSITORY } from "../graphql/queries";

export const useReview = (id) => {
  const { data, error, loading } = useQuery(GET_ALL_REVIEWS_IN_ONE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });
  let reviews;
  if (loading) {
    reviews = null;
  } else {
    reviews = data.repository.reviews.edges;
  }
  if (error) {
    throw new Error("useReview error", error);
  }
  // console.log("reviews", reviews);
  return { reviews, loading };
};
