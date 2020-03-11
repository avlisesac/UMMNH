import React from 'react'

import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
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

export default class DiscoverScreen extends React.Component {
	componentDidMount = () => {
		Analytics.logEvent('Viewed_ExhibitListScreen')
	}

	render() {
		return (
			<SafeAreaView style = { styles.safeArea }>
        <Text>Discover Screen</Text>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	safeArea: {
    flex: 1,
	},
})
