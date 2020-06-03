import * as RNEP from "@estimote/react-native-proximity"
import { Alert } from 'react-native'

const config = require('./config.json')

const startProximityObserver = (updateBeaconsInRange) => {
  const ESTIMOTE_APP_ID = config.ESTIMOTE_APP_ID
  const ESTIMOTE_APP_TOKEN = config.ESTIMOTE_APP_TOKEN

  const allBeacons = new RNEP.ProximityZone(5, 'museum')

  allBeacons.onChangeAction = context => {
    const numOfBeaconsInRange = context.length
    let arrayOfBeaconNames = []

    for(let i = 0; i < numOfBeaconsInRange; i++){
      const beaconID = context[i].deviceIdentifier
      const beaconName = config[beaconID]
      arrayOfBeaconNames.push(beaconName)
    }

    updateBeaconsInRange(arrayOfBeaconNames)
  }

  RNEP.locationPermission.request().then(
    permission => {
      console.log(`location permission: ${permission}`)

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
        RNEP.proximityObserver.startObservingZones([allBeacons])
      }
    },

    error => {
      console.error("Error when trying to obtain location permission", error)
    }
  )
}

const stopProximityObserver = () => { RNEP.proximityObserver.stopObservingZones() }

export { startProximityObserver, stopProximityObserver }
