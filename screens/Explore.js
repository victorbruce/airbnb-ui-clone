import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Explore;