import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';

const App = (props) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
  },
  Saved: {
    screen: Saved
  },
  Trips: {
    screen: Trips
  },
  Inbox: {
    screen: Inbox
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator);