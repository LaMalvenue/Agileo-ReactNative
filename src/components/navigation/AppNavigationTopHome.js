import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Avatar } from "react-native-paper";

const AppNavigationTopHome = (props) => {
  return (
    <Appbar.Header style={styles.container}>

      <Avatar.Image
        {...props}
        source={require("./../../../assets/lucas.jpeg")}
        size={35}
        onPress={() => navigation.navigate('Profile')}
        style={styles.avatar}
      />
      <Appbar.Action
        icon="bell"
        onPress={() => navigation.navigate('courses')}
        color={"white"}
        style={styles.notificationIcon}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    height: 50,
  },
  avatar: {
    margin: 10,
  },
  notificationIcon: {
    marginRight: 0,
  },
});

export default AppNavigationTopHome;
