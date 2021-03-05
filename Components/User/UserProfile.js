import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import UserProfileClassroom from "./UserProfileClassroom";
import UserProfileCurrentCourse from "./UserProfileCurrentCourse";
import UserProfileInformations from "./UserProfileInformations";

const UserProfile = () => {
  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: background }}
      contentContainerStyle={styles.content}
    >
      <UserProfileInformations />
      <UserProfileCurrentCourse />
      <UserProfileClassroom />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 4,
  },
});

export default UserProfile;
