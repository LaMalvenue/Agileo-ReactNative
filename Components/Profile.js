import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  Avatar,
  Card,
  useTheme,
  IconButton,
  Button,
  TouchableRipple,
  Paragraph,
  Title,
  Divider,
  ProgressBar,
  List,
  Colors,
  Text,
} from "react-native-paper";

const LeftContent = (props) => (
  <Avatar.Image
    {...props}
    style={styles.avatar}
    source={require("./../assets/lucas.jpeg")}
  />
);

const Profile = () => {
  const [progress, setProgress] = React.useState(0.63);
  const [displayInformations, setDisplayInformations] = React.useState("none");
  const [chevronInformations, setChevronInformations] = React.useState(
    "chevron-down"
  );
  const [displayParcours, setDisplayParcours] = React.useState("flex");
  const [chevronParcours, setChevronParcours] = React.useState("chevron-up");
  const [displayClasse, setDisplayClasse] = React.useState("none");
  const [chevronClasse, setChevronClasse] = React.useState("chevron-down");

  const handlePressInformations = () => {
    if (displayInformations == "none") {
      setDisplayInformations("flex");
      setChevronInformations("chevron-up");
    } else if (displayInformations == "flex") {
      setDisplayInformations("none");
      setChevronInformations("chevron-down");
    }
  };

  const handlePressParcours = () => {
    if (displayParcours == "none") {
      setDisplayParcours("flex");
      setChevronParcours("chevron-up");
    } else if (displayParcours == "flex") {
      setDisplayParcours("none");
      setChevronParcours("chevron-down");
    }
  };

  const handlePressClasse = () => {
    if (displayClasse == "none") {
      setDisplayClasse("flex");
      setChevronClasse("chevron-up");
    } else if (displayClasse == "flex") {
      setDisplayClasse("none");
      setChevronClasse("chevron-down");
    }
  };

  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: background }}
      contentContainerStyle={styles.content}
    >
      <Card style={styles.card}>
        <TouchableRipple
          onPress={handlePressInformations}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Card.Title
            title="Lucas Charnay"
            subtitle="Développeur web"
            left={LeftContent}
            right={(props) => <IconButton {...props} icon={chevronInformations} />}
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
      <Card style={styles.card}>
        <TouchableRipple
          onPress={handlePressParcours}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Card.Title
            title="Parcours"
            left={(props) => <Avatar.Icon {...props} icon="rocket-launch" />}
            right={(props) => <IconButton {...props} icon={chevronParcours} />}
          />
        </TouchableRipple>
        <Card.Cover
          source={{
            uri:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.eu-west-2.amazonaws.com%2Ffifteen-uploads%2Fuploads%2F2016%2F10%2Fbecoming-a-web-developer-in-2016.jpg&f=1&nofb=1",
          }}
          style={{ display: displayParcours }}
        />
        <Card.Content style={{ display: displayParcours }}>
          <Title>Développeur web</Title>
          <Paragraph>
            Apprendre et concevoir des applications web en utilisant le HTML,
            CSS et Javascript.
          </Paragraph>
          <View style={styles.row}>
            <Paragraph>En cours (64%)</Paragraph>
            <ProgressBar progress={progress} />
          </View>
        </Card.Content>
        <Card.Actions style={{ display: displayParcours }}>
          <Button onPress={() => {}}>Voir</Button>
          <Button onPress={() => {}}>Changer de parcours</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.card}>
        <TouchableRipple
          onPress={handlePressClasse}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Card.Title
            title="Ma classe"
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
