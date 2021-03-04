import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Colors } from "react-native-paper";
import Parcours from "./../Parcours";

const LeftContent = (props) => (
  <Avatar.Image
    {...props}
    style={styles.avatar}
    source={require("./../../assets/lucas.jpeg")}
  />
);

const ProfileRoute = () => {
  return (
    <View>
      <Card>
        <Card.Title
          title="Lucas Charnay"
          subtitle="Développeur web" 
          left={LeftContent}
        />
      </Card>
      <Parcours />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      paddingVertical: 8,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    fab: {
      position: 'absolute',
      right: 16,
      bottom: 28,
    },
    avatar: {
      margin: 8,
    },
  });

export default ProfileRoute;
