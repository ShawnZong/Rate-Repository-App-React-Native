// import { useState, useEffect } from "react";

// graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  let repositories;
  if (loading) {
    repositories = null;
  } else {
    repositories = data.repositories;
  }
  if (error) {
    throw new Error("useRepositories error", error);
  }

  return { repositories, loading };
};

export default useRepositories;
