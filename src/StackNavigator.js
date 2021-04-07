import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import BottomTabs from './BottomTabs';
import Details from './Details';

const Stack = createStackNavigator();

const Header = ({ scene, previous, navigation }) => {
  const theme = useTheme();
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header
      theme={{ colors: { primary: theme.colors.surface } }}
    >
    {previous ? (
      <Appbar.BackAction
        onPress={navigation.goBack}
        color={theme.colors.primary}
      />
    ) : (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => {
          ((navigation )).openDrawer();
        }}
      >
        <Avatar.Image
          size={40}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
          }}
        />
      </TouchableOpacity>
    )}
    <Appbar.Content
      title={
        title === 'Feed' ? (
          <MaterialCommunityIcons
            style={{ marginRight: 10 }}
            name="twitter"
            size={40}
            color={theme.colors.primary}
          />
        ) : (
          title
        )
      }
      titleStyle={{
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.primary,
      }}
    />
  </Appbar.Header>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="FeedList"
        component={BottomTabs}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;