import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, FAB, Portal } from "react-native-paper";
import UserPost from "./HomePost";

const Home = () => {
  const [visible, setVisible] = React.useState(true);
  const [firstQuery, setFirstQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setFirstQuery(query)}
        value={firstQuery}
        style={styles.searchbar}
      />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "close" : "plus"}
          actions={[
            { icon: "bell", label: "Notification", onPress: () => {} },
            { icon: "pencil", label: "Publication", onPress: () => {} },
          ]}
          onStateChange={({ open }) => setOpen(open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
          visible={visible}
          style={styles.fabContainer}
        />
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    marginBottom: 55,
  },
  fab: {
    margin: 8,
  },
});

export default Home;
