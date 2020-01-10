import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  createAppContainer
} from 'react-navigation'

import {
  createStackNavigator
} from 'react-navigation-stack'

import AsyncStorage from '@react-native-community/async-storage'

import firebase from 'react-native-firebase';

import HomeScreen from './app/views/HomeScreen'
import AboutScreen from './app/views/AboutScreen'
import BlankMap from './app/views/BlankMap'
import TodayAtUMMNHScreen from './app/views/TodayAtUMMNHScreen'
import GalleryScreen from './app/views/GalleryScreen'
import ExitScreen from './app/views/ExitScreen'

//Navigation Screens
import HighlightsTourShortNav1 from './app/views/HighlightsTourShort/HighlightsTourShortNav1'
import HighlightsTourShortNav2 from './app/views/HighlightsTourShort/HighlightsTourShortNav2'

//Stop Screens
import HighlightsTourShortStop1 from './app/views/HighlightsTourShort/HighlightsTourShortStop1'
import HighlightsTourShortStop2 from './app/views/HighlightsTourShort/HighlightsTourShortStop2'

//Map Screens
import HighlightsTourShortMap1 from './app/views/HighlightsTourShort/HighlightsTourShortMap1'
import HighlightsTourShortMap2 from './app/views/HighlightsTourShort/HighlightsTourShortMap2'

//Exhibit Screens
import Mastodons from './app/views/Exhibits/Mastodons'
import MichiganRivers from './app/views/Exhibits/MichiganRivers'

import colors from './app/modules/Colors'

export default class App extends React.Component {

  //When application loads, check for permissions and listen for notifications
  componentDidMount = async () => {
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
      <AppContainer />
    )
  }
};


//Navigation Stack
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Map: BlankMap,
    TodayAtUMMNH: TodayAtUMMNHScreen,
    GalleryScreen: GalleryScreen,
    Exit: ExitScreen,
    
    //Navigation
    HighlightsTourShortNav1: HighlightsTourShortNav1,
    HighlightsTourShortNav2: HighlightsTourShortNav2,

    //Maps
    HighlightsTourShortMap1: HighlightsTourShortMap1,
    HighlightsTourShortMap2: HighlightsTourShortMap2,

    //Stops
    HighlightsTourShortStop1: HighlightsTourShortStop1,
    HighlightsTourShortStop2: HighlightsTourShortStop2,

    //Exhibits
    Mastodons: Mastodons,
    MichiganRivers: MichiganRivers,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: colors.ummnhDarkBlue
      },
      headerBackTitleStyle: {
        color: colors.ummnhDarkBlue
      },
      headerTintColor: colors.ummnhDarkBlue,

    }
  },
)

//App Container
const AppContainer = createAppContainer(RootStack)