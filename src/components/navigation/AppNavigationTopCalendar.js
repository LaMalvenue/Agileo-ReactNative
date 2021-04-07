import React from "react";
import { Appbar, Avatar } from "react-native-paper";

const AppNavigationTopCalendar = (props) => {
  const dots = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

  return (
    <Appbar.Header>
      <Appbar.Action icon="bell" onPress={() => {}} color={"white"} />
      <Avatar.Image {...props} source={require("./../../../assets/lucas.jpeg")} size={40} />
    </Appbar.Header>
  );
};

export default AppNavigationTopCalendar;
