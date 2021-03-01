// config
import React, { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import Constants from "expo-constants";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

// apollo
import { useApolloClient } from "@apollo/react-hooks";

// components
import Text from "./Text";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
    borderRadius: 5,
  },
  text: { padding: 25, color: "white" },
});

const AppBarTab = ({ text, url }) => {
  return (
    <TouchableWithoutFeedback>
      <Link
        to={`${url}`}
        component={TouchableWithoutFeedback}
        activeOpacity={0.8}
      >
        <Text style={styles.text} fontSize="subheading" fontWeight="bold">
          {text}
        </Text>
      </Link>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  const { data, loading } = useQuery(GET_AUTHORIZED_USER);
  let user;
  if (loading) {
    user = null;
  } else {
    user = data.authorizedUser;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={"Repositories"} url={"/"} />

        {user ? (
          <TouchableWithoutFeedback onPress={signOut}>
            <Text style={styles.text} fontSize="subheading" fontWeight="bold">
              Sign Out
            </Text>
          </TouchableWithoutFeedback>
        ) : (
          <AppBarTab text={"Sign In"} url={"/signin"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
