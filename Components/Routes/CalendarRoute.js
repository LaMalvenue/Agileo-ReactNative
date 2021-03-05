import React from "react";
import { View, Text } from "react-native";
import AppNavigationTopCalendar from "../Navigation/AppNavigationTopCalendar";

const CalendarRoute = () => {
  return (
    <View>
      <AppNavigationTopCalendar />
      <Text>Calendrier</Text>
    </View>
  );
};

export default CalendarRoute;
