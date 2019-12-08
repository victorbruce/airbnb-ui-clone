import React from 'react';
import { View, Text, Image } from 'react-native';
import StartRating from 'react-native-star-rating';

const Home = (props) => {
  return (
    <View style={{width: props.width/2 - 30, height: props.width/2 - 30, borderWidth: 0.5, borderColor: '#ddd', marginBottom: 10}}>
      <View style={{flex:1}}>
        <Image source={require('../../assets/home.jpeg')} style={{flex:1, width: null, height: null, resizeMode:'cover'}} />
      </View>
      <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
        <Text style={{fontSize: 10, color: '#b63838'}}>{props.type}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{fontSize: 10}}>${props.price}</Text>
        <StartRating disabled={true} maxStars={5} rating={props.rating} starSize={10} />
      </View>
  </View>
  )
}

export default Home;