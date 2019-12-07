import React from 'react';
import { View, SafeAreaView, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SafeViewAndroid from '../components/SafeViewAndroid';

const Explore = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
          <View style={{
              flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset:{width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, marginTop: Platform.Os === 'android' ? 30 : null
          }}>
            <Icon name="ios-search" size={20} style={{marginRight: 20}}/>
            <TextInput 
              underlineColorAndroid='transparent'
              placeholder="Try Accra" 
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Explore;