import React from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import {
	withNavigation
} from 'react-navigation'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

class StopHero extends React.Component {
	pushScreen = (screenToPush) => {
		this.props.navigation.push(screenToPush)
	}

	render() {
		return (
			<View style = { styles.mainContainer }>
				<Image
					source = { this.props.image }
					style = { styles.image }
				/>

				<View style = { styles.buttonWrapper }>
					<ButtonEx 
						title = 'Image Gallery'
						onPress = { () => this.pushScreen() }
					/>
				</View>
			</View>
		)
	}
}

export default withNavigation(StopHero)

const styles = StyleSheet.create({
	mainContainer:{
		width: '100%',
		aspectRatio: 1920/1080,
	},
	image: {
		width: '100%',
		flex: 1,
		resizeMode: 'contain'
	},
	buttonWrapper: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		marginLeft: 5,
		marginRight: 5,
	},
})