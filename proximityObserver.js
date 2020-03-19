import * as RNEP from "@estimote/react-native-proximity"
import { Alert } from 'react-native'

const config = require('./config.json')

const startProximityObserver = () => {
  console.log("starting proximity observer")

  const ESTIMOTE_APP_ID = config.ESTIMOTE_APP_ID
  const ESTIMOTE_APP_TOKEN = config.ESTIMOTE_APP_TOKEN

  const whiteZone = new RNEP.ProximityZone(5, 'white')
  whiteZone.onEnterAction = context => {
    console.log("entered the white zone", context)
    Alert.alert("You entered the white zone.")
  }
  whiteZone.onExitAction = context => {
    console.log("left the white zone", context)
    Alert.alert("You exited the white zone.")
  }

  RNEP.locationPermission.request().then(
    permission => {
      console.log(`location permission: ${permission}`)
      console.log('app id:', ESTIMOTE_APP_ID)
      console.log('app token:', ESTIMOTE_APP_TOKEN)

      if(permission !== RNEP.locationPermission.DENIED){
        const credentials = new RNEP.CloudCredentials(
          ESTIMOTE_APP_ID,
          ESTIMOTE_APP_TOKEN
        )

        const config = {
          notification: {
            title: "Discover mode is on",
            text: "We'll let you know when you're near an exhibit we want to tell you more about!",

            channel: {
              id: "discover-mode",
              name: "Discover Mode"
            }
          }
        }

        RNEP.proximityObserver.initialize(credentials, config)
        RNEP.proximityObserver.startObservingZones([whiteZone])
      }
    },

    error => {
      console.error("Error when trying to obtain location permission", error)
    }
  )
}

const stopProximityObserver = () => { RNEP.proximityObserver.stopObservingZones() }

export { startProximityObserver, stopProximityObserver }
