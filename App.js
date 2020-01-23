import React, { useEffect } from 'react';
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

import SplashScreen from 'react-native-splash-screen'

import AsyncStorage from '@react-native-community/async-storage'

import firebase from 'react-native-firebase';

import HomeScreen from './app/views/HomeScreen'
import AboutScreen from './app/views/AboutScreen'
import BlankMap from './app/views/BlankMap'
import TodayAtUMMNHScreen from './app/views/TodayAtUMMNHScreen'
import GalleryScreen from './app/views/GalleryScreen'
import ExitScreen from './app/views/ExitScreen'
import EndOfTourScreen from './app/views/EndOfTourScreen'
import TourPreviewScreen from './app/views/TourPreviewScreen'

//Navigation Screens
import HighlightsTourShortNav1 from './app/views/HighlightsTourShort/HighlightsTourShortNav1'
import HighlightsTourShortNav2 from './app/views/HighlightsTourShort/HighlightsTourShortNav2'
import HighlightsTourShortNav3 from './app/views/HighlightsTourShort/HighlightsTourShortNav3'
import HighlightsTourShortNav4 from './app/views/HighlightsTourShort/HighlightsTourShortNav4'
import HighlightsTourShortNav5 from './app/views/HighlightsTourShort/HighlightsTourShortNav5'
import HighlightsTourShortNav6 from './app/views/HighlightsTourShort/HighlightsTourShortNav6'
import HighlightsTourShortNav7 from './app/views/HighlightsTourShort/HighlightsTourShortNav7'

//Map Screens
import HighlightsTourShortMap1 from './app/views/HighlightsTourShort/HighlightsTourShortMap1'
import HighlightsTourShortMap2 from './app/views/HighlightsTourShort/HighlightsTourShortMap2'
import HighlightsTourShortMap3 from './app/views/HighlightsTourShort/HighlightsTourShortMap3'
import HighlightsTourShortMap4 from './app/views/HighlightsTourShort/HighlightsTourShortMap4'
import HighlightsTourShortMap5 from './app/views/HighlightsTourShort/HighlightsTourShortMap5'
import HighlightsTourShortMap6 from './app/views/HighlightsTourShort/HighlightsTourShortMap6'
import HighlightsTourShortMap7 from './app/views/HighlightsTourShort/HighlightsTourShortMap7'

//Stop Screens
import HighlightsTourShortStop1 from './app/views/HighlightsTourShort/HighlightsTourShortStop1'
import HighlightsTourShortStop2 from './app/views/HighlightsTourShort/HighlightsTourShortStop2'
import HighlightsTourShortStop3 from './app/views/HighlightsTourShort/HighlightsTourShortStop3'
import HighlightsTourShortStop4 from './app/views/HighlightsTourShort/HighlightsTourShortStop4'
import HighlightsTourShortStop5 from './app/views/HighlightsTourShort/HighlightsTourShortStop5'
import HighlightsTourShortStop6 from './app/views/HighlightsTourShort/HighlightsTourShortStop6'
import HighlightsTourShortStop7 from './app/views/HighlightsTourShort/HighlightsTourShortStop7'

import colors from './app/modules/Colors'

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
    EndOfTour: EndOfTourScreen,
    TourPreview: TourPreviewScreen,
    
    //Navigation
    HighlightsTourShortNav1: HighlightsTourShortNav1,
    HighlightsTourShortNav2: HighlightsTourShortNav2,
    HighlightsTourShortNav3: HighlightsTourShortNav3,
    HighlightsTourShortNav4: HighlightsTourShortNav4,
    HighlightsTourShortNav5: HighlightsTourShortNav5,
    HighlightsTourShortNav6: HighlightsTourShortNav6,
    HighlightsTourShortNav7: HighlightsTourShortNav7,

    //Maps
    HighlightsTourShortMap1: HighlightsTourShortMap1,
    HighlightsTourShortMap2: HighlightsTourShortMap2,
    HighlightsTourShortMap3: HighlightsTourShortMap3,
    HighlightsTourShortMap4: HighlightsTourShortMap4,
    HighlightsTourShortMap5: HighlightsTourShortMap5,
    HighlightsTourShortMap6: HighlightsTourShortMap6,
    HighlightsTourShortMap7: HighlightsTourShortMap7,

    //Stops
    HighlightsTourShortStop1: HighlightsTourShortStop1,
    HighlightsTourShortStop2: HighlightsTourShortStop2,
    HighlightsTourShortStop3: HighlightsTourShortStop3,
    HighlightsTourShortStop4: HighlightsTourShortStop4,
    HighlightsTourShortStop5: HighlightsTourShortStop5,
    HighlightsTourShortStop6: HighlightsTourShortStop6,
    HighlightsTourShortStop7: HighlightsTourShortStop7,
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