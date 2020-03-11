import React, { useState } from 'react'

import {
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Switch,
	Text,
	View
} from 'react-native'

import {
	Button,
	Icon
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'
import colors from '../modules/Colors'
import fontSizes from '../modules/FontSizes'
import links from '../modules/Links'

const ButtonEx = withPreventDoubleClick(Button)

const DiscoverScreen = (props) => {
	const [discoverModeBool, setDiscoverModeBool] = useState(false)

	return(
		<SafeAreaView style = { styles.safeArea }>
			<View style = { styles.mainContainer }>
				<Text style = { styles.switchHeader }>Discover mode:</Text>
				<View style = { styles.switchContainer }>
					<Text style = { styles.switchLabel }>Off</Text>
					<Switch
						onValueChange = { () => { setDiscoverModeBool(!discoverModeBool) }}
						value = { discoverModeBool }
					/>
					<Text style = { styles.switchLabel }>On</Text>
				</View>

				<View style = { styles.searchingContainer }>
					<ActivityIndicator
						size = 'large'
						color = { discoverModeBool ? colors.ummnhLightBlue : 'gray'}
						hidesWhenStopped = { false }
						animating = { discoverModeBool }
					/>
					<Text style = { styles.searchingSubheader }>
						{ discoverModeBool ? 'Searching for nearby exhibits...' : 'Discover mode disabled' }
					</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default DiscoverScreen

const styles = StyleSheet.create({
	safeArea: {
    flex: 1,
		alignItems: 'center'
	},
	mainContainer: {
		flex: 1,
		width: '90%',
		alignItems: 'center'
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	switchHeader: {
		fontFamily: 'Whitney-Semibold',
		fontSize: fontSizes.subheader,
		marginTop: 10,
		marginBottom: 10,
	},
	switchLabel: {
		marginLeft: 10,
		marginRight: 10,
		fontFamily: 'Whitney-Medium',
		fontSize: fontSizes.body,
	},
	searchingContainer: {
		marginTop: 10
	},
	searchingSubheader: {
		marginTop: 10,
		fontFamily: 'Whitney-Medium',
		fontSize: fontSizes.body
	}
})
