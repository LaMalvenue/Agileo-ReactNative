import React from "react";
import { StyleSheet } from "react-native";
import {
  Avatar,
  Card,
  IconButton,
  TouchableRipple,
  Divider,
  List,
} from "react-native-paper";

const UserProfileClassroom = () => {
  const [displayClasse, setDisplayClasse] = React.useState("none");
  const [chevronClasse, setChevronClasse] = React.useState("chevron-down");

  const handlePressClasse = () => {
    if (displayClasse == "none") {
      setDisplayClasse("flex");
      setChevronClasse("chevron-up");
    } else if (displayClasse == "flex") {
      setDisplayClasse("none");
      setChevronClasse("chevron-down");
    }
  };

  return (
    <Card style={styles.card}>
      <TouchableRipple
        onPress={handlePressClasse}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Card.Title
          title="Ma Promo"
          left={(props) => <Avatar.Icon {...props} icon="account-group" />}
          right={(props) => <IconButton {...props} icon={chevronClasse} />}
        />
      </TouchableRipple>
      <Card.Content style={{ display: displayClasse }}>
        <List.Section>
          <List.Subheader>Professeurs :</List.Subheader>
          <List.Item
            left={(props) => <List.Icon {...props} icon="account" />}
            title="Lisa TrucMuche"
          />
          <List.Item
            left={(props) => <List.Icon {...props} icon="account" />}
            title="Renaud Dupont"
          />
        </List.Section>
        <Divider />
        <List.Section>
          <List.Subheader>Eleves :</List.Subheader>
          <List.Item
            left={(props) => <List.Icon {...props} icon="account" />}
            title="Marine Machin"
          />
          <List.Item
            left={(props) => <List.Icon {...props} icon="account" />}
            title="Valentin Bidule"
          />
        </List.Section>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
  },
});

export default UserProfileClassroom;
