import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import CoursesCurrentCourse from "./../components/courses/CoursesCurrentCourse";
import CoursesAllCourses from "./../components/courses/CoursesAllCourses";

const CoursesCurrentCourseRoute = () => <CoursesCurrentCourse style={[styles.scene]} />;
const CoursesAllCoursesRoute = () => <CoursesAllCourses style={[styles.scene]} />;

const initialLayout = { width: Dimensions.get("window").width };

const CoursesRoute = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "coursesCurrentCourse", title: "En cours" },
    { key: "coursesAllCourses", title: "Tous" },
  ]);

  const renderScene = SceneMap({
    coursesCurrentCourse: CoursesCurrentCourseRoute,
    coursesAllCourses: CoursesAllCoursesRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#92dedb" }}
      style={styles.tabs}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabs: {
    backgroundColor: "#0cada6",
    paddingTop: 30

  }
});

export default CoursesRoute;
