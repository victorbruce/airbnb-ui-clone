import React from 'react';
import { View, Text, SafeAreaView, TextInput, Platform, ScrollView, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SafeViewAndroid from '../components/SafeViewAndroid';

// Component
import Category from '../components/Explore/Category';
import Home from '../components/Explore/Home';

const { height, width } = Dimensions.get('window');

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
              placeholder="Try Accra"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
            />
          </View>
        </View>
        {/** End of Header View */}
        <ScrollView scrollEventThrottle={16}>
            <View style={{flex:1, paddingTop: 20}}>
              <View>
                <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20, minHeight: '100%'}}>
                  What can we help you find, Victor?</Text>
              </View>
              {/** Category Section */}
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category name="Home" imageUri={require('../assets/home.jpeg')} />
                  <Category name="Experiences" imageUri={require('../assets/experiences.jpeg')} />
                  <Category name="Restaurant" imageUri={require('../assets/restaurant.jpeg')} />
                </ScrollView>
              </View>
              {/** End of Category Section */}
              <View style={{marginTop: 40, paddingHorizontal: 20}}>
                <Text style={{fontSize: 24, fontWeight: '700'}}>Introducing Airbnb Plus</Text>
                <Text style={{fontWeight: '100', marginTop: 10}}>A new selection of homes verified for quality & comfort</Text>
                <View style={{width: width-40, height: 200, marginTop: 20}}>
                  <Image source={require('../assets/home.jpeg')} style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}}/>
                </View>
              </View>{/** End of Introduction section */}
            </View>{/**End of Wrapper */}
            <View style={{marginTop: 40}}>
              <Text style={{fontSize:24, fontWeight: '700', paddingHorizontal: 20}}>
                Homes around the world
              </Text>
              <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
                <Home width={width} name="The cozy place" type="PRIVATE ROOM - 2 BEDS" price={82} rating={4}/>
                <Home width={width} name="The cozy place" type="PRIVATE ROOM - 2 BEDS" price={82} rating={4}/>
                <Home width={width} name="The cozy place" type="PRIVATE ROOM - 2 BEDS" price={82} rating={4}/>
              </View>
            </View>
        </ScrollView>
        
      </View>
    </SafeAreaView>
  )
}

export default Explore;