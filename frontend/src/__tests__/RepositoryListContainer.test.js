import React from "react";
import { RepositoryListContainer } from "../components/RepositoryList";
import { render } from "@testing-library/react-native";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      const iterm1 = getAllByTestId("jaredpalmer.formik");
      expect(iterm1[0]).toHaveTextContent("jaredpalmer/formik");
      expect(iterm1[1]).toHaveTextContent(
        "Build forms in React, without the tears"
      );
      expect(iterm1[2]).toHaveTextContent("TypeScript");
      expect(iterm1[3]).toHaveTextContent("21.9K");
      expect(iterm1[4]).toHaveTextContent("1.6K");
      expect(iterm1[5]).toHaveTextContent("3");
      expect(iterm1[6]).toHaveTextContent("88");

      const iterm2 = getAllByTestId("async-library.react-async");
      expect(iterm2[0]).toHaveTextContent("async-library/react-async");
      expect(iterm2[1]).toHaveTextContent(
        "Flexible promise-based React data loader"
      );
      expect(iterm2[2]).toHaveTextContent("JavaScript");
      expect(iterm2[3]).toHaveTextContent("1.8K");
      expect(iterm2[4]).toHaveTextContent("69");
      expect(iterm2[5]).toHaveTextContent("3");
      expect(iterm2[6]).toHaveTextContent("72");
    });
  });
});
