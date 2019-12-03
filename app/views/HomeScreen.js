import React from 'react'
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import images from '../modules/Images'
import colors from '../modules/Colors'

export default class HomeScreen extends React.Component {
	render() {
		return (
			<ImageBackground style = { styles.imageBackground } source = { images.homescreenBackground }>
				<SafeAreaView style = { styles.mainContainer }>
					<View style = { styles.menuContainer }>
						<Text style = { styles.helloWorld }>Hello World!</Text>
					</View>
				</SafeAreaView>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '90%',
		alignItems: 'center',
	},
	imageBackground: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
	},
	menuContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		marginTop: 10,
		marginBottom: 10,
		alignItems: 'center'
	},
	helloWorld:{
		fontFamily: 'Whitney-Bold',
		color: colors.ummnhDarkBlue,
	}
})