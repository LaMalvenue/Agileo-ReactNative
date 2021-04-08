import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Card,
  Button,
  Paragraph,
  Title,
  ProgressBar,
  TouchableRipple,
  IconButton,
  useTheme,
} from "react-native-paper";

const CoursesAllCourses = () => {

  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: background }}
      contentContainerStyle={styles.content}
    >

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 4,
  },
  row: {
    marginVertical: 10,
  },
  card: {
    margin: 4,
  },
});

export default CoursesAllCourses;
