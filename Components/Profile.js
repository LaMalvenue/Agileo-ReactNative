import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Card,
  useTheme,
  IconButton,
  Button,
  TouchableRipple,
} from "react-native-paper";

const LeftContent = (props) => (
  <Avatar.Image
    {...props}
    style={styles.avatar}
    source={require("./../assets/lucas.jpeg")}
  />
);

const Profile = () => {
  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: background }}
      contentContainerStyle={styles.content}
    >
      <Card style={styles.card}>
        <Card.Title
          title="Lucas Charnay"
          subtitle="Développeur web"
          left={LeftContent}
        />
      </Card>
      <Card style={styles.card}>
        <TouchableRipple onPress={() => {}} rippleColor="rgba(0, 0, 0, .32)">
          <Card.Title
            title="Parcours"
            left={(props) => <Avatar.Icon {...props} icon="rocket-launch" />}
            right={(props) => <IconButton {...props} icon="chevron-down" />}
          />
        </TouchableRipple>
      </Card>
      <Card style={styles.card}>
        <TouchableRipple onPress={() => {}} rippleColor="rgba(0, 0, 0, .32)">
          <Card.Title
            title="Informations"
            left={(props) => <Avatar.Icon {...props} icon="text-box" />}
            right={(props) => <IconButton {...props} icon="chevron-down" />}
          />
        </TouchableRipple>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    margin: 8,
  },
  container: {
    flex: 1,
  },
  row: {
    marginVertical: 10,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
  button: {
    margin: 4,
  },
});

export default Profile;
