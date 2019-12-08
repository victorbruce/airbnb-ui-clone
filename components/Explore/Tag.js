import React from 'react';
import {View, Text} from 'react-native';

const Tags = (props) => {
  return (
    <View style={{minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#ddd',   borderWidth: 0.2, borderRadius: 2, marginRight: 5}}>
      <Text style={{fontSize: 10, fontWeight: '700'}}>{props.name}</Text>
    </View>
  )
}

export default Tags;