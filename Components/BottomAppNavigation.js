import React from "react";
import { View, StyleSheet } from "react-native";
import {
  BottomNavigation,
  Text,
  Avatar,
  Colors,
  Card,
} from "react-native-paper";
import Parameters from "./Parameters";

const CoursesRoute = () => <Text>Cours</Text>;

const CalendarRoute = () => <Text>Calendrier</Text>;

const MessagesRoute = () => <Text>Messages</Text>;

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;
const ProfilRoute = () => (
  <View>
    <Card>
      <Card.Title
        title="Lucas Charnay"
        subtitle="Développeur web"
        left={LeftContent}
      />
    </Card>
    <Parameters />
  </View>
);

const BottomAppNavigation = () => {

  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: "courses", title: "Cours", icon: "school" },
    { key: "calendar", title: "Calendrier", icon: "calendar" },
    { key: "messages", title: "Messages", icon: "email" },
    { key: "profil", title: "Profil", icon: "account-circle" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profil: ProfilRoute,
    courses: CoursesRoute,
    messages: MessagesRoute,
    calendar: CalendarRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

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
});

export default BottomAppNavigation;