import React from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import {
	Button
} from 'react-native-elements'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

const TourStopButtons = (props) => {
  return(
    <View style = { styles.mainContainer }>
      <View style =  { styles.buttonContainer }>
        <View style = { styles.buttonWrapper }>
          <ButtonEx
            title = "Next Stop!"
            />
        </View>
      </View>
    </View>
  )
}

export default TourStopButtons

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
		width: '66%',
		alignSelf: 'center',
		marginBottom: 10,
	},
	buttonWrapper: {

		marginBottom: 10,
	}
})
