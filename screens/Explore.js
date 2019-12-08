import React from 'react';
import { View, Text, SafeAreaView, TextInput, Platform, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SafeViewAndroid from '../components/SafeViewAndroid';

const Explore = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ flex: 1 }}>
        {/* Header View */}
        <View style={{ height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
          <View style={{
              flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset:{width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, marginTop: Platform.Os === 'android' ? 30 : null
          }}>
            <Icon name="ios-search" size={20} style={{marginRight: 20}}/>
            <TextInput 
              underlineColorAndroid='transparent'
              placeholder="Try Ghana"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
            />
          </View>
        </View>
        {/** End of Header View */}
        <ScrollView scrollEventThrottle={16}>
            <View style={{flex:1, paddingTop: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20, minHeight: '100%'}}>
                What can we help you find, Victor?</Text>
            </View>
            <View style={{height: 130, marginTop: 20}}>
              <ScrollView>
                <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.4, borderColor: '#ddd'}}>
                  <View style={{flex:2}}>
                    <Image source={require('../assets/home.jpeg')} style={{flex:1, width: null, height: null, resizeMode: 'cover'}} />
                  </View>
                  <View style={{flex:1, paddingLeft: 10, paddingTop:10}}>
                    <Text>Home</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Explore;