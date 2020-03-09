import 'react-native-gesture-handler'
import React from 'react'
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import {
	Icon,
} from 'react-native-elements'

import {
  NavigationContainer
} from '@react-navigation/native'

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'

import {
  createStackNavigator
} from 'react-navigation-stack'

import SplashScreen from 'react-native-splash-screen'

import AsyncStorage from '@react-native-community/async-storage'

import firebase from 'react-native-firebase'

//Stacks
import HomeStack from './app/stacks/HomeStack'
import TodayStack from './app/stacks/TodayStack'
import ExhibitListStack from './app/stacks/ExhibitListStack'
import DiscoverStack from './app/stacks/DiscoverStack'

import HomeScreen from './app/views/HomeScreen'
import AboutScreen from './app/views/AboutScreen'
import BlankMap from './app/views/BlankMap'
import TodayAtUMMNHScreen from './app/views/TodayAtUMMNHScreen'
import ExhibitListScreen from './app/views/ExhibitListScreen'
import DiscoverScreen from './app/views/DiscoverScreen'
import GalleryScreen from './app/views/GalleryScreen'
import ExitScreen from './app/views/ExitScreen'
import EndOfTourScreen from './app/views/EndOfTourScreen'
import TourPreviewScreen from './app/views/TourPreviewScreen'

import colors from './app/modules/Colors'

const Tab = createBottomTabNavigator()

export default class App extends React.Component {

  //When application loads, check for permissions and listen for notifications
  componentDidMount = async () => {
    SplashScreen.hide()
    this.checkPermission()
    this.createNotificationListeners()
  }

  //Remove listeners allocated in createNotificationListener
  componentWillUnmount(){
    this.notificationListener()
    //this.notificationOpenedListener()
  }

  //Check if permission given
  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();

    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //Request permission if not granted
  requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      this.getToken()
    } catch (error) {
      console.log('permission rejected')
    }
  }

  //Store Firebase token
  getToken = async () => {
    let fcmToken = null

    try {
      fcmToken = await AsyncStorage.getItem('fcmToken')
    } catch (e) {
      console.log('error trying to fetch fcm token (it likely does not exist)', e)
    }

    if(!fcmToken) {
      console.log('fcm token is null')

      fcmToken = await firebase.messaging().getToken();

      if(fcmToken){
        console.log('fcm token is no longer null')
        try {
          console.log('current fcm token', fcmToken)
          await AsyncStorage.setItem('fcmToken', fcmToken)
        } catch (e) {
          console.log('could not save fcm token to async storage', e)
        }
      }
    }
  }

  createNotificationListeners = async () => {

    //Message received while app in foreground
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification
      this.showAlert(title, body)
    })

    //Message received while app in background/tapped
    // this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
    //   const {title, body } = notificationOpen.notification;
    //   this.showAlert(title, body)
    // })

    //Message received while app closed/tapped
    // const notificationOpen = await firebase.notifications().getInitialNotification()

    // if(notificationOpen){
    //   const { title, body } = notificationOpen.notification
    //   this.showAlert(title, body)
    // }

    //Data Only Message
    this.messageListener = firebase.messaging().onMessage((message) => {
      console.log(JSON.stringify(message))
    })
  }

  showAlert(title, body){
    Alert.alert(
      title, body,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false },
    )
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if(route.name === 'Home') {
                iconName = 'md-home'
              } else if(route.name === 'Today'){
                iconName = 'md-calendar'
              } else if(route.name === 'Exhibits'){
                iconName = 'md-list'
              } else if(route.name === 'Discover'){
                iconName = 'md-compass'
              }

              return <Icon type='ionicon' name = {iconName} color = {color}/>
            }
          })}
          tabBarOptions = {{
            activeTintColor: colors.ummnhLightBlue,
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name = "Home" component = {HomeStack}/>
          <Tab.Screen name = "Today" component = {TodayStack}/>
          <Tab.Screen name = "Exhibits" component = {ExhibitListStack}/>
          <Tab.Screen name = "Discover" component = {DiscoverStack}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
};


//Navigation Stack
// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     About: AboutScreen,
//     Map: BlankMap,
//     TodayAtUMMNH: TodayAtUMMNHScreen,
//     GalleryScreen: GalleryScreen,
//     Exit: ExitScreen,
//     EndOfTour: EndOfTourScreen,
//     TourPreview: TourPreviewScreen,
//
//     //Navigation
//     HighlightsTourShortNav1: HighlightsTourShortNav1,
//     HighlightsTourShortNav2: HighlightsTourShortNav2,
//     HighlightsTourShortNav3: HighlightsTourShortNav3,
//     HighlightsTourShortNav4: HighlightsTourShortNav4,
//     HighlightsTourShortNav5: HighlightsTourShortNav5,
//     HighlightsTourShortNav6: HighlightsTourShortNav6,
//     HighlightsTourShortNav7: HighlightsTourShortNav7,
//
//     //Maps
//     HighlightsTourShortMap1: HighlightsTourShortMap1,
//     HighlightsTourShortMap2: HighlightsTourShortMap2,
//     HighlightsTourShortMap3: HighlightsTourShortMap3,
//     HighlightsTourShortMap4: HighlightsTourShortMap4,
//     HighlightsTourShortMap5: HighlightsTourShortMap5,
//     HighlightsTourShortMap6: HighlightsTourShortMap6,
//     HighlightsTourShortMap7: HighlightsTourShortMap7,
//
//     //Stops
//     HighlightsTourShortStop1: HighlightsTourShortStop1,
//     HighlightsTourShortStop2: HighlightsTourShortStop2,
//     HighlightsTourShortStop3: HighlightsTourShortStop3,
//     HighlightsTourShortStop4: HighlightsTourShortStop4,
//     HighlightsTourShortStop5: HighlightsTourShortStop5,
//     HighlightsTourShortStop6: HighlightsTourShortStop6,
//     HighlightsTourShortStop7: HighlightsTourShortStop7,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerTitleStyle: {
//         color: colors.ummnhDarkBlue
//       },
//       headerBackTitleStyle: {
//         color: colors.ummnhDarkBlue
//       },
//       headerTintColor: colors.ummnhDarkBlue,
//
//     }
//   },
// )
