import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button,
} from 'react-native-elements'
import{
	withNavigation
} from 'react-navigation'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'
import fontSizes from '../modules/FontSizes'

const ButtonEx = withPreventDoubleClick(Button)

class ExitScreen extends React.Component{
	render(){
		return(
			<SafeAreaView style = { styles.safeArea }>
				<View style = { styles.mainContainer }>
					<Text style = { styles.text }>Are you sure you want to exit the tour and return to the Home Screen?</Text>
					<View style = { styles.buttonContainer }>
						<View style = { styles.buttonWrapper }>
							<ButtonEx
								title = 'Yes'
								onPress = { () => this.props.navigation.popToTop() }
							/>
						</View>

						<View style = { styles.buttonWrapper }>
							<ButtonEx
								title = 'No'
								onPress = { () => this.props.navigation.goBack() }
							/>
						</View>
					</View>
				</View>
			</SafeAreaView>
		)
	}
}

export default withNavigation(ExitScreen)

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontFamily: 'Whitney-Medium',
		fontSize: fontSizes.body,
		lineHeight: (fontSizes.body * 1.25),
		textAlign: 'justify'
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10,
	},
	buttonWrapper: {
		width: '33%',
	}
})