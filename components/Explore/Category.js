import React from 'react';
import { View, Text, Image } from 'react-native';

const Category = (props) => {
  return (
    <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.4, borderColor: '#ddd'}}>
      <View style={{flex:2}}>
        <Image source={props.imageUri} style={{flex:1, width: null, height: null, resizeMode: 'cover'}} />
      </View>
      <View style={{flex:1, paddingLeft: 10, paddingTop:10}}>
        <Text>{props.name}</Text>
      </View>
    </View>

  )
}

export default Category;