import React from "react";
import { StyleSheet } from "react-native";
import {
  Avatar,
  Card,
  IconButton,
  Button,
  TouchableRipple,
  Divider,
  List,
} from "react-native-paper";

const LeftContent = (props) => (
  <Avatar.Image {...props} source={require("./../../assets/lucas.jpeg")} />
);

const UserProfileInformations = () => {
  const [displayInformations, setDisplayInformations] = React.useState("none");
  const [chevronInformations, setChevronInformations] = React.useState(
    "chevron-down"
  );

  const handlePressInformations = () => {
    if (displayInformations == "none") {
      setDisplayInformations("flex");
      setChevronInformations("chevron-up");
    } else if (displayInformations == "flex") {
      setDisplayInformations("none");
      setChevronInformations("chevron-down");
    }
  };

  return (
    <Card style={styles.card}>
      <TouchableRipple
        onPress={handlePressInformations}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Card.Title
          title="Lucas Charnay"
          subtitle="Développeur web"
          left={LeftContent}
          right={(props) => (
            <IconButton {...props} icon={chevronInformations} />
          )}
        />
      </TouchableRipple>
      <Card.Content style={{ display: displayInformations }}>
        <List.Section>
          <List.Item
            left={(props) => <List.Icon {...props} icon="map-marker" />}
            title="Lyon"
          />
          <List.Item
            left={(props) => <List.Icon {...props} icon="email" />}
            title="lucas.charnay@gmail.com"
          />
        </List.Section>
        <Divider />
        <List.Subheader>Intérêts :</List.Subheader>
        <List.Section>
          <List.Item
            left={(props) => (
              <List.Icon {...props} icon="language-javascript" />
            )}
            title="Javascript"
          />
          <List.Item
            left={(props) => <List.Icon {...props} icon="language-php" />}
            title="PHP"
          />
          <List.Item
            title="Java"
            left={(props) => <List.Icon {...props} icon="language-java" />}
          />
        </List.Section>
      </Card.Content>
      <Card.Actions style={{ display: displayInformations }}>
        <Button onPress={() => {}}>Modifier le profil</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
  },
});

export default UserProfileInformations;
